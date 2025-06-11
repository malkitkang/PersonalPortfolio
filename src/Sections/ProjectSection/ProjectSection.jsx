import React from "react";
import ProjectCard from "../../components/ProjectCard";
import "./ProjectSection.css";
// Import your screenshot

const project = [
  {
    title: "Personal Portfolio",
    description: "A responsive and interactive portfolio to showcase my skills.",
    image: "/images/Port.png", // Replace with your screenshot
    tags: ["React", "CSS", "Responsive"],
    demo: "https://your-portfolio-url.com",
    code: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Recipe App",
    description: "A food recipe app with Firebase integration.",
    image: "/images/Recipie.png", // Replace with your screenshot
    tags: ["React", "Firebase", "Realtime Database"],
    demo: "https://your-recipe-app-url.com",
    code: "https://github.com/malkitkang/Recipie-App",
  },
   {
    title: "GYM Management System",
    description: "A comprehensive gym management system with user authentication.",
    image: "/images/Gym.png", // Replace with your screenshot
    tags: ["React", "Firebase", "Realtime Database"],
    demo: "https://your-recipe-app-url.com",
    code: "https://github.com/yourusername/recipe-app",
  },
  // Add more projects here!
];

const Project = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
