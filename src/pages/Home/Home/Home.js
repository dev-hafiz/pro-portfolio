import { Box } from "@mui/material";
import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import MiniBar from "../../../Shared/MiniBar/MiniBar";
import SelfTalk from "../../SelfTalk/SelfTalk";
import Skills from "../../Skills/Skills";
import DevBanner from "../DevBanner/DevBanner";

const Home = () => {
  return (
    <Box>
      <MiniBar />
      <DevBanner />
      <SelfTalk />
      <Skills />
      <Footer />
    </Box>
  );
};

export default Home;
