import React from 'react';
import './Hero.css';
import mypic from '../../assets/mypic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const resumeLink = "https://docs.google.com/document/d/1DAJ_cifAX1D1FKv_h5NQIUU_6JGjt0yC/edit?usp=sharing&ouid=104889269039242543408&rtpof=true&sd=true";

  return (
    <div id="home" className='hero'>
      <img src={mypic} alt="" />
      <h1>
        <span> I'm Priyanshu Saxena,</span>
        a passionate Frontend Developer from India.
      </h1>
      <p>
        With a keen eye for design of web technologies, I create intuitive and engaging user experiences.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        {/* Wrap the div containing the resume button with an anchor tag */}
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className='hero-resume'>
          <div>My Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero;
