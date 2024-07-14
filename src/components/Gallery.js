import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Gallery.css';

const Gallery = ({ projects }) => {
  const [selectedTag, setSelectedTag] = useState('All');

  // Get unique tags
  const tags = ['All', ...new Set(projects.map(project => project.tag))];

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(project => project.tag === selectedTag);

  return (
    <div className="gallery-container">
      <div className="search-container">
        <select value={selectedTag} onChange={handleTagChange}>
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <div className="gallery">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
