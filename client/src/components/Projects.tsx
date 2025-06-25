import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projectsSection">
      <h2>Projects</h2>
      <div className="project-grid">
        {/* Example card—replace with mapped project data or custom cards */}
        <div className="project-card">
          <h3>Budget Tracker</h3>
          <p>A simple budget planner with real-time calculations and responsive layout.</p>
          <div className="project-links">
            <a href="https://dsfreehand.github.io/budget-tracker/" target="_blank" rel="noopener noreferrer">GitHub</a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
