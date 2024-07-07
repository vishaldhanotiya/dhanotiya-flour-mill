// src/WhyUs.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import LatestMachineryIcon from "@mui/icons-material/Build"; // Use appropriate icons
import ExperiencedWorkersIcon from "@mui/icons-material/Engineering";
import ReasonableRatesIcon from "@mui/icons-material/MonetizationOn";
import TimeEfficiencyIcon from "@mui/icons-material/Timer";

const features = [
  {
    icon: <LatestMachineryIcon sx={{ fontSize: 50 }} />,
    text: "Latest Milling Machinery",
  },
  {
    icon: <ExperiencedWorkersIcon sx={{ fontSize: 50 }} />,
    text: "Experienced Workers",
  },
  {
    icon: <ReasonableRatesIcon sx={{ fontSize: 50 }} />,
    text: "Reasonable Rates",
  },
  {
    icon: <TimeEfficiencyIcon sx={{ fontSize: 50 }} />,
    text: "Time Efficiency",
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Why Us?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box>
              {feature.icon}
              <Typography variant="h6">{feature.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
