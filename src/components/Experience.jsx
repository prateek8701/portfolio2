import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Network, Database, Cpu } from 'lucide-react';

const experiences = [
  {
    role: "Intern",
    company: "Elevate Labs",
    location: "Remote",
    period: "August 2025 – September 2025",
    bullets: [
      "Developed a chatbot-based system providing basic health guidance, including symptoms, diet advice, and medication reminders.",
      "Built full-stack utilizing React.js (frontend) and Node.js + Express (backend) to handle user queries and manage application logic efficiently.",
      "Integrated Socket.io to enable real-time interaction between patients and the AI (or doctor), improving user engagement and experience.",
      "Utilized MongoDB & MySQL to store chat histories and medical records, enabling AI symptom checking and smart health recommendations."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "MySQL", "AI Integration"]
  }
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-title"
      >
        Work Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ marginTop: '20px' }}
      >
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
              style={{ marginBottom: '20px' }}
            >
              <div className="glass-card" style={{ padding: '32px' }}>
                <div className="timeline-header" style={{ marginBottom: '20px' }}>
                  <div>
                    <h3 className="timeline-title" style={{ fontWeight: 800, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Briefcase size={22} color="var(--color-primary)" /> {exp.role}
                    </h3>
                    <p className="timeline-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)', fontWeight: 600, marginTop: '4px' }}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <span className="timeline-date">{exp.period}</span>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-content">
                  <ul style={{ paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                        border: '1px solid rgba(6, 182, 212, 0.15)',
                        color: 'var(--color-secondary)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
