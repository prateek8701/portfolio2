import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Cpu, Layout, Smartphone } from 'lucide-react';

const projects = [
  {
    id: "diabetes-predictor",
    title: "Diabetes Predictor",
    category: "ml",
    image: "/project-diabetes.png",
    tech: ["Bootstrap", "CSS", "Flask", "Python", "PIMA Diabetes Dataset"],
    date: "January 2024",
    description: "Developed a machine learning–based diabetes prediction system using patient health parameters (Glucose, BMI, Blood Pressure, Age, etc.) to accurately classify diabetes risk.",
    bullets: [
      "Built a full-stack Flask web application with user authentication, role-based dashboards (Patient/Doctor), appointment booking, and prediction history.",
      "Integrated the trained machine learning model into the Flask backend to provide real-time diabetes risk prediction based on user input.",
      "Implemented charts and analytics for patient health logs and prediction visualization."
    ],
    link: "https://github.com/prateek8701"
  },
  {
    id: "smart-parking",
    title: "Smart Car Parking System",
    category: "web",
    image: "/project-parking.png",
    tech: ["React.js", "JavaScript", "CSS"],
    date: "July 2025",
    description: "Developed a Smart Car Parking System that enables users to view parking availability and make reservations through an interactive web interface.",
    bullets: [
      "Designed an admin dashboard to manage parking slots, monitor reservations, and improve space utilization efficiency.",
      "Built a responsive React-based frontend with reusable components and icons to ensure smooth user experience across devices.",
      "Integrated interactive indicators representing reservation status in real-time."
    ],
    link: "https://github.com/prateek8701"
  },
  {
    id: "cognitive-horizons",
    title: "Cognitive Horizons",
    category: "python",
    image: "/project-cognitive.png",
    tech: ["Python", "Pygame", "Generative AI", "Local LLM"],
    date: "May 2025",
    description: "Features six educational Pygame-based games developed to support cognitive skill-building in older adults.",
    bullets: [
      "Games include: Quiz Game, Water Sort Puzzle, Card Matching Game, Pattern Finder, Word Builder, and Color Trails.",
      "Utilizes Generative AI for dynamic content creation and real-time difficulty adjustment.",
      "Generates post-session performance reporting including metrics for accuracy, speed, and focus."
    ],
    link: "https://github.com/prateek8701"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {['all', 'web', 'ml', 'python'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: filter === cat ? 'var(--color-secondary)' : 'rgba(255,255,255,0.08)',
              background: filter === cat ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255,255,255,0.02)',
              color: filter === cat ? 'var(--color-secondary)' : 'var(--color-text-muted)',
              transition: 'var(--transition-smooth)'
            }}
          >
            {cat === 'all' && 'All Projects'}
            {cat === 'web' && 'Web Dev'}
            {cat === 'ml' && 'Machine Learning'}
            {cat === 'python' && 'Python & Games'}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '30px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden'
              }}
            >
              {/* Image banner */}
              <div style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                position: 'relative',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)'
                  }}
                  className="project-image"
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(3, 0, 20, 0.75)',
                  backdropFilter: 'var(--glass-blur)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--color-text-muted)'
                }}>
                  {project.date}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: '10px',
                  color: 'var(--color-text)'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flexGrow: 1
                }}>
                  {project.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      gap: '8px',
                      fontSize: '0.88rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.5'
                    }}>
                      <span style={{ color: 'var(--color-primary)' }}>•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px'
                }}>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        color: 'var(--color-text-dim)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      padding: '8px 20px',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        @media (max-width: 480px) {
          #projects {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </section>
  );
}
