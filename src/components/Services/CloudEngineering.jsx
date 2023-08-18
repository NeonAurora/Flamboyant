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
import cloudImage from "assets/cloud.jpg";
import { useTheme } from "@mui/material";

const CloudEngineering = () => {
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
        image={cloudImage}
        alt="Cloud Engineering"
        title="Cloud Engineering"
      />
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Cloud Engineering
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Empowering Businesses with Cloud
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ lineHeight: 1.7, mb: 2 }}
        >
          Offering comprehensive end-to-end cloud solutions, our aim is to
          transform, innovate, and streamline your operations, seamlessly
          leveraging the immense power and flexibility of the cloud environment.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ lineHeight: 1.5, mb: 2 }}>
          Features:
        </Typography>
        <List dense sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Cloud Migration" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Infrastructure Automation" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Cloud-native Development" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemText primary="Security & Compliance" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Explore More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CloudEngineering;
