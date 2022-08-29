import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SummarizeIcon from "@mui/icons-material/Summarize";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./SocialLink.css";
import MailIcon from "@mui/icons-material/Mail";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <Container sx={{ paddingTop: "70px", paddingBottom: "50px" }}>
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={4} md={2}>
          <a
            style={{ color: "#171717", textDecoration: "none" }}
            href="https://drive.google.com/file/d/1LCO_ctJFCuy6uFyQTvX-bqntNss7o5fj/view?usp=sharing"
            target="_blank"
          >
            <Box className="socialBox">
              <SummarizeIcon />
              <Box className="miniBox">
                <Typography variant="button">Resume</Typography>
              </Box>
            </Box>
          </a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a
            style={{ color: "#171717", textDecoration: "none" }}
            href="https://github.com/okshihafiz"
            target="_blank"
          >
            <Box className="socialBox">
              <GitHubIcon />
              <Box className="miniBox">
                <Typography variant="button">Github</Typography>
              </Box>
            </Box>
          </a>
        </Grid>
        <Grid item xs={4} md={2}>
          <Link style={{ color: "#171717", textDecoration: "none" }} to="works">
            <Box className="socialBox">
              <FavoriteIcon />
              <Box className="miniBox">
                <Typography variant="button">Works</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4} md={2}>
          <Link style={{ color: "#171717", textDecoration: "none" }} to="blogs">
            <Box className="socialBox">
              <NoteAltIcon />
              <Box className="miniBox">
                <Typography variant="button">Article</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4} md={2}>
          <Link style={{ color: "#171717", textDecoration: "none" }} to="mail">
            <Box className="socialBox">
              <MailIcon />
              <Box className="miniBox">
                <Typography variant="button">Touch </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SocialLink;
