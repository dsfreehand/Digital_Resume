import React from 'react';
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Daniel Sisson</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Work History</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
