import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <hr
        style={{
          marginBottom: "2.5rem",
        }}
      />
      <Container>
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Rubik, sans-serif",
                padding: "8px 0px",
                color: "#2C2A28",
                lineHeight: "5px",
              }}
            >
              Check on{" "}
              <a
                className="a-link"
                href="https://github.com/okshihafiz"
                target="_blank"
              >
                Github
              </a>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Rubik, sans-serif",
                padding: "8px 0px",
                color: "#2C2A28",
                lineHeight: "5px",
              }}
            >
              &#169; {""} 2022
              <a
                className="a-link"
                href="https://github.com/okshihafiz"
                target="_blank"
              >
                {""} hafiz dev
              </a>
              {""} All Rights Reserved
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Rubik, sans-serif",
                padding: "8px 0px",
                color: "#2C2A28",
                lineHeight: "5px",
              }}
            >
              ✆ Contact {""}
              <a
                className="a-link"
                href="https://www.linkedin.com/in/hafizur-rahman-jr/"
                target="_blank"
              >
                Linkedin{""}
              </a>
              <a
                className="a-link"
                href="https://github.com/okshihafiz"
                target="_blank"
              >
                {""} Github
              </a>
              <a
                className="a-link"
                href="https://twitter.com/hafizur_jr"
                target="_blank"
              >
                {""} Twitter
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
