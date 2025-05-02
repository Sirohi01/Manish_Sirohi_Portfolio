    import React from 'react';
    import './SkillsPage.css';
    import { FaReact, FaNodeJs, FaPython, FaDatabase, FaTools, FaMobileAlt, FaBrain } from 'react-icons/fa';

    const skills = [
    {
        section: 'Frontend',
        icon: <FaReact />,
        items: [
        { name: 'JavaScript (ES6+)', description: 'Proficient in modern JavaScript for dynamic web apps.' },
        { name: 'React.js, Redux', description: 'Building responsive web interfaces using React & Redux.' },
        { name: 'HTML5, CSS3, Tailwind CSS, Bootstrap', description: 'Crafting pixel-perfect, responsive UIs.' },
        ],
    },
    {
        section: 'Backend',
        icon: <FaNodeJs />,
        items: [
        { name: 'Node.js, Express.js', description: 'Creating scalable backend solutions with RESTful APIs.' },
        { name: 'MongoDB, Firebase', description: 'Efficient NoSQL databases with real-time updates.' },
        { name: 'SQL', description: 'Handling structured data and queries.' },
        ],
    },
    {
        section: 'Mobile Development',
        icon: <FaMobileAlt />,
        items: [
        { name: 'React Native', description: 'Cross-platform mobile app development.' },
        { name: 'Expo, React Navigation', description: 'Fast prototyping and smooth user navigation.' },
        ],
    },
    {
        section: 'Machine Learning / AI',
        icon: <FaBrain />,
        items: [
        { name: 'Python, TensorFlow, Keras', description: 'Developing ML and deep learning models.' },
        { name: 'OpenCV, Scikit-learn', description: 'Image processing and classical ML solutions.' },
        ],
    },
    {
        section: 'Tools & Platforms',
        icon: <FaTools />,
        items: [
        { name: 'Git, Docker, Linux', description: 'Version control, containerization, and CLI workflows.' },
        { name: 'Postman, Webpack, Babel, CI/CD', description: 'API testing and modern development tools.' },
        ],
    },
    ];

    const SkillsPage = () => {
    return (
        <div className="skills-page">
        <div className="skills-header">
            <h2>Skills</h2>
            <p>Here’s a snapshot of the technologies and tools I work with:</p>
        </div>
        <div className="skills-cards">
            {skills.map((section, index) => (
            <div className="skill-card" key={index}>
                <div className="skill-icon">{section.icon}</div>
                <div className="skill-info">
                <h3>{section.section}</h3>
                {section.items.map((item, idx) => (
                    <div key={idx} style={{ marginBottom: '1rem' }}>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default SkillsPage;
