import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Skills.css";
import img from "../../../src/images/skills.svg";

const Skills = () => {
  return (
    <Container>
      <Box sx={{ paddingBottom: "40px" }}>
        <Typography
          sx={{
            textAlign: "center",
            padding: "60px 0px",
            fontFamily: "Rubik, sans-serif",
          }}
          variant="h3"
        >
          Language & skills
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img width="60%" src={img} alt="This is skill area"></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box id="skills-container">
              <Box className="skills-card">
                <Typography
                  sx={{
                    fontWeight: "bolder",
                  }}
                  variant="button"
                  className="skill-category"
                >
                  Languages
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  JavaScript, HTML, CSS{" "}
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Libraries | Frameworks
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  React, Material Ui, React Bootstrap, <br />
                  Scss, Sass
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Backend Technologies
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  Node.js, Express.js, MongoDB, Rest API, JSON Data and CRUD
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Comfort Technologies
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  Redux, Typescript, React-Native
                </Typography>
              </Box>

              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Deployment
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  Heroku, Firebase & Netlify
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Tools
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  VSCode, npm, Figma, Git & Github, Chrome Dev tool, Notion and
                  miro for Architect Diagram
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Applications
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  Adobe Photoshop, and XD; Figma, PSD to HTML
                </Typography>
              </Box>
              <Box className="skills-card">
                <Typography
                  sx={{ fontWeight: "bolder" }}
                  variant="button"
                  className="skill-category"
                >
                  Concepts
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    padding: "8px 0px",
                    color: "#171717",
                  }}
                >
                  Responsive Design, Mobile-First Development, Git Version
                  Control, Jira software management tool
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;
