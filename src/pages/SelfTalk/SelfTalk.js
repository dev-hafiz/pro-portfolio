import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import selfImg from "../../../src/images/hafiz_row.jpg";
import SocialLink from "../SocialLink/SocialLink";

const SelfTalk = () => {
  return (
    <Box sx={{ background: "#fff", paddingTop: "100px" }}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                style={{
                  width: "50%",
                  borderRadius: "10px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px",
                }}
                src={selfImg}
                alt="dev profile"
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            item
            xs={12}
            md={8}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "400",
                  letterSpacing: ".02em",
                  lineHeight: "1.8em",
                  fontFamily: "Rubik, sans-serif",
                  textAlign: "justify",
                }}
                variant="body1"
              >
                Hafiz (22 years young) resides in sylhet, Bangladesh. He is a
                student at BA (Hon's) major is English. His hobbies are Coding
                Programme and reading books. In his free time try to acquire a
                strengthful skills. He is proficient to working with JavaScript
                in React.js framework. With a strong background and completed
                the professional MERN stack course{" "}
                <span
                  style={{
                    color: "gray",
                    fontSize: ".9em",
                  }}
                >
                  from
                </span>{" "}
                <span
                  style={{
                    color: "#630404",
                    fontSize: "1.1em",
                    fontWeight: "medium",
                  }}
                >
                  Programming Hero.
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "400",
                  letterSpacing: ".02em",
                  lineHeight: "1.8em",
                  fontFamily: "Rubik, sans-serif",
                  textAlign: "justify",
                }}
                variant="body1"
              >
                He is always energetic and eager to learn new skills. Adept at
                contributing to a highly collaborative work environment and
                determined to finding a solution.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <SocialLink />
      </Container>
    </Box>
  );
};

export default SelfTalk;
