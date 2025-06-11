import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Sections/HomeSection/HomeSection";
import About from "./Sections/AboutSection/AboutSection";
import Projects from "./Sections/ProjectSection/ProjectSection";
import Contact from "./Sections/ContactSection/ContactSection";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
