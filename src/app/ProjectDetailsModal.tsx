import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onClose={onClose}>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover mb-4"
        />
        <Typography variant="body1">
          Date: {new Date(project.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">Owner: John Doe</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
