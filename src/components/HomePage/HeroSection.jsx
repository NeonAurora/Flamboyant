import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import heroImage from "assets/red-floor.jpg"; // Make sure to adjust the path to your image.

function HeroSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "500px",
        margin: "1% 3% 1% 3%",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // So that the overlay can be absolutely positioned within it
        borderRadius: "md",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "30%",
          background: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Typography variant="h1" color={theme.palette.text.main}>
          Make Your Dreams Come True
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute", // Overlay box position
          top: 0,
          right: 0,
          bottom: 0,
          width: "70%", // Half the width of the hero section
          background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
          // Gradient effect
          display: "flex",
          alignItems: "center", // Vertically centers the typography
          paddingLeft: "5%", // Some spacing for the typography
        }}
      />
    </Box>
  );
}

export default HeroSection;
