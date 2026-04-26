import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="site-shell min-h-screen transition-colors duration-500 selection:bg-cobalt/20 dark:selection:bg-cobalt-bright/30 selection:text-cobalt dark:selection:text-cobalt-bright">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Experience />
        <Research />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
