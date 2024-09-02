import React, { useState } from 'react';
import './NavBar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after clicking
    }
  };

  return (
    <nav className="NavBar">
      <h1>Ervin Grimaldi</h1>
      <ul className={`NavLink ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
        <li><a href="#timeline" onClick={() => handleScroll('timeline')}>Experience</a></li>
        <li><a href="#projects" onClick={() => handleScroll('projects')}>Projects</a></li>
        <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact Me</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
