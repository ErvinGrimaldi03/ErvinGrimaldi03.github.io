import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import './App.css';


import website_card_foto from './imgs/website_foto.png'
import pydoom_card_foto from './imgs/PyDoom-card-photo.png'
import racoonbot_foto from './imgs/racoonbot_foto.png'
import hido2_foto from './imgs/hido2.png'
import haptic_hand from './imgs/image4.jpg'
import jeanLuke from './imgs/JeanLuke.jpg'
function App() {

  const projects = [
    {
      image: hido2_foto,
      description: "in-house-developed autonomous mapping rover and unmanned ground vehicle.  Hido II is built to climb stairs and traverse rough, rugged, or uncharted terrain.",
      title: "Hido II",
      technologies: ['C/C++', 'Sensors', 'Embedded System'],
      tag: 'Robotics',
    },

    {
      image: haptic_hand,
      description: "An haptic glove controlling a remote robotic hand. The robotic hand sends haptic information to the glove that will give back all the accurate feelings",
      title: "Teleoperated Transadial Haptic System",
      technologies: ['C/C++', 'MicroControllers', 'Embedded System'],
      tag: 'Robotics',
    },

    {
      image: racoonbot_foto,
      description: "The RaccoonBot is an autonomous, solar-powered, wire-traversing robotic platform Built for persistent, long-term environmental monitoring in forest and coastal ecosystems. Deployed at Crystal Cove State Park, CA.",
      title: "RacoonBot",
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
      image: website_card_foto,
      description: 'What better way to showcase my skills than creating a web portfolio? Just some React, CSS, and a lot of learning',
      title: "Personal Web-Portfolio",
      technologies: ['React', 'CSS', 'HTML'],
      tag: 'Web Development',
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
