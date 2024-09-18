import React from "react";
import { Typography, Box } from "@mui/material";

const BannerText: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Hi! 👋 James Doe
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Lorem ipsus dolor sit amen, something important to say here.
      </Typography>
    </Box>
  );
};

export default BannerText;
