// import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/layout.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Sponsors from "./components/sponsors.js";
import Apply from "./components/apply.js";
import Team from "./components/team.js";
import Alumni from "./components/alumni.js";
import ChipGallery from "./components/chipgallery.js";
import Chip from "./components/chip.js";
import BlogGallery from "./components/bloggallery.js";
import BlogPost from "./components/blogpost.js";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 750, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/chip-gallery" element={<ChipGallery />} />
        <Route path="/chip-gallery/:chip" element={<Chip />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogGallery />} />
        <Route path="/blog/:blog" element={<BlogPost />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;
