"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Company Inc.",
    period: "2024 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2022 - 2024",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved deployment processes.",
  },
  {
    title: "Junior Developer",
    company: "Startup Studio",
    period: "2020 - 2022",
    description: "Started my professional journey building web applications. Learned agile methodologies and modern development practices.",
  },
];

export default function Experiences() {
  return (
    <div className="space-y-6" style={{ color: 'var(--crt-blue)' }}>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold crt-text mb-6"
      >
        ▸ EXPERIENCE
      </motion.h3>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.15 }}
            className="border-l-2 pl-4 relative"
            style={{ borderColor: 'var(--window-border)' }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--crt-blue-glow)' }} />
            
            <div className="mb-1">
              <h4 className="text-base md:text-lg font-bold crt-text">{exp.title}</h4>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm" style={{ color: 'var(--crt-blue-dim)' }}>
                <span>{exp.company}</span>
                <span className="hidden md:inline">|</span>
                <span style={{ color: 'var(--crt-blue-glow)' }}>{exp.period}</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mt-2" style={{ opacity: 0.8 }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xs mt-8 border-t pt-4"
        style={{ color: 'var(--crt-blue-dim)', borderColor: 'var(--window-border)' }}
      >
        // Career started: 2020 | Years of experience: 6+
      </motion.div>
    </div>
  );
}
