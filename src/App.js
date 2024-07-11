import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import './App.css';

function App() {
  const projects = [
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the first project.',
      technologies: ['React', 'CSS', 'JavaScript'],
      tag: 'Web Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the second project.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      tag: 'Backend Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the third project.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      tag: 'Fullstack Development',
    },
  ];

  return (
    <div className="AppNav">
      <Navbar />
      <Gallery projects={projects} />
    </div>
  );
}

export default App;
