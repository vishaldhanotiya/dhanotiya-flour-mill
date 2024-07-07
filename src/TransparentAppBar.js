// TransparentNavbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const TransparentAppBar = styled(AppBar)({
  backgroundColor: "transparent",
  boxShadow: "none",
});

const TransparentNavbar = () => {
  return (
    <TransparentAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Dhanotiya Flour Mills
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "fit-content",
          }}
        >
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            HOME
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            SERVICES
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            ABOUT US
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            WHY US
          </Button>

          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            CONTACT US
          </Button>
        </Box>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default TransparentNavbar;
