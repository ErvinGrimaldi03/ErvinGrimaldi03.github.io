import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import './App.css';


function App() {

  const experiences = [
    {
      company: 'Company A',
      logo: 'link-to-company-a-logo.png',
      time: 'January 2020 - Present',
      description: 'Description of work experience at Company A',
      comment: 'This was a significant role because...'
    },
    {
      company: 'Company B',
      logo: 'link-to-company-b-logo.png',
      time: 'June 2018 - December 2019',
      description: 'Description of work experience at Company B',
      comment: 'Learned a lot about...'
    },
    // Add more experiences as needed
  ];

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
      <About />
      <Timeline></Timeline>
      <Gallery projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
