import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DsaLeadership from './components/DsaLeadership';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for Active Header Link
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
        zIndex: 100,
        boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
        transition: 'width 0.1s ease-out'
      }} />

      {/* Floating Background Glows */}
      <div className="glow-bg glow-violet" />
      <div className="glow-bg glow-cyan" />
      <div className="glow-bg glow-pink" />

      {/* Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Page Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DsaLeadership />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(3, 0, 20, 0.6)',
        backdropFilter: 'var(--glass-blur)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Sandeep Choudhary. All rights reserved.
        </p>
        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', marginTop: '6px' }}>
          Crafted with React, Framer Motion & Custom CSS.
        </p>
      </footer>
    </div>
  );
}
