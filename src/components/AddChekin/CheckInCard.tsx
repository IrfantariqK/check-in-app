import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

// Define the CheckIn interface
interface CheckIn {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  owner: string;
  ownerAvatarUrl?: string; // Make this optional
}

interface CheckInCardProps {
  checkIn: CheckIn;
}

const CheckInCard: React.FC<CheckInCardProps> = ({ checkIn }) => {
  // State to handle dialog open/close
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Card Component */}
      <Card
        onClick={handleClickOpen}
        sx={{
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          },
          overflow: "hidden",
          width: "280px",
          position: "relative",
          margin: "20px auto", // Center and add spacing between cards
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={checkIn.imageUrl}
          alt={checkIn.title}
          sx={{
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#6a1b9a",
            color: "white",
            padding: "4px 10px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          aria-label="Checked In"
        >
          Checked In
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "6px",
            }}
          >
            {checkIn.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: "16px" }}
          >
            {checkIn.date}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt={checkIn.owner}
              src={checkIn.ownerAvatarUrl || "https://via.placeholder.com/40"}
              sx={{ width: 40, height: 40, border: "2px solid #6a1b9a" }}
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: "10px", color: "#666" }}
            >
              Owner: {checkIn.owner}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Dialog for displaying booking details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Detail</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <TextField
                  label="Booking ID"
                  defaultValue={checkIn.id}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Rooms"
                  type="number"
                  defaultValue="4" // Replace with actual data if available
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Number of Guests"
                  type="number"
                  defaultValue="4" // Replace with actual data if available
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Booked Date"
                  type="date"
                  defaultValue={checkIn.date}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
              </Box>

              <Box sx={{ flexShrink: 0 }}>
                <img
                  src={checkIn.imageUrl}
                  alt={checkIn.title}
                  style={{
                    width: "100%",
                    maxWidth: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CheckInCard;
