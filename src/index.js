import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import logo from './assets/logo.svg';
import heroImage from './assets/image.png';
import twitterLogo from './assets/twitter.svg';
import linkedInLogo from './assets/linkedin.svg';
import githubLogo from './assets/github.svg';
import software from './assets/software.svg';
import webdev from './assets/webdevelopment.svg';
import webdesign from './assets/webdesign.svg';
import skills from './assets/skills.svg';


function Portfolio() {
  return (
  <div>
    <nav className="nav-bar">
      <img src={logo}/>
      <ul className="nav-text">
        <a className="link-border"><li>About me</li></a>
        <a className="link-border"><li>Services</li></a>
        <a className="link-border"><li>Contact</li></a>
      </ul>
    </nav>
    <section className="hero">
      <div className="hero-txt">
        <h1>Hi, I am <span>Tari Akinnukawe</span></h1>
      <p>Frontend Developer</p>
      <button className="cv-btn">Download Resume</button></div>
      <div className="hero-img" >
        <img src={heroImage}/>
      </div>
    </section>
    <section className="about">
      <h2>About</h2>
      <p>I love programming and have a keen interest in everything
        that can be built on the web. I am passionate about helping 
        people develop ideas and seamless web experiences through visually 
        appealing User Interfaces. I also enjoy film, food, music, hiking
        and the Formula 1 sport. In my spare time, I write to poetry
        and learn the French language.
      </p>
      <div className="socials">
        <div>
          <img src={twitterLogo}/>
          <p>Twitter</p>
        </div>
        <div>
          <img src={linkedInLogo}/>
          <p>LinkedIn</p>
        </div>
        <div>
          <img src={githubLogo}/>
          <p>Git hub</p>
        </div>
      </div>
    </section>
    <section className="skills">
      <h2>What I do</h2>
      <div className="skills-cards">
      <div className="card">
        <img src={software}/>
        <h3>Software <span>Development</span></h3>
      </div>
      <div className="card">
        <img src={webdev}/>
        <h3>Web <span>Development</span></h3>
      </div>
      <div className="card">
        <img src={webdesign}/>
        <h3>Web <span>Design</span></h3>
      </div>
      </div>
    </section>
  </div>
  )
}

ReactDom.render(<Portfolio/>, document.getElementById('root'));