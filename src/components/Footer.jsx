import React from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import logo from "assets/logo-poster.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))", // gradient from top-left to bottom-right
        // border: "1px solid",
        borderColor: "linear-gradient(to bottom right, teal, dark)", // gradient border
        color: "white",
        padding: "2em",
        height: "80vh",
      }}
    >
      <Grid container spacing={5} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Company Name */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Glovision
          </Typography>
        </Grid>

        {/* First column */}
        <Grid item xs={12} sm={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: "0.25rem" }}
          >
            COMPANY
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              height: "4px",
              width: "100px",
              marginBottom: "2rem",
            }}
          />
          <Box
            sx={{
              "& a": {
                "&:hover": {
                  color: (theme) => theme.palette.text.light,
                  textDecoration: "underline",
                },
              },
            }}
          >
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              ALL SERVICES
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              INDUSTRIES
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              PROJECTS
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              LIBRARY
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              BLOG
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              ABOUT US
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              WHY US
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block" }}
            >
              CAREERS
            </Link>
          </Box>
        </Grid>

        {/* Second column */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: "0.25rem" }}
          >
            SERVICES
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              height: "4px",
              width: "100px",
              marginBottom: "2rem",
            }}
          />
          <Box
            sx={{
              "& a": {
                "&:hover": {
                  color: (theme) => theme.palette.text.light,
                  textDecoration: "underline",
                },
              },
            }}
          >
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              SCOPING SESSION
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              PRODUCT DESIGN PROCESS
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              MINIMUM VIABLE PRODUCT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              SOFTWARE AND WEB DEVELOPMENT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              MOBILE DEVELOPMENT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              DATA SCIENCE
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              UX/UI
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              CODE AUDIT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "0.5em" }}
            >
              UX AUDIT
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              sx={{ display: "block" }}
            >
              CAREERS
            </Link>
          </Box>
        </Grid>

        {/* Follow Us column */}
        <Grid item xs={12} sm={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: "0.25rem" }}
          >
            Follow Us
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              height: "4px",
              width: "100px",
              marginBottom: "2rem",
            }}
          />
          <Box
            sx={{
              "& a:hover": {
                color: (theme) => theme.palette.text.light,
                textDecoration: "underline",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5em",
              }}
            >
              <LinkedIn />
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ marginLeft: "0.5em" }}
              >
                LINKEDIN
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5em",
              }}
            >
              <Facebook />
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ marginLeft: "0.5em" }}
              >
                FACEBOOK
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5em",
              }}
            >
              <Instagram />
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{ marginLeft: "0.5em" }}
              >
                INSTAGRAM
              </Link>
            </Box>
          </Box>

          {/* ... You'd have to get or create icons for Clutch and Glassdoor and add them similarly */}
        </Grid>

        {/* Contacts */}
        <Grid item xs={12} sm={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginBottom: "0.25rem" }}
          >
            Contacts
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              height: "4px",
              width: "100px",
              marginBottom: "2rem",
            }}
          />
          <Link
            href="tel:1234567890"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "0.5em" }}
          >
            US: +1-123-456-7890
          </Link>
          <Link
            href="tel:0987654321"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "0.5em" }}
          >
            UK: +44-987-654-321
          </Link>
          <Link
            href="tel:1122334455"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "0.5em" }}
          >
            CA: +1-112-233-4455
          </Link>
          {/* ... Add more countries similarly */}
          <Link
            href="mailto:contact@glovision.com"
            color="inherit"
            underline="none"
            sx={{ display: "block", marginBottom: "0.5em" }}
          >
            Email: contact@glovision.com
          </Link>
          <Link
            href="mailto:support@glovision.com"
            color="inherit"
            underline="none"
            sx={{ display: "block" }}
          >
            Support: support@glovision.com
          </Link>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "left" }}>
          <img
            src={logo}
            alt="Glovision Logo"
            style={{ maxWidth: "400px", margin: "0px 0 0 -110px" }}
          />
        </Grid>
        <Grid item xs={8} style={{ textAlign: "left" }}>
          <Typography variant="h6" gutterBottom>
            OUR OFFICES
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              height: "4px",
              width: "110px",
              marginBottom: "1em",
            }}
          ></Box>

          <Grid container spacing={2}>
            {/* First Column of Offices */}
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                LONDON
              </Typography>
              <Typography variant="body2" gutterBottom>
                26 FINSBURY SQUARE
              </Typography>
              <Typography variant="body2" gutterBottom>
                LONDON, EC2A 1DS
              </Typography>
              <Typography variant="body2" gutterBottom>
                UNITED KINGDOM
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                style={{ marginTop: "1em" }}
              >
                SAN FRANCISCO
              </Typography>
              <Typography variant="body2" gutterBottom>
                4 EMBARCADERO CENTER,SUITE 1400
              </Typography>
              <Typography variant="body2" gutterBottom>
                SAN FRANCISCO, CA, 94111
              </Typography>
              <Typography variant="body2" gutterBottom>
                UNITED STATES
              </Typography>
            </Grid>

            {/* Second Column of Offices */}
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                LISBON
              </Typography>
              <Typography variant="body2" gutterBottom>
                AV. ANTONIO AUGUSTO DE AGUIAR, 108, 3
              </Typography>
              <Typography variant="body2" gutterBottom>
                1050-019 LISBON
              </Typography>
              <Typography variant="body2" gutterBottom>
                PORTUGAL
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                style={{ marginTop: "1em" }}
              >
                COIMBRA
              </Typography>
              <Typography variant="body2" gutterBottom>
                R. JOAO RUAO 12, 8D
              </Typography>
              <Typography variant="body2" gutterBottom>
                3000-229 COIMBRA
              </Typography>
              <Typography variant="body2" gutterBottom>
                PORTUGAL
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box />
    </Box>
  );
};

export default Footer;
