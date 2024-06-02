import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mypic from '../../assets/mypic.png';

export const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1> About Me</h1>
            <img src ={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={mypic} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>
Hi, I’m Priyanshu Saxena, a passionate and dedicated Frontend Developer based in India. With a strong background in web development and a deep appreciation for elegant design, I specialize in creating visually stunning and highly functional web applications.</p>
                    <p>Over the years, I’ve honed my skills in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. This continuous learning process has equipped me to tackle complex challenges and deliver high-quality solutions..</p>
                </div>
                 <div className='about skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:'90%'}}/></div>
                    <div className='about-skill'><p>React</p><hr style={{width:'60%'}}/></div>
                    <div className='about-skill'><p>Javascript</p><hr style={{width:'60%'}}/></div>
                    <div className='about-skill'><p>Next JS</p><hr style={{width:'30%'}}/></div>
                </div>
            </div>                    
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>1+</h1>
                <p>Years OF experinece</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>Happy Clients</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}
