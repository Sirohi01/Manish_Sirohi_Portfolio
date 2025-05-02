    import React from 'react';

    const Projects = () => (
    <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
        
        <div className="card">
            <h3>Kalo_Dash</h3>
            <p>Mar 2025 - Present</p>
            <p>This project is a full-stack web application built with React, Redux, and CSS to manage and track daily calorie intake. The application allows users to log their food items, track calories, view historical data, and analyze their diet trends. It also includes dynamic charts and data visualizations for a comprehensive overview of calorie consumption.</p>
            <ul>
            <li>Calorie Tracker: Users can log daily food intake with calories, stored and tracked by date.</li>
            <li>Detailed Item Breakdown: Click on specific dates to see a breakdown of foods consumed with images and calorie values.</li>
            <li>Responsive Dashboard: Optimized for mobile and desktop views with a user-friendly interface.</li>
            </ul>
            <p><strong>Technologies Used:</strong> React, Redux, CSS, Chart.js</p>
        </div>

        <div className="card">
            <h3>Leaves Disease Detection System</h3>
            <p>Nov 2023 - Present</p>
            <p>Developed a Leaves Disease Detection System for accurate identification and analysis of plant diseases using a CNN algorithm. The system utilizes advanced image processing and machine learning techniques to diagnose various plant diseases.</p>
            <ul>
            <li>Designed and implemented a CNN algorithm for detecting diseases in plant leaves.</li>
            <li>Collaborated with a team to collect and analyze extensive datasets for disease diagnosis.</li>
            <li>Improved system accuracy using machine learning algorithms.</li>
            <li>Contributed to the advancement of agriculture through cutting-edge technology.</li>
            </ul>
            <p><strong>Technologies Used:</strong> NumPy, Python, Machine Learning, CNN, Kaggle</p>
        </div>

        <div className="card">
            <h3>Food Blog Website</h3>
            <p>Aug 2022 - Feb 2023</p>
            <p>Built a dynamic food blog website using HTML, CSS, JavaScript, and Node.js to create an interactive platform with blog posts, user authentication, and database integration.</p>
            <ul>
            <li>HTML Structure: Created the blog layout with sections for posts, images, and comments.</li>
            <li>CSS Styling: Designed a user-friendly interface tailored for food blogging.</li>
            <li>JavaScript Interactivity: Added image sliders, interactive forms, and dynamic content.</li>
            <li>Node.js Backend: Managed server-side functionalities, including user authentication and blog post storage.</li>
            <li>Database Integration: Connected to MongoDB for data persistence.</li>
            </ul>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, Node.js, MongoDB</p>
        </div>

        <div className="card">
            <h3>Pong Game</h3>
            <p>Mar 2022 - Nov 2022</p>
            <p>Created a Pong game using C++ and SFML (Simple and Fast Multimedia Library) with elements like paddles, ball movement, and scoring.</p>
            <ul>
            <li>Set up C++ project with SFML libraries for graphics and input.</li>
            <li>Implemented game logic for ball movement, collision detection, and scoring.</li>
            <li>Designed continuous game loops with SFML for smooth gameplay.</li>
            <li>Added sound effects and scoring displays to enhance user experience.</li>
            </ul>
            <p><strong>Technologies Used:</strong> C++, SFML</p>
        </div>

        <div className="card">
            <h3>Book Recommendation System</h3>
            <p>Completed</p>
            <p>Developed a book recommendation system using Python, implementing the KNN algorithm to provide personalized book recommendations.</p>
            <ul>
            <li>Used Python libraries to process large datasets and optimize algorithm performance.</li>
            <li>Implemented KNN algorithm to suggest books based on user preferences.</li>
            <li>Demonstrated advanced Python programming skills through project development.</li>
            </ul>
            <p><strong>Technologies Used:</strong> NumPy, Scikit-Learn, Matplotlib, Pandas, KNN</p>
        </div>

        <div className="card">
            <h3>Snake and Ghost Game</h3>
            <p>Completed</p>
            <p>Created a Snake and Ghost game in C++ using SFML, incorporating features like smooth animation, ghost movements, and audio effects.</p>
            <ul>
            <li>Set up C++ project with SFML for graphics, audio, and input handling.</li>
            <li>Implemented game logic for snake movement, collision detection, and scoring.</li>
            <li>Added Ghost characters with movement patterns and interaction with the snake.</li>
            <li>Integrated audio effects to enhance gameplay experience.</li>
            </ul>
            <p><strong>Technologies Used:</strong> C++, SFML</p>
        </div>

        <div className="card">
            <h3>Tic-Tac-Toe</h3>
            <p>Jan 2024</p>
            <p>Created a classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to compete in a grid-based game.</p>
            <ul>
            <li>Implemented HTML structure for the game board and player interaction.</li>
            <li>Styled the game board and buttons with CSS for a clean, responsive design.</li>
            <li>Developed game logic using JavaScript to handle player moves and determine the winner.</li>
            </ul>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
        </div>

        <div className="card">
            <h3>Rock-Paper-Scissors</h3>
            <p>Feb 2024</p>
            <p>Developed a simple Rock-Paper-Scissors game using HTML, CSS, and JavaScript. Players compete against the computer with choices of rock, paper, or scissors.</p>
            <ul>
            <li>Created buttons for player choices and used JavaScript for game logic.</li>
            <li>Implemented scoring system and results display after each round.</li>
            <li>Styled the game with CSS to make it visually appealing and responsive.</li>
            </ul>
            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
        </div>
        
        </div>
    </section>
    );

    export default Projects;
