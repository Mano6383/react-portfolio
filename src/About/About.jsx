import styles from './About.module.css';

function About() {
    return (
        <div className="container p-2 bg-white" id="about">
            <div className="row justify-content-center my-5">
                <div className="col-auto">
                    <span className={`${styles.aboutSpan}`}>
                        Hello!
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <p className={` fs-5 px-5 text-center text-md-start ${styles.aboutParagraph}`}>
                        <code className={`fs-3 ${styles.aboutCode} ${styles.fadeIn}`}>{"<Hello I'm Mano>"}</code>
                        <br />
                        <code className={`fs-3 ${styles.aboutCode} ${styles.fadeIn}`}>{"<Web Developer>"}</code>
                        <br /><br /><br />
                        <em className={`${styles.quoteWrapper}`}>
                            <span className={`${styles.openQuote}`}>&ldquo;</span>
                            A 2025 engineering graduate from 
                            <span className={`${styles.aboutCode}`}> K.S. Rangasamy College of Technology </span>
                            with foundational knowledge in web development, database systems, and core programming concepts.
                            Hands-on experience in building responsive web applications and working with structured data,
                            along with an understanding of how different layers of an application interact.
                            Enthusiastic about learning new technologies, improving technical skills, and contributing
                            to meaningful software solutions.
                            <span className={`${styles.closeQuote}`}>&rdquo;</span>
                        </em>
                        <br /><br />
                        <button 
                            className={`me-3 ${styles.resumeButton}`}>
                            <a
                                href="/src/assets/Mano Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.resumeLink}`}
                                >
                                View Resume
                            </a>
                        </button>
                    </p>
                </div>
                <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
                    <img 
                        src="/src/assets/photo-1652684345676-2d31a1734ce7.avif" 
                        alt="Profile Picture" 
                        className={`img-fluid shadow-sm ${styles.profileImg}`} 
                        width="150" 
                        height="150"/>
                </div>
            </div>
        </div>
    );
}

export default About;
