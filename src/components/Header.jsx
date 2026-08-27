import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const navItems = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
];

export default function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled ? 'rgba(3, 0, 20, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.15)' : 'none',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Name Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 800,
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #fff 0%, var(--color-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}
          onClick={() => handleNavClick('hero')}
        >
          SANDEEP<span style={{ color: 'var(--color-primary)', WebkitTextFillColor: 'initial' }}>.</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-only">
          <div style={{ display: 'flex', gap: '8px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id ? 'var(--color-secondary)' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                      borderRadius: '20px',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
            <a href="https://github.com/prateek8701" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sandeep-choudhary" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sandeepchoudhary76100@gmail.com" style={{ color: 'var(--color-text-muted)' }} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '4px'
          }}
          className="mobile-only"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(3, 0, 20, 0.95)',
              backdropFilter: 'var(--glass-blur)',
              WebkitBackdropFilter: 'var(--glass-blur)',
              borderRadius: '0 0 16px 16px',
              marginTop: '12px'
            }}
            className="mobile-only"
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 8px', gap: '8px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: activeSection === item.id ? 'rgba(139, 92, 246, 0.15)' : 'none',
                    border: 'none',
                    color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: '12px 16px',
                    borderRadius: '8px',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div style={{ display: 'flex', gap: '20px', padding: '16px 16px 8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a href="https://github.com/prateek8701" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/sandeep-choudhary" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)' }}>
                  <Linkedin size={22} />
                </a>
                <a href="mailto:sandeepchoudhary76100@gmail.com" style={{ color: 'var(--color-text-muted)' }}>
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled Tag styling for hiding/displaying navbar items */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}
