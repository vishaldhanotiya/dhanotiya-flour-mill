import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactUs = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* <iframe
            width="100%"
            height="400px"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1mfCgxplmxmk!2m3!1f0!2m2!1f1439.4372022067112!3f0!4f0!6b1!16zL1AAQscnrSqIWzKjIkA!7m28!2m27!3f17.5339985!4f72.877699!5f1!18z!7m14!8m12!16m11!1m3!1d376996.3000000001!2d72.8777!3d17.534!1m5!1e-5!2m3!1m2!1i38!2i120!1m5!1e-2!2m3!1m2!1i38!2i120!3m3!1m2!1sMalad+West!2zTWFsYWRfV2VzdA==!4f13.1"
            allowFullScreen
            aria-label="Map"
          ></iframe> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our Office Address
          </Typography>
          <Typography variant="body2" gutterBottom>
            300, Sai Baba Nagar, Prajapat Nagar, Indore, Madhya Pradesh 452009
          </Typography>
          <form>
            <TextField
              required
              id="fullName"
              label="Full Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="mobileNumber"
              label="Mobile Number"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="email"
              label="Email ID"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="message"
              label="Message"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              Send Enquiry
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
