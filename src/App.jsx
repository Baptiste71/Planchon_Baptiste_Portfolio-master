import React from "react";
import "./_app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Formation from "./pages/formation/Formation";
import Project from "./pages/projets/Project";
import Vpresentation from "./pages/video-presentation/Vpresentation";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/videopresentation" element={<Vpresentation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
