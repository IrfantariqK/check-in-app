import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { storage, ref, uploadBytes, getDownloadURL } from "@/lib/firebase"; // Import the functions

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (newCheckIn: {
    title: string;
    imageUrl: string;
    date: string; // Date will be an empty string for now
    owner: string; // Owner will be empty for now
    rooms?: number; // Optional: undefined for now
    guests?: number; // Optional: undefined for now
  }) => void;
}

export default function AddCheckInModal({ open, onClose, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAdd = async () => {
    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `images/${imageFile.name}`);
    try {
      // Upload the image
      await uploadBytes(storageRef, imageFile);

      // Get the image URL
      const imageUrl = await getDownloadURL(storageRef);

      onAdd({ title, imageUrl, date: "", owner: "" }); // Only save title and image
      setTitle("");
      setImageFile(null);
      onClose();
    } catch (error) {
      console.error("Error uploading image: ", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "32px",
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
          marginTop: "5%",
          borderRadius: "12px",
          boxShadow: 23,
          outline: "none",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "16px", fontWeight: 600 }}>
          Add Check In
        </Typography>
        <TextField
          placeholder="Enter title"
          label="Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: "24px" }}
        />
        <Box
          sx={{
            border: "2px dashed #ccc",
            padding: "32px",
            textAlign: "center",
            borderRadius: "12px",
            marginBottom: "24px",
            backgroundColor: "#fafafa",
          }}
        >
          <input
            accept="image/*"
            type="file"
            style={{ display: "none" }}
            id="image-upload"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <IconButton component="span">
              <CloudUpload sx={{ fontSize: 50, color: "#888" }} />
            </IconButton>
          </label>
          <Typography variant="body2" sx={{ color: "#888" }}>
            Click or drag file to this area to upload
          </Typography>
          {imageFile && (
            <Typography sx={{ marginTop: "8px", color: "#6a1b9a" }}>
              {imageFile.name}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} variant="outlined" sx={{ marginRight: 2 }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a1b9a",
              "&:hover": { backgroundColor: "#4a0072" },
            }}
            onClick={handleAdd}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
