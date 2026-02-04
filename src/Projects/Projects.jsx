import { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";

function Projects() {
  useEffect(() => {
  const elements = document.querySelectorAll(`.${styles.animate}`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        styles.show,
        entry.isIntersecting
      );
    });
  });

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <div 
      className={`container-fluid p-4 bg-light w-100 ${styles.projectsContainer}`} 
      id="projects"
      >
      <h3 
        className={`text-center w-100 fw-bold mb-5 ${styles.projectsHeading} ${styles.animate}`}>
          MY <span style={{color: 'salmon'}}>WORKS</span>
      </h3>

      <div 
        className={`card mb-5 border-0 p-4 ${styles.projectCard} ${styles.animate}`}>
        <div className={`card-body`}>
          <div className="d-flex justify-content-between align-items-center mb-3 h-100 flex-wrap">
            <h5 className={`card-title mb-4 ${styles.cardTitle}`}>AM Clothing - E-commerce Website</h5>
                  <div className={`${styles.techIcons}`}>
                  <FaHtml5 title="HTML" />
                  <FaCss3Alt title="CSS" />
                  <FaJs title="JavaScript" />
                </div>
          </div>
              <p className={`mb-4 ${styles.cardText}`}>
                AM Clothing is a <span className={styles.highlight}> fully functional e-commerce web application </span> 
                designed to simulate a real-world online shopping experience using modern frontend practices.
                The project includes <span className={styles.highlight}> user authentication</span>, 
                product listing, search functionality, and order placement, with application data managed 
                using browser localStorage.
                Through this project, I gained hands-on experience in 
                <span className={styles.highlight}> DOM manipulation</span>, event handling, and building 
                structured, maintainable JavaScript code for real-world use cases.
              </p>
            <a
              href="https://github.com/Mano6383/frontend-exercises"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-dark ${styles.githubButton}`}
            >
              <i className="bi bi-github me-2"></i>
              GitHub
            </a>
        </div>
      </div>
      <div 
        className={`card border-0 p-4 mb-5 ${styles.projectCard} ${styles.animate}`}>
        <div className={`card-body`}>
          <div className="d-flex justify-content-between align-items-center mb-3 h-100 flex-wrap">
            <h5 className={`card-title mb-4 ${styles.cardTitle}`}>Memory Game - Cards</h5>
                  <div className={`${styles.techIcons}`}>
                  <FaHtml5 title="HTML" />
                  <FaCss3Alt title="CSS" />
                  <FaJs title="JavaScript" />
                  <FaBootstrap title="Bootstrap" />
                </div>
          </div>
            <p className={`card-text ${styles.cardText}`}>
              This project is an interactive <span className={styles.highlight}>memory matching game</span> built using 
              HTML, CSS, and JavaScript, designed to improve logical thinking and user interaction handling. 
              The game dynamically generates cards, shuffles them randomly, and allows users to flip cards 
              to find matching pairs.
              Core functionality includes <span className={styles.highlight}>DOM manipulation</span>, 
              click event handling, card state management, and match validation logic. 
              Visual feedback such as card flipping effects, hover animations, and a win message 
              enhances the overall user experience.
              Through this project, I gained practical experience in <span className={styles.highlight}>JavaScript logic building</span>, 
              working with arrays and conditions, and managing application state without using any external libraries. 
            </p>

            <a
              href="https://github.com/Mano6383/Memory-Game"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-dark ${styles.githubButton}`}
            >
              <i className="bi bi-github me-2"></i>
              GitHub
            </a>
        </div>
        </div>
    </div>
  );
}

export default Projects;