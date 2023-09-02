import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import heroImage from "assets/red-floor.jpg";

function HeroSection() {
  const theme = useTheme();
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    // Using setTimeout to simulate delay for sliding effect on initial render
    setTimeout(() => {
      setSlide(true);
    }, 100);
  }, []);

  return (
    <Box
      sx={{
        height: "90vh",
        margin: "0% 0% 0% 0%",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        borderRadius: "md",
      }}
    >
      {/* Overlay to dim the image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.4)", // Adjust the transparency
        }}
      >
        {/* Main Heading */}
        <Box
          sx={{
            position: "absolute",
            top: "30%", // Adjust for positioning
            left: slide ? "10%" : "-40%", // Initial position for sliding
            transition: "left 1s ease-out",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              background: `linear-gradient(to right, ${theme.palette.accent.light}, ${theme.palette.text.dark})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              mixBlendMode: "difference",
              fontSize: "6rem",
            }}
          >
            Unleashing Ultimate
          </Typography>
        </Box>

        {/* Second Line of Heading */}
        <Box
          sx={{
            position: "absolute",
            top: "40%", // Adjust based on the desired gap between lines
            left: slide ? "10%" : "-20%", // Initial position for sliding
            transition: "left 1s ease-out", // Delay of 0.5s for the second line
          }}
        >
          <Typography
            variant="h1"
            sx={{
              background: `linear-gradient(to right, ${theme.palette.text.light}, ${theme.palette.text.dark})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              mixBlendMode: "difference",
              fontSize: "6rem",
            }}
          >
            Digital Innovations
          </Typography>
        </Box>

        {/* Subheading */}
        <Box
          sx={{
            position: "absolute",
            top: "55%", // Adjust based on the desired gap after the main heading
            left: slide ? "10%" : "-10%",
            transition: "left 1s ease-out", // Delay of 1s for the subheading
          }}
        >
          <Typography variant="h4" color={theme.palette.text.main}>
            Empowering the Next Generation of Innovators
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "65%", // Adjust based on where you want the button
            left: slide ? "10%" : "-10%",
            transition: "left 1s ease-out",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => window.open("https://google.com", "_blank")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              width: "200px",
              height: "40px",
              color: "white",
              fontFamily: "'Lato', sans-serif",
              fontWeight: "700",
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.1) 100%)`,
              borderRadius: "5px",
              position: "relative",
              cursor: "pointer",
              border: "none",
              overflow: "hidden",
              outline: "none",
              boxShadow:
                "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
              backdropFilter: "blur(5px)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                background: `linear-gradient(to right, ${theme.palette.accent[300]}, ${theme.palette.text.dark})`,
                borderRadius: "inherit",
                margin: "-2px",
              },
              "&:hover": {
                color: theme.palette.text.dark,
                background: `linear-gradient(to bottom right, ${theme.palette.text[600]}, ${theme.palette.accent.dark})`,
                boxShadow: "none",
                backdropFilter: "none",
              },
              "&::before, &::after": {
                position: "absolute",
                content: '""',
                height: "0%",
                width: "1px",
                boxShadow:
                  "-1px -1px 20px 0px rgba(255,255,255,1), -4px -4px 5px 0px rgba(255,255,255,1), 7px 7px 20px 0px rgba(0,0,0,.4), 4px 4px 5px 0px rgba(0,0,0,.3)",
                zIndex: -1,
              },
              "&::before": {
                right: 0,
                top: 0,
                transition: "all 500ms ease",
              },
              "&::after": {
                left: 0,
                bottom: 0,
                transition: "all 500ms ease",
              },
              "&:hover::before, &:hover::after": {
                height: "100%",
              },
              "& span": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                height: "100%",
                "&::before, &::after": {
                  position: "absolute",
                  content: '""',
                  boxShadow:
                    "-1px -1px 20px 0px rgba(255,255,255,1), -4px -4px 5px 0px rgba(255,255,255,1), 7px 7px 20px 0px rgba(0,0,0,.4), 4px 4px 5px 0px rgba(0,0,0,.3)",
                  zIndex: -1,
                },
                "&::before": {
                  left: 0,
                  top: 0,
                  width: "0%",
                  height: ".5px",
                  transition: "all 500ms ease",
                },
                "&::after": {
                  right: 0,
                  bottom: 0,
                  width: "0%",
                  height: ".5px",
                  transition: "all 500ms ease",
                },
                "&:hover::before": {
                  width: "100%",
                },
                "&:hover::after": {
                  width: "100%",
                },
              },
            }}
          >
            <span>Let's Talk</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
