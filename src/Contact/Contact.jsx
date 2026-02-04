import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Contact.module.css';
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa";

function Contact() {
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
    }
    , []);
    return (
    <div
        className={`container-fluid p-4 bg-light w-100 ${styles.contactContainer} ${styles.animate}`}
        id="contact"
    >
        <h3
        className={`text-center w-100 mb-4 fw-bold ${styles.contactHeading} ${styles.animate}`}
        >
        GET IN <span style={{color: 'salmon'}}>TOUCH</span>
        </h3>
        
        <div className={`row ${styles.contactContent} ${styles.animate}`}>
            <div className="col-md-4 col-lg-3 text-center mb-4">
                <p className={`${styles.connectText}`}>Let's connect on <span style={{color: 'salmon'}}>Social Network!</span></p>
                <div className={`gap-3 d-flex justify-content-center fs-2 ${styles.socialIcons}`}>
                    <a href="https://www.linkedin.com/in/mano-t-525602378" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin title="LinkedIn" />
                    </a>
                    <a href="https://github.com/Mano6383" target="_blank" rel="noopener noreferrer">
                        <FaGithub title="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/_.little._.heart._667/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram title="Instagram" />
                    </a>
                    <a href="https://wa.me/6383059259" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp title="WhatsApp" />
                    </a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 text-center mb-4">
                    <p className={`${styles.connectText}`}>Quick <span style={{color: 'salmon'}}>Links</span></p>
                    <div className={`d-flex flex-column ${styles.quickLinks}`}>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
            </div>

            <div className="col-md-4 col-lg-6 text-center mb-4">
                <p className={`${styles.connectText}`}>Contact <span style={{color: 'salmon'}}>Info</span></p>
                <div className={`d-flex flex-column ${styles.contactInfo}`}>
                    <form
                    className={`d-flex flex-column ${styles.contactInfo}`}
                    action="mailto:manothangarajk@gmail.com"
                    method="POST"
                    encType="text/plain"
                    >

                    <div className="d-flex gap-3 mb-4">
                        <input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        className={`form-control p-3 ${styles.formControl}`}
                        required
                        />
                        <input
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        className={`form-control p-3 ${styles.formControl}`}
                        required
                        />
                    </div>

                    <textarea
                        name="Message"
                        placeholder="Your Message"
                        rows="4"
                        className={`form-control mb-3 p-3 ${styles.formControl}`}
                        required
                    ></textarea>

                    <button type="submit" className={`btn px-4 mx-auto ${styles.sendButton}`}>
                        Send Message
                    </button>
                    </form>

                </div>
            </div>
        </div>


    </div>
    );
}

export default Contact;