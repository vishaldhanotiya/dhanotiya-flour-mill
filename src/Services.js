// src/Services.js
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

const services = [
  {
    title: "Rice Flour Grinding Service",
    description:
      "We are counted amongst reckoned names in the industry, committed towards offering Rice Flour Grinding Service. The offered services are widely admired by our honoured patrons owing to its perfect execution.",
    image: require("./rice2.png"),
  },
  {
    title: "Wheat Flour Grinding Service",
    description:
      "Leveraging on the capabilities and talent of our technocrats, we are into providing the best quality and pure Wheat Flour Grinding Service.",
    image: require("./rice.png"),
  },
  {
    title: "Gram Flour Grinding Service",
    description:
      "We are counted amongst reckoned names in the industry, committed and exclusively engaged towards offering the best Gram Flour Grinding Service.",
    image: require("./gram.png"),
  },
  {
    title: "Jowar Flour Grinding Service",
    description:
      "We are providing Jowar Flour Grinding Service to our clients. The Flour Grinding Service offered by us are known for their varied use.",
    image: require("./millet.png"),
  },
];
const services1 = [
  {
    title: "Wheat Flour",
    description: "RS:- 40 Kg",
    image: require("./rice.png"),
  },
  {
    title: "Core Flour",
    description: "RS:- 45 Kg",
    image: require("./millet.png"),
  },
  {
    title: "Jowar Flour",
    description: "RS:- 45 Kg",
    image: require("./millet.png"),
  },
  {
    title: "Gram Flour",
    description: "RS:- 120 Kg",
    image: require("./gram.png"),
  },
  {
    title: "Dalia (Thuli)",
    description: "RS:- 55 Kg",
    image: require("./gram.png"),
  },
  {
    title: "Rice Flour",
    description: "RS:- 50 Kg",
    image: require("./rice2.png"),
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Services
      </Typography>
      <Typography variant="h5" align="left" gutterBottom>
        Our Products
      </Typography>
      <Typography variant="h6" align="left" marginBlock={4}>
        Welcome to Dhanotiya Flour Mill! We take pride in offering a wide range
        of high-quality services to meet all your flour milling needs. Our
        commitment to excellence ensures that you receive the best products and
        services. Here’s a look at what we offer:{" "}
      </Typography>
      <Grid container spacing={4}>
        {services1.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              {/* <Box sx={{ textAlign: "center", padding: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    textTransform: "none",
                    fontSize: 12,
                    backgroundColor: "#c9a974",
                    "&:hover": {
                      backgroundColor: "#c9a974",
                    },
                  }}
                >
                  Enquire Now
                </Button>
              </Box> */}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" align="left" gutterBottom>
        Grinding Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              {/* <Box sx={{ textAlign: "center", padding: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    textTransform: "none",
                    fontSize: 12,
                    backgroundColor: "#c9a974",
                    "&:hover": {
                      backgroundColor: "#c9a974",
                    },
                  }}
                >
                  Enquire Now
                </Button>
              </Box> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
