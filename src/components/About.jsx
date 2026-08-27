import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const courses = [
  { name: 'Object-Oriented Programming (OOP)', icon: '📦' },
  { name: 'Software Methodology', icon: '⚙️' },
  { name: 'Cloud Computing', icon: '☁️' },
  { name: 'Database Management Systems (DBMS)', icon: '🗄️' }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginTop: '20px'
        }}
        className="grid-2"
      >
        {/* Left Card: Story and Coursework */}
        <motion.div variants={itemVariants} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={24} /> My Journey
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            I am an academic and tech enthusiast currently doing my Integrated M.Tech in Computer Science and Engineering at Jaypee Institute of Information Technology. I love building web applications that solve real-world problems and analyzing complex datasets using machine learning.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            With a solid foundation in software methodology, object-oriented concepts, and cloud deployments, I focus on engineering clean, scalable, and modular systems.
          </p>

          <div style={{ marginTop: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="var(--color-primary)" /> Relevant Coursework
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }} className="grid-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: 'var(--color-text)',
                    transition: 'var(--transition-smooth)'
                  }}
                  className="course-tag-hover"
                >
                  <span style={{ fontSize: '1.1rem' }}>{course.icon}</span>
                  <span>{course.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Card: Education Timeline */}
        <motion.div variants={itemVariants} className="glass-card">
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={24} /> Education
          </h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-title" style={{ fontWeight: 700 }}>Jaypee Institute of Information Technology</h4>
                  <p className="timeline-subtitle">Integrated M.Tech in Computer Science & Engineering</p>
                </div>
                <div className="timeline-date">Sep. 2022 – July 2027</div>
              </div>
              <div className="timeline-content" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <MapPin size={16} color="var(--color-primary)" />
                  <span>Noida, Uttar Pradesh</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={16} color="var(--color-primary)" />
                  <span>Currently in progress</span>
                </div>
                <p style={{ marginTop: '8px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Engaged in fundamental computer science theories and advanced engineering practices, maintaining a consistent academic focus on backend systems, cloud architectures, and algorithmic problem-solving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .course-tag-hover:hover {
          background: rgba(139, 92, 246, 0.08) !important;
          border-color: rgba(139, 92, 246, 0.3) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
