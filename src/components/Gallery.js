// src/components/Gallery.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Gallery.css';

const Gallery = ({ projects }) => {
  return (
    <div className="gallery">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          tag={project.tag}
        />
      ))}
    </div>
  );
};

export default Gallery;
