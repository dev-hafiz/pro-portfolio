import { ReactNavbar } from "overlay-navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Bolgs/Blogs";
import Home from "./pages/Home/Home/Home";
import TouchInMail from "./pages/TouchInMail/TouchInMail";
import Works from "./pages/Works/Works";
import logo from "./images/logo/logo.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/mail" element={<TouchInMail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
