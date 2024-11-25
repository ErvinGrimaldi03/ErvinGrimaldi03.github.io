import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import './App.css';


import website_card_foto from './imgs/website_foto.png'
import pydoom_card_foto from './imgs/PyDoom-card-photo.png'
import racoonbot_foto from './imgs/RacoonBot_pic1.jpg'
import jeanLuke from './imgs/JeanLuke.jpg'
function App() {

  const projects = [
    {
      image: 'https://via.placeholder.com/300',
      description: "An haptic glove controlling a remote robotic hand. The robotic hand sends haptic information to the glove that will give back all the accurate feelings",
      title: "Teleoperated Transadial Haptic System",
      technologies: ['C/C++', 'MicroControllers', 'Embedded System'],
      tag: 'Robotics',
    },

    {
      image: jeanLuke,
      description: "A robot puppet commissioned by the OC Discovery Cube. This robot is currently being utilized for the show 'Winter Lights'.",
      title: "Jean Luke",
      technologies: ['C/C++', 'MicroControllers', 'Embedded System'],
      tag: 'Robotics',
    },

    {
      image: 'https://via.placeholder.com/300',
      description: "A web-app aimed boosting organization for events in large groups of friends, Characterized by ease of use, simple UI/UX, and collaborative focus.",
      title: "KickFair",
      technologies: ['React', 'JavaScript', 'Soupabase'],
      tag: 'Web Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'A 3D visualization made in Python with Pygames to showcase the beauty of mathematics and how numbers can create such beautiful patterns',
      title: "Natural Number Visualization",
      technologies: ['Python', 'Pygames', 'Umap'],
      tag: 'Game Engine',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'Simulated a 32-bits MIPS processor in System Verilog',
      title: "MIPS Multistage Processor",
      technologies: ['System Verilog', 'RTL Design', 'Hardware Verification'],
      tag: 'Computer Architecture',
    },
    {
      image: website_card_foto,
      description: 'What better way to showcase my skills than creating a web portfolio? Just some React, CSS, and a lot of learning',
      title: "Personal Web-Portfolio",
      technologies: ['React', 'CSS', 'HTML'],
      tag: 'Web Development',
    },
    {
      image: pydoom_card_foto,
      description: 'The legendary 1993 DOOM remade from scratch in Python using PyGames and lots of documentation',
      title: "PyDooM",
      technologies: ['Python', 'PyGames', 'Game-Physics'],
      tag: 'Game Engine',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'Made an ultrasonic speed/distance detector in baremetal C for ATMega32',
      title: "ATMega32 Ultrasonic speed detector",
      technologies: ['C', 'ATMega32', 'AVR-GCC'],
      tag: 'Embedded Systems',
    },
  ];

  return (
    <div className="AppNav background-container">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="projects">
        <Gallery projects={projects} />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
