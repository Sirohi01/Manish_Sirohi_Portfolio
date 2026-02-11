import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/Manish_Sirohi_Portfolio/" element={<Home />} />
          <Route path="/Manish_Sirohi_Portfolio/about" element={<About />} />
          <Route path="/Manish_Sirohi_Portfolio/skills" element={<Skills />} />
          <Route path="/Manish_Sirohi_Portfolio/experience" element={<Experience />} />
          <Route path="/Manish_Sirohi_Portfolio/projects" element={<Projects />} />
          <Route path="/Manish_Sirohi_Portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
