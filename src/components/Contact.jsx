import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                    Have a project in mind or just want to say hello? Feel free to drop me a message or reach out via any of the following:
                </p>
                <div className="contact-details">
                    <p><strong>Email:</strong> <a href="mailto:manishsirohi023@gmail.com">manishsirohi023@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919568259784">+91 9568259784</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217/" target="_blank" rel="noreferrer">View Profile</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Sirohi01" target="_blank" rel="noreferrer">github.com/Sirohi01</a></p>
                </div>
                <a href="mailto:manishsirohi023@gmail.com" className="btn">Send a Message</a>
            </div>
        </section>
    );
};

export default Contact;
