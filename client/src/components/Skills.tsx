import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skillsSection">
      <h2 className="section-title">Skills</h2>

      <div className="skill-category">
        <h3>Web Development</h3>
        <div className="skillGrid">
          <div className="skillCard">React & TypeScript</div>
          <div className="skillCard">CSS Modules</div>
          <div className="skillCard">Node.js & Express</div>
          <div className="skillCard">Apollo Client & GraphQL</div>
        </div>
      </div>

      <div className="skill-category">
        <h3>UX & Design</h3>
        <div className="skillGrid">
          <div className="skillCard">Responsive Design</div>
          <div className="skillCard">Accessibility (WCAG)</div>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tooling & Workflow</h3>
        <div className="skillGrid">
          <div className="skillCard">Git & GitHub</div>
          <div className="skillCard">npm & Webpack</div>
          <div className="skillCard">Cypress & Jest</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
