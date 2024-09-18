import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={2}
      sx={{ paddingY: 1, backgroundColor: "#fff" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side - Logo */}
        <Box display="flex" alignItems="center">
         
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#333", fontWeight: 600 }}
          >
            Logo
          </Typography>
        </Box>

        {/* Right side - Icons and Button */}
        <Box display="flex" alignItems="center">
          {/* Feedback Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginRight: 2,
              textTransform: "none",
              backgroundColor: "#6a1b9a",
              "&:hover": {
                backgroundColor: "#6a1b9a",
              },
            }}
          >
            Feedback
          </Button>

          {/* Info Circle Icon */}
          <IconButton
            aria-label="info"
            sx={{
              color: "#333",
              "&:hover": { color: "#4F46E5" },
              marginRight: 1,
            }}
          >
            <InfoIcon />
          </IconButton>

          {/* Notification Icon */}
          <IconButton
            aria-label="notifications"
            sx={{
              color: "#333",
              "&:hover": { color: "#4F46E5" },
              marginRight: 1,
            }}
          >
            <NotificationsIcon />
          </IconButton>

          {/* Profile Avatar */}
          <IconButton aria-label="profile">
            <Avatar
              alt="Profile"
              src="/profile.jpg"
              sx={{
                width: 40,
                height: 40,
                "&:hover": {
                  border: "2px solid #4F46E5",
                },
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
