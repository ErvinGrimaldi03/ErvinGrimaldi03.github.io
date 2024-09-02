import React, { useEffect, useRef } from 'react';
import './About.css';
import WAVES from 'vanta/src/vanta.rings';
import wavy from '../imgs/wave.svg';


import profile_foto from '../imgs/fotoProfilo.jpg'
import linkedin_logo from '../imgs/LI-In-Bug.png';
import github_logo from '../imgs/github-mark.png'


function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundRef = useRef(null);
  const cse_link = 'https://catalogue.uci.edu/interdisciplinarystudies/computerscienceandengineering_bs/';

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
      backgroundAlpha: 1.00
    })
  }, []);

  return (
    <>
    <div className="MASTER">
      <div className="about-container" ref={backgroundRef}>
        <div className="about-content">
          <div className="text-section" ref={textRef}>
            <h1>Ciao! I'm Ervin</h1>
            <h3>Software/Computer Engineer</h3>
          </div>
          <div className="image-section" ref={imageRef}>
            <img src={profile_foto} alt="Ervin" className="profile-image" />
          </div>
        </div>
      </div>
    </div>

    <div className='about-bio'>
      <div className='socials'>
      <center>
        <ul>
          <li><a href='https://www.linkedin.com/in/ervin-grimaldi-87280b1a9/' target='none'>
              <img src={linkedin_logo} className='icon-img'></img>
            </a></li>
        
        <li><a href='https://github.com/ErvinGrimaldi03' target='none'>
              <img src={github_logo} className='icon-img'></img>
            </a></li>
        </ul>
        </center>
      </div>
      <div className='bio-text'>
        <p>
        I'm a student at <a href='https://uci.edu/' target='none'>UCI </a>, 
        majoring in <a href={cse_link} target='none'>Computer Science and Engineering</a>.
        I was born in Gela, Italy, and at the age of 16, I moved to NYC, where I currently live.</p>
        <br></br><p>
        My main intrest are Embedded Systems, Computer Vision, and Robotics, developing a haptic 
        dexterous hand and an autonomous vehicle. Currently conducting<a href='https://dl.acm.org/doi/10.1145/3527155' target='none'> split 
        computing</a> research at UCI's <a href='https://iasl.ics.uci.edu/' target='none'>Intelligent and Autonomous Systems </a> Lab.</p>
        <br></br><p>
        I have experience with Quantum Computing, Web Development, and Computer Architecture. 
        If You want to learn more about me, Contact me!</p>
      </div>
    </div>

    
    
    {/* <div className='about'>
      <div className='about-svg'>
        <img src={wavy}></img>
      </div>
    </div> */}

    </>
  );
}

export default About;