import React, { useEffect, useRef } from 'react';
import './About.css';
import WAVES from 'vanta/src/vanta.rings';
import wavy from '../imgs/wave.svg';
import profile_foto from '../imgs/fotoProfilo.jpg';
import linkedin_logo from '../imgs/LI-In-Bug.png';
import github_logo from '../imgs/github-mark.png';

function About() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundRef = useRef(null);
  const cse_link = 'https://catalogue.uci.edu/interdisciplinarystudies/computerscienceandengineering_bs/';

  useEffect(() => {
    const effect = WAVES({
      el: backgroundRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x66193b,
      backgroundAlpha: 1.0,
    });
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <React.Fragment>
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
                <img src={linkedin_logo} className='icon-img' />
              </a></li>
              <li><a href='https://github.com/ErvinGrimaldi03' target='none'>
                <img src={github_logo} className='icon-img' />
              </a></li>
            </ul>
          </center>
        </div>

        <div className='bio-text'>
          <p>
            I work as Embedded &amp; Infrastructure software engineer @ Stealth Startup, in the Radio Solutions team.</p><br></br>
            <p>
            Previously I worked as Embedded Software Engineer @ <a href='https://hidonix.com' target='none'>Hidonix Industries</a>, in the R&amp;D Team.</p><br/>
            <p>
            I am also a Graduate Student @ <a href='https://www.scu.edu' target='none'>Santa Clara University</a> in the Robotics and Automation Engineering program, and a proud <a href='https://www.uci.edu' target='none'>UC Irvine</a> Alumnus, where I graduated with a B.S. in Computer Science and Engineering in 2025.</p><br/>
            <p>
            My main interest are Embedded Systems, Robotics, and Computer Vision. I love to come up with creative solutions to interesting problems, such as the <a href='https://www.latimes.com/socal/daily-pilot/entertainment/story/2025-04-29/uci-robot-ecology-lab-inspired-by-nature' target='none'>RacoonBot</a>, <a href='https://engineering.uci.edu/news/2024/december/students-reengineer-robot-winter-lights-musical-discovery-cube.php' target='none'>Jean Luke</a>, and <a href='https://www.forbes.com/sites/sabbirrangwala/2026/01/23/ces-2026robots-are-movin-blue-collar-autonomy/' target='none'>Hido II</a>.</p><br/>
            <p>
            I also have experience with Quantum Computing, Software Defined Radios, and Web Development. <br/>
            If you want to chat, Contact me!!!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
