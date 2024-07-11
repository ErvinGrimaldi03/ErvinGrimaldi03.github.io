// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, description, technologies, tag }) => {
  return (
    <div className="card">
      <img src={image} alt={`Image of ${description}`} className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-bubble">{tech}</span>
          ))}
        </div>
        <div className="card-tag">{tag}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
