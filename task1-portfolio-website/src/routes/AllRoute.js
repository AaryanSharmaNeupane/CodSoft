import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Home, Projects, About, Contact } from "../pages";

export const AllRoute = () => {
  return (
    <>
      <Home id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </>

    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/projects" element={<Projects />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/contact" element={<Contact />} />
    // </Routes>
  );
};
