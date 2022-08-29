import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Typewriter } from "react-simple-typewriter";
import React from "react";
import computergif from "../../../../src/images/logo/myComputer.gif";
import "./DevBanner.css";

const DevBanner = () => {
  return (
    <Container
      sx={{
        paddingBottom: "45px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box className="Parent-Dev_Title">
            <Typography
              className="dev-Title"
              variant="h4"
              component="div"
              gutterBottom
            >
              <Typewriter
                words={["WEB | DEVELOPER"]}
                cursor
                cursorStyle="__ "
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
            <br />

            <Typography
              sx={{ marginTop: "16px" }}
              className="dev-min_Title"
              variant="h4"
              component="div"
              gutterBottom
            >
              <Typewriter
                words={["hafiz Dev"]}
                cursor
                cursorStyle=">_"
                typeSpeed={160}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </Typography>

            <Box
              sx={{
                marginTop: "30px",
                marginLeft: "-90px",
                display: "block",
              }}
            >
              <button type="button">Get in touch</button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            style={{ width: "100%" }}
            image={computergif}
            alt="computer img"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DevBanner;
