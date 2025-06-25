import React from 'react';
import '../styles/WorkHistory.css';

const WorkHistory: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="experience-item">
        <h3 className="role">
          Quality Engineer <span className="company">@ Helmer Scientific</span>
        </h3>
        <p className="duration">Jan 2024 – Present</p>
        <ul className="details">
          <li>Conducted studies to identify and implement optimal manufacturing processes.</li>
          <li>Developed software tools to track and analyze quality metrics—bridging into web development.</li>
          <li>Collaborated cross-functionally to integrate process improvements using data-driven solutions.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="role">
          Quality Assurance Specialist <span className="company">@ Cooper Surgical</span>
        </h3>
        <p className="duration">May – Nov 2023 (Contract)</p>
        <ul className="details">
          <li>Created Design Control and Risk documentation, including DIOVV and FMEAs.</li>
          <li>Coordinated Design Verification Testing for transit validation.</li>
          <li>Drafted manufacturing and quality specs—honing technical communication skills used in coding today.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="role">
          Quality Assurance Engineer <span className="company">@ Beckman Coulter</span>
        </h3>
        <p className="duration">Apr 2017 – Apr 2023</p>
        <ul className="details">
          <li>Led process capability investigations and implemented long-term improvements.</li>
          <li>Launched a new Quality Management System (QMS), increasing audit readiness and system reliability.</li>
          <li>Championed data reporting systems—a precursor to database-driven development work.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="role">
          Development Engineer <span className="company">@ CRI Medical</span>
        </h3>
        <p className="duration">May 2015 – Feb 2017</p>
        <ul className="details">
          <li>Led engineering efforts for Class II and III medical devices—from design through manufacturing.</li>
          <li>Managed contract projects for startups and Fortune 500 clients.</li>
          <li>Applied documentation and validation discipline now translated into software design and testing.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="role">
          Development Engineer <span className="company">@ Zimmer-Biomet</span>
        </h3>
        <p className="duration">Jan 2014 – May 2015 (Contract)</p>
        <ul className="details">
          <li>Remediated Design History Files and ensured regulatory compliance for Class III devices.</li>
          <li>Created traceability matrices and FMEAs—mirroring thoughtful logic flow in modern coding practice.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkHistory;
