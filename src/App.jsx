import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "../src/styles.css";
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillsPage />
      <Internships />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
