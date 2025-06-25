import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Daniel. Built with React + TypeScript.</p>
      <div className="footer-links">
        <a href="https://github.com/dsfreehand" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>•</span>
        <a href="mailto:daniel.sisson@live.com">Email Me</a>
      </div>
    </footer>
  );
};

export default Footer;
