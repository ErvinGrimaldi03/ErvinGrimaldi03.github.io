import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import './App.css';

function App() {
  const projects = [
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the first project.',
      title: "Project 1",
      technologies: ['React', 'CSS', 'JavaScript'],
      tag: 'Web Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the second project.',
      title: "Project 2",
      technologies: ['Node.js', 'Express', 'MongoDB'],
      tag: 'Backend Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the third project.',
      title: "Project 3",
      technologies: ['Python', 'Django', 'PostgreSQL'],
      tag: 'Fullstack Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of the ds project.',
      title: "Project 4",
      technologies: ['Culo', 'CSS', 'JavaScript'],
      tag: 'Web Development',
    },
  ];

  return (
    <div className="AppNav background-container">
      <Navbar />
      <Gallery projects={projects} />
    </div>
  );
}

export default App;
