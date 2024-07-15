import React, { useEffect, useRef } from 'react';
import './About.css';
import WAVES from 'vanta/src/vanta.rings'

function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    WAVES({
      el: backgroundRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x66193b,
      backgroundAlpha: 0.80
    })
  }, []);

  return (
    <div className="about-container" ref={backgroundRef}>
      <div className="about-content">
        <div className="text-section" ref={textRef}>
          <h1>Ciao! I'm Ervin</h1>
          <h3>Software/Computer Engineer</h3>
        </div>
        <div className="image-section" ref={imageRef}>
          <img src="https://via.placeholder.com/300" alt="Ervin" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default About;