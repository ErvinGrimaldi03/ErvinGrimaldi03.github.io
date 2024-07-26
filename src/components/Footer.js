import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-root'>
            <div className='footer-content'>
                <div className='contact-info'>
                    <p>ervingrimaldi@gmail.com</p>
                    <p>+1 (347) 612-2262 </p>
                </div>
                <div className='resume'>
                    <h4><a href='your-resume-link.pdf' download> Resume</a> / <a href='your-cv-link.pdf' download> C.V.</a></h4>
                </div>
                <div className='source-code'>
                    <h4> <a href='https://github.com/your-portfolio-repo'> Source Code </a> </h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;
