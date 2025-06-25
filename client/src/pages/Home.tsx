import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WorkHistory from '../components/WorkHistory';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkHistory />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
