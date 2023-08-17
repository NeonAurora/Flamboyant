import { IconButton, Typography, Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { setMode } from "state";
import { useTheme } from "@mui/material";

function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  const isDarkMode = mode === "dark";
  const theme = useTheme();

  return (
    <nav className="bg-glowing-dark rounded-md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // sx={{ paddingTop: "2%" }}
        sx={{ padding: "1% 1% 1% 1%" }}
      >
        {/* Left Side: Company Name */}
        <Typography
          variant="h1"
          component="div"
          color={theme.palette.text.main}
          sx={{ fontWeight: "bold" }}
        >
          Glovision
        </Typography>

        {/* Right Side: Mode Controller and Nav Items */}
        <Box
          display="flex"
          alignItems="center"
          gap={5}
          sx={{ paddingTop: "1%", paddingRight: "4%" }}
        >
          {/* Mode Controller */}
          <IconButton onClick={() => dispatch(setMode())}>
            {isDarkMode ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>

          {/* Nav items */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              "& > button": {
                textTransform: "none", // Keeps the text in its original case
                fontWeight: "bold",
              },
            }}
          >
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Home
              </Typography>
            </Button>
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Products
              </Typography>
            </Button>
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Services
              </Typography>
            </Button>
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Achievements
              </Typography>
            </Button>
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Contact
              </Typography>
            </Button>
            <Button variant="text">
              <Typography variant="h4" color={theme.palette.text.light}>
                Sign In
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </nav>
  );
}

export default Navbar;
