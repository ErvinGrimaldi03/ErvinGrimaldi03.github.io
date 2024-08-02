import React from "react";
import Navbar from "./components/NavBar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import './App.css';


function App() {


  const projects = [
    {
      image: 'https://via.placeholder.com/300',
      description: 'Simulated a 32-bits MIPS processor in System Verilog',
      title: "MIPS Multistage Processor",
      technologies: ['System Verilog', 'RTL Design', 'Hardware Verification'],
      tag: 'Computer Architecture',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'Created my web-portfolio to showcase my skills',
      title: "Personal Web-Portfolio",
      technologies: ['React', 'CSS', 'HTML'],
      tag: 'Web Development',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'DooM 1993 python remade from scratch',
      title: "PyDooM",
      technologies: ['Python', 'PyGames', 'Game-Physics'],
      tag: 'Game Engine',
    },
    {
      image: 'https://via.placeholder.com/300',
      description: 'made an ultrasonic speed/distance detector in baremetal C for ATMega32',
      title: "ATMega32 Ultrasonic speed detector",
      technologies: ['C', 'ATMega32', 'AVR-GCC'],
      tag: 'Embedded Systems',
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
