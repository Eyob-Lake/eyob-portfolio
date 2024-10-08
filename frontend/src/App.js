import React from 'react';
import './App.css';
import logo from './logo.png'; // Adjust the path to your image

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-container">
          <h3 className="portfolio-link">
            <a href="#">Portfolio</a>
          </h3>
          <img src={logo} alt="Eyob" className="header-logo" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1>Eyob's Portfolio</h1>
        <p>Hello! I'm Eyob, a full-stack developer specializing in React, Node.js, and more.</p>
        <button>Check My Projects</button>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {/* You can add project cards here */}
          <div className="project-item">
            <h3>Project 1</h3>
            <p>Description of project 1...</p>
            <a href="https://github.com/eyob/project1">View on GitHub</a>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <p>Description of project 2...</p>
            <a href="https://github.com/eyob/project2">View on GitHub</a>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>
          With over three years of experience in the tech industry, I am a versatile Full Stack Developer with a proven track record in delivering high-quality solutions. My expertise spans across multiple domains, including mobile app development, Odoo development, and UX/UI design. I am proficient in a range of technologies such as:
        </p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>WordPress</li>
          <li>HTML/CSS</li>
          <li>Odoo Development</li>
          <li>Mobile App Development</li>
          <li>UX/UI Design</li>
        </ul>
        <p>
          During my tenure in Addis Ababa, I contributed to the success of two prominent companies, where I played a key role in developing robust web and mobile applications. My experience includes designing intuitive user interfaces, developing scalable backend systems, and integrating complex functionalities to meet diverse client needs.
        </p>
        <p>
          I am passionate about leveraging technology to solve problems and enhance user experiences. I continuously stay ahead of industry trends to deliver innovative solutions.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Eyob's Portfolio</p>
        <a href="https://github.com/Eyob-Lake/">GitHub</a> | 
        <a href="https://www.linkedin.com/in/eyob-lake-5684a730b">LinkedIn</a> |
        <a href="https://www.tiktok.com/@eyob.lake#:~:text=Eyob%20Lake%20(@eyob.lake)%20on%20TikTok%20|%20Watch">TikTok</a> |
        <a href="https://www.youtube.com/@Eyob-tech1">YouTube</a> |
        <a href="https://www.facebook.com/eyoba.lake">Facebook</a> |
        <a href="https://www.instagram.com/eyobalake">Instagram</a>
      </footer>
    </div>
  );
}

export default App;
