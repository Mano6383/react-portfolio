
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg p-2 ${styles.navbarCustom}`}>
      <div className="container-fluid">

        <a className={styles.navbarBrand} href="#">
          Mano's <span className={styles.titleHighlight}>Portfolio</span>
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE */}
        <div className={`collapse navbar-collapse ${styles.navbarLinks}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-0 px-md-3">
              <a className="nav-link" href="#about">
                <span className={styles.linkText}>About</span>
              </a>
            </li>

            <li className="nav-item px-0 px-md-3">
              <a className="nav-link" href="#projects">
                <span className={styles.linkText}>Projects</span>
              </a>
            </li>

            <li className="nav-item px-0 px-md-3">
              <a className="nav-link" href="#skills">
                <span className={styles.linkText}>Skills</span>
              </a>
            </li>

            <li className="nav-item px-0 px-md-3">
              <a className="nav-link" href="#contact">
                <span className={styles.linkText}>Contact</span>
              </a>
            </li>

          </ul>
        </div>

        </div>
     </nav>

  );
}

export default Navbar;
