import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Award, CheckCircle, Zap } from 'lucide-react';

function Counter({ target, duration = 1.5, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target, 10);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100); // Dynamic step
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const achievements = [
  {
    icon: <Code2 size={24} color="var(--color-primary)" />,
    title: "DSA Problems Solved",
    target: "250",
    desc: "Focusing on Recursion, Dynamic Programming, Graph Theory, and Optimization."
  },
  {
    icon: <Award size={24} color="var(--color-secondary)" />,
    title: "Practice Challenges",
    target: "200",
    desc: "Actively practiced problem-solving on platforms like LeetCode and HackerRank."
  },
  {
    icon: <CheckCircle size={24} color="var(--color-accent)" />,
    title: "Foundational Problems",
    target: "50",
    desc: "Completed basic concepts and beginner-friendly problems to establish solid basics."
  }
];

export default function DsaLeadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="dsa" className="section" style={{ borderBottom: 'none' }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-title"
      >
        Extracurricular & DSA
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid-3"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '40px 24px',
              gap: '16px'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'inset 0 0 10px rgba(255,255,255,0.05)'
            }}>
              {item.icon}
            </div>

            <h3 style={{
              fontSize: '3rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #ffffff 0%, var(--color-text-muted) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1
            }}>
              <Counter target={item.target} />
            </h3>

            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-text)'
            }}>
              {item.title}
            </h4>

            <p style={{
              fontSize: '0.92rem',
              color: 'var(--color-text-muted)',
              lineHeight: '1.6'
            }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mini Interactive algorithmic highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3 }}
        className="glass-card"
        style={{
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '24px 32px',
          borderLeft: '4px solid var(--color-primary)'
        }}
      >
        <Zap size={28} color="var(--color-primary)" />
        <div style={{ flexGrow: 1 }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>
            Problem Solving Core
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
            Deep understanding of algorithmic complexity (Big-O notation), structural optimization, recursion patterns, DP transitions, and graph traversals.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
