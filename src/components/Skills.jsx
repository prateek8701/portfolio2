import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Settings, Code, Layers, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={22} color="var(--color-primary)" />,
    skills: [
      { name: "JavaScript", type: "frontend" },
      { name: "Python", type: "backend" },
      { name: "C++", type: "languages" },
      { name: "SQL", type: "database" },
      { name: "HTML", type: "frontend" },
      { name: "CSS", type: "frontend" }
    ]
  },
  {
    title: "Technologies & Frameworks",
    icon: <Layers size={22} color="var(--color-secondary)" />,
    skills: [
      { name: "React.js", type: "frontend" },
      { name: "Node.js", type: "backend" },
      { name: "Express.js", type: "backend" },
      { name: "Angular", type: "frontend" },
      { name: "Machine Learning Basics", type: "ml" },
      { name: "Socket.io", type: "network" },
      { name: "MongoDB", type: "database" },
      { name: "MySQL", type: "database" }
    ]
  },
  {
    title: "Developer Tools",
    icon: <Settings size={22} color="var(--color-accent)" />,
    skills: [
      { name: "Git", type: "tool" },
      { name: "GitHub", type: "tool" },
      { name: "Docker", type: "tool" },
      { name: "Postman", type: "tool" },
      { name: "VS Code", type: "tool" },
      { name: "Jupyter Notebook", type: "tool" },
      { name: "Google Colab", type: "tool" },
      { name: "Curl", type: "tool" }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        staggerChildren: 0.05 
      } 
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-title"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid-3"
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            variants={cardVariants}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              height: '100%'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              paddingBottom: '14px'
            }}>
              {category.icon}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)' }}>
                {category.title}
              </h3>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  variants={badgeVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    borderColor: 'var(--color-primary)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.2)'
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: 'var(--color-text-muted)',
                    cursor: 'default',
                    transition: 'color 0.2s ease, border-color 0.2s ease'
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
