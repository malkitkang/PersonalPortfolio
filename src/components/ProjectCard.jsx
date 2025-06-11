import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
          <a href={project.code} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
