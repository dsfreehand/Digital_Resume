import React from 'react';
import '../styles/About.css'; 

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p>
          With over a decade in the medical device industry, I honed my skills as a Quality Engineer—developing, validating, and improving critical processes with precision. Working in a highly regulated field taught me the value of structure, clarity, and trust—skills I now bring into every line of code I write.
        </p>
        <p>
          Recently, I completed Columbia University's Full-Stack Web Development Bootcamp, transitioning into software development with a strong foundation in JavaScript, React, Node.js, and GraphQL. Today, I build scalable, user-friendly web applications with the same focus and commitment I brought to Class III medical device systems.
        </p>
        <p>
          Whether I’m optimizing CSS for pixel-perfect layouts or designing modular React components, I love combining creative problem-solving with engineering discipline. I'm currently focused on building clean, responsive apps—and forging the next chapter of my career in tech.
        </p>
      </div>
    </section>
  );
};

export default About;
