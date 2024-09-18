import React from "react";
import { Button } from "@mui/material";

interface AddCheckInButtonProps {
  onClick: () => void;
}

const AddCheckInButton: React.FC<AddCheckInButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#9b59b6",
        padding: "10px 20px",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        marginTop: "20px",
      }}
      onClick={onClick}
    >
      Add Check In
    </Button>
  );
};

export default AddCheckInButton;
