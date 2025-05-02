import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
    <footer style={styles.footer}>
        <div style={styles.container}>
            <div style={styles.section}>
                <h4 style={styles.heading}>About</h4>
                <p style={styles.text}>
                    A passionate developer focused on building clean and user-friendly web applications.
                    This portfolio showcases projects, skills, and contact information.
                </p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.heading}>Quick Links</h4>
                <ul style={styles.list}>
                    <li><a href="#projects" style={styles.link}>Projects</a></li>
                    <li><a href="#contact" style={styles.link}>Contact</a></li>
                    <li><a href="#about" style={styles.link}>About Me</a></li>
                </ul>
            </div>
            <div style={styles.section}>
                <h4 style={styles.heading}>Connect</h4>
                <div style={styles.socials}>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:you@example.com" style={styles.icon}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
        <div style={styles.bottom}>
            <p style={styles.bottomText}>&copy; 2025 Manish Sirohi. All rights reserved.</p>
        </div>
    </footer>
);

const styles = {
    footer: {
        background: '#0b132b',
        color: '#ffffff',
        padding: '3rem 1rem 1rem',
        fontSize: '1rem',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem',
        maxWidth: '1200px',
        margin: 'auto',
    },
    section: {
        flex: '1 1 300px',
    },
    heading: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
        borderBottom: '2px solid #00d1b2',
        paddingBottom: '0.5rem',
    },
    text: {
        lineHeight: '1.6',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        display: 'block',
        marginBottom: '0.5rem',
        transition: 'color 0.3s ease',
    },
    icon: {
        color: '#00d1b2',
        fontSize: '1.5rem',
        marginRight: '1rem',
        transition: 'color 0.3s ease',
    },
    socials: {
        display: 'flex',
        alignItems: 'center',
    },
    bottom: {
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        marginTop: '2rem',
        textAlign: 'center',
        paddingTop: '1rem',
    },
    bottomText: {
        margin: 0,
        fontSize: '0.9rem',
        color: '#c3c3c3',
    }
};

export default Footer;
