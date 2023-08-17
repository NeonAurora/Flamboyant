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
import serviceImage from "assets/neon-teal-pc-graphics.jpg";
import { useTheme } from "@mui/material";

const SoftwareDev = () => {
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
        image={serviceImage}
        alt="Custom Software Development"
        title="Custom Software Development"
      />
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Custom Software Development
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Building Bespoke Digital Solutions
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ lineHeight: 1.7, mb: 2 }}
        >
          Our team is equipped with the expertise to craft software tailored to
          your operational needs. We integrate seamlessly into your ecosystem,
          ensuring sustainable and scalable results.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ lineHeight: 1.5, mb: 2 }}>
          Features:
        </Typography>
        <List dense sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Scalable Architectures" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Integrated Solutions" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="End-to-end Encryption" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemText primary="Agile Development" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default SoftwareDev;
