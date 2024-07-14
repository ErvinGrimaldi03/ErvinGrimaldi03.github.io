import React from 'react';
import './ProjectCard.css';

// Define a set of 10 nice colors
const colors = [
  '#FF6F61', // Coral
  '#6B5B95', // Muted Purple
  '#88B04B', // Pastel Green
  '#7398E3', // Sky Blue
  '#92A8D1', // Light Blue
  '#955251', // Rose Taupe
  '#B565A7', // Lavender
  '#D5AF00', // Ocra
  '#DD4124', // Orange
  '#D65076'  // Raspberry
];

const colorMap = {};

const getColor = (key) => {
  if (!colorMap[key]) {
    const colorIndex = Object.keys(colorMap).length % colors.length;
    colorMap[key] = colors[colorIndex];
  }
  return colorMap[key];
};

const ProjectCard = ({ image, title, description, technologies, tag, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-container">
        <img src={image} alt={`Image of ${title}`} className="card-image" />
      </div>
      <div className="card-content">
      <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-bubble" style={{ backgroundColor: getColor(tech) }}>{tech}</span>
          ))}
        </div>
        <div className="card-tag" style={{ backgroundColor: getColor(tag) }}>{tag}</div>
      </div>
    </div>
  );
};

export default ProjectCard;