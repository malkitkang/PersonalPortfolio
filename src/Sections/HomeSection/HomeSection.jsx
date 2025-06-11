import React from "react";
import "./HomeSection.css"; // We'll style this section
import Robot from "../../components/models3d/Robot";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          Hello, I’m <span className="highlight">Malkit Singh</span>
        </h1>
        <p>A Passionate Full-Stack Web Developer</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </div>
      <div className="Robot3D">
        <Robot/>

      </div>
    </section>
  );
};

export default Home;
