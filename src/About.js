// src/About.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import aboutImage from "./shop.png"; // Update this path

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutImage}
            alt="About Us"
            sx={{
              width: "100%",
              height: 500,
              borderRadius: "10px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Supported by our state-of-the-art infrastructure unit, we, Superfine
            Flour Mills at Malad West in Mumbai Maharashtra, manufacture and
            supply superlative quality wheat flour, gram flour, pulses, etc. Our
            operations are valued in the market because of our genuineness and
            perfection throughout the milling process. We use top quality
            machines for grinding and milling; everything under the observation
            of our professionals. We stringently check upon numerous parameters
            for supplying flawless supplies.
            <br></br>
            <br></br>
            <br></br>
            We are provide whole grain crushing and grinding services. Grind
            different types of grain such as wheat(गेहूँ), Jowar(ज्वार), and
            Split chickpeas(चना दाल). Selling different type of flour Wheat
            flour(गेहूँ का आटा), Corn flour (मक्का का आटा), Jowar flour (ज्वार
            का आटा), Chickpeas flour(बेसन), Pearl millet(बाजरे का आटा), दलिया
            (थुली)."
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
