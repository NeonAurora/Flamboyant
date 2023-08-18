import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import androidDevImage from "assets/andro-dev.jpg"; // Importing the new image
import { useTheme } from "@mui/material";

const AndroidDev = () => {
  // Changing the component name
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 500,
        mt: 2,
        borderRadius: 2,
        background: theme.palette.accent.dark,
        backdropFilter: "blur(4px)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={androidDevImage} // Using the new image
        alt="Android Development"
        title="Android Development"
      />
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Android App Development
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Crafting Robust Mobile Experiences
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ lineHeight: 1.7, mb: 2 }}
        >
          We harness the power of Android's versatile platform to create
          dynamic, user-friendly, and engaging applications meticulously
          tailored for diverse user needs and preferences.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ lineHeight: 1.5, mb: 2 }}>
          Features:
        </Typography>
        <List dense sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Intuitive UI/UX Design" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Cross-device Compatibility" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Seamless Performance" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemText primary="Regular Updates & Maintenance" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};

export default AndroidDev;
