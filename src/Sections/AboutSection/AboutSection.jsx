import React from "react";
import "./AboutSection.css"; // We'll style this section
import Chain from "../../components/models3d/chain";
import Developer from "../../components/models3d/Developer";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";











const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="model-container">
        <Developer />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Malkit Singh, a dedicated Full-Stack Web Developer with a passion
          for crafting beautiful, user-friendly web applications. My skills
          include React, JavaScript, Firebase, and more. I'm always eager to
          learn new technologies and build innovative solutions.
        </p>
        <p>
          Outside of coding, I enjoy working on 3D designs, exploring creative
          concepts, and continuously improving my development skills.
        </p>
        <h2>
          Skills
        </h2>
        <ul className="skills-list">
          <li>React  <FaReact /></li> 
          <li>JavaScript <IoLogoJavascript />
</li>
          <li>Firebase <IoLogoFirebase />
</li>
          <li>HTML CSS  <FaHtml5 /> <FaCss3Alt /></li>
          <li>Node.js <FaNodeJs /> </li>
          <li>Express.js <SiExpress /></li>
          <li>MongoDB <DiMongodb /></li>
          <li>Git & GitHub <FaGitAlt /> <FaGithub /> </li>
          <li>Responsive Design <DiResponsive /></li>
          </ul>
        
      </div>
    </section>
  );
};

export default About;
