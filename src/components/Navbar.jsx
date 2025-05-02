    import React, { useState } from 'react';
    import resume from "../assets/MANISH.pdf";
    import '../styles.css';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
        <div className="navbar-header">
            <h1>Manish Sirohi</h1>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            {isOpen ? '✕' : '☰'}
            </button>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li>
            <a 
                href={resume} 
                download 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Resume
            </a>
        </li>
        </ul>
        </nav>
    );
    };

    export default Navbar;
