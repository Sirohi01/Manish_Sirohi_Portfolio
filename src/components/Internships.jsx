    import React from "react";

    const Internships = () => {
    return (
        <section id="internships" className="section">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Internship Experience</h2>
        <div className="projects">
            <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Developer Intern</h3>
            <p className="text-sm text-gray-500 mb-1">LeaveCode Technologies Pvt. Ltd. | Dec 2024 – Apr 2025</p>
            <ul className="list-disc list-inside text-left text-gray-700 mt-2 space-y-1">
                <li>Developed a cross-platform trash management app using React Native, Redux, and Firebase.</li>
                <li>Implemented React Navigation and integrated Firestore for real-time updates.</li>
                <li>Reduced API fetch latency by 25% through optimized Axios integration.</li>
                <li>Achieved consistent mobile UI with Tailwind CSS across Android and iOS platforms.</li>
            </ul>
            </div>

            <div className="card">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Development Intern</h3>
            <p className="text-sm text-gray-500 mb-1">Sneagnic Pvt. Ltd. | Feb 2024 – Aug 2024</p>
            <ul className="list-disc list-inside text-left text-gray-700 mt-2 space-y-1">
                <li>Built 5+ responsive web apps using React.js, Bootstrap, and Tailwind CSS.</li>
                <li>Implemented SEO strategies to improve site traffic by 15%.</li>
                <li>Integrated RESTful APIs with Axios, improving loading time and performance.</li>
                <li>Designed and implemented secure Firebase authentication and backend APIs.</li>
            </ul>
            </div>
        </div>
        </section>
    );
    };

    export default Internships;
