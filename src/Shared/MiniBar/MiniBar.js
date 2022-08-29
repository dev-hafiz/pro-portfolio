import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img1 from "../../../src/images/medium.svg";
import img2 from "../../../src/images/linkedin.svg";
import { Link } from "react-router-dom";

const MiniBar = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingTop: "25px",
        }}
      >
        <h3>
          <a href="https://medium.com/@johnstarhafiz" target="__blanck">
            <img
              style={{ marginRight: "10px", height: "25px", width: "25px" }}
              src={img1}
              alt="link icon"
            />
          </a>
        </h3>
        <h3>
          <a
            href="https://www.linkedin.com/in/hafizur-rahman-jr/"
            target="_blanck"
          >
            <img
              src={img2}
              style={{ height: "25px", width: "25px" }}
              alt="link icon"
            />
          </a>
        </h3>
      </Box>
    </Container>
  );
};

export default MiniBar;
