import About from './About/About'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )         
}

export default App