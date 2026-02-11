import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/Manish_Sirohi_Portfolio/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 py-2' : 'top-4 py-4'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${scrolled ? 'w-full' : 'w-[95%] md:w-[90%]'
        }`}>
        <div className={`backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg px-6 flex justify-between items-center h-16 md:h-20 transition-all duration-300 ${scrolled ? 'rounded-none border-x-0 border-t-0 bg-slate-900/80' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl rotate-0 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative text-white font-heading font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-heading font-bold text-white tracking-wide hidden sm:block">
              Sirohi<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'
                  }`}>{link.name}</span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Socials / Action */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <a href="https://github.com/Sirohi01" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${isActive(link.path) ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                <a href="https://github.com/Sirohi01" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><FiGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400"><FiLinkedin size={24} /></a>
                <a href="mailto:manishsirohi023@gmail.com" className="text-gray-400 hover:text-red-400"><FiMail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
