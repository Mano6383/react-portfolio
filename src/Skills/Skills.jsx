import { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Skills.module.css';

function Skills() {
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
        className={`container p-4 bg-white my-5 w-100 ${styles.skillsContainer}`}
        id="skills"
    >
        <h3
        className={`text-center w-100 fw-bold ${styles.skillsHeading} ${styles.animate}`}
        >
        MY <span style={{color: 'salmon'}}>SKILLS</span>
        </h3>
        <div className={`row g-1 ${styles.skillsGrid} ${styles.animate}`}>
        <div className="d-flex flex-wrap justify-content-center">
        <h3 className={`d-block w-100 text-center mb-4 ${styles.skillsHeading} ${styles.animate}`}>
            Web Development
        </h3>
        <div className={`col-6 col-md-4 col-lg-2 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/html.png" alt="html icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        <div className={`col-6 col-md-4 col-lg-2 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/css.png" alt="css icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        <div className={`col-6 col-md-4 col-lg-2 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/js.png" alt="js icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        <div className={`col-6 col-md-4 col-lg-2 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/react.png" alt="react icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        <div className={`col-6 col-md-4 col-lg-2 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/bs.png" alt="bootstrap icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
        <h3 className={`d-block w-100 text-center mb-4 ${styles.skillsHeading} ${styles.animate}`}>
            Programming Languages
        </h3>
        <div className={`col-6 col-md-4 col-lg-3 text-center my-2 ${styles.skillItem}`}>
            <span className={`${styles.skillIcon}`}>
                <img src="/public/assets/java.png" alt="java icon"
                className={`${styles.iconImage} ${styles.animate}`}
                />
            </span>
        </div>
        </div>

        </div>
    </div>
    );
}
export default Skills;