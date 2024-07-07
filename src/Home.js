import React from "react";
import Grid from "@mui/material/Grid";
import backgroundImage from "./6.png";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const BackgroundContainer = styled(Box)({
  minHeight: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
});
const Home = () => {
  return (
    <div>
      <BackgroundContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Efficient and Convenient Flour Grinding Services
            </Typography>
          </Grid>

          <Grid item xs={12} align="center">
            <Button variant="contained">Enquire Now</Button>
          </Grid>
        </Grid>
      </BackgroundContainer>
    </div>
  );
};

export default Home;
