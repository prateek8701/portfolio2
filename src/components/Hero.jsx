import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const typingRoles = [
  "Software Engineer.",
  "M.Tech CSE Student.",
  "Full-Stack Developer.",
  "Machine Learning Enthusiast."
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = typingRoles[roleIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typingRoles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center'
      }} className="hero-grid">
        
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: 'var(--color-secondary)',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            Hi there, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #ffffff 0%, var(--color-text-muted) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800
            }}
          >
            Sandeep Choudhary
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ color: 'var(--color-text-muted)', marginRight: '8px' }}>I'm a</span>
            <span style={{ color: 'var(--color-primary)', minWidth: '220px' }}>
              {currentText}
              <span className="cursor-blink"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              maxWidth: '600px',
              marginBottom: '40px',
              lineHeight: 1.7
            }}
          >
            Currently pursuing an Integrated M.Tech in Computer Science at Jaypee Institute of Information Technology (2022 – 2027). Experienced in crafting robust backend services with Node.js and Express, implementing interactive user interfaces in React, and building Machine Learning applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => handleScroll('projects')}
              className="btn btn-primary"
            >
              View My Work <ArrowRight size={18} />
            </button>
            
            <button
              onClick={() => handleScroll('contact')}
              className="btn btn-secondary"
            >
              Contact Me <Mail size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Premium Graphic representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="hero-graphic"
        >
          {/* Animated Glow Rings */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '2px dashed rgba(139, 92, 246, 0.3)',
            animation: 'spin 20s linear infinite'
          }} />
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            animation: 'spin-reverse 30s linear infinite'
          }} />
          
          {/* Central Interactive Sphere */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '35% 65% 55% 45% / 45% 55% 45% 55%',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
              boxShadow: '0 0 50px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(255,255,255,0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '3rem',
              letterSpacing: '-0.05em'
            }}
          >
            SC
            <span style={{
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: '4px',
              textTransform: 'uppercase'
            }}>
              CSE M.Tech
            </span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-graphic {
            margin-top: 40px;
            order: -1;
          }
          .btn {
            justify-content: center;
            width: 100%;
          }
          h2 {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
