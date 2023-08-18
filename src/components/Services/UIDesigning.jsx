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
import uiuxImage from "assets/ui-ux.jpg";
import { useTheme } from "@mui/material";

const UIDesigning = () => {
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
        image={uiuxImage}
        alt="UI/UX Designing"
        title="UI/UX Designing"
      />
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          UI/UX Designing
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{ lineHeight: 1.5, mb: 2 }}
        >
          Crafting User-centric Experiences
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          sx={{ lineHeight: 1.7, mb: 2 }}
        >
          Merging cutting-edge creativity with intuitive usability, we
          passionately design digital experiences that not only captivate users
          but also foster prolonged engagement and satisfaction.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ lineHeight: 1.5, mb: 2 }}>
          Features:
        </Typography>
        <List dense sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Interactive Prototyping" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="User Journey Mapping" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemText primary="Responsive Design" />
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemText primary="User Testing & Feedback" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Discover More
        </Button>
      </CardContent>
    </Card>
  );
};

export default UIDesigning;
