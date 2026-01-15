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
    <div className="text-crt-blue space-y-6">
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
            className="border-l-2 border-crt-blue/50 pl-4 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-crt-blue-glow rounded-full" />
            
            <div className="mb-1">
              <h4 className="text-base md:text-lg font-bold crt-text">{exp.title}</h4>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm text-crt-blue-dim">
                <span>{exp.company}</span>
                <span className="hidden md:inline">|</span>
                <span className="text-crt-blue-glow">{exp.period}</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mt-2 text-crt-blue/80">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-crt-blue-dim text-xs mt-8 border-t border-crt-blue/20 pt-4"
      >
        // Career started: 2020 | Years of experience: 6+
      </motion.div>
    </div>
  );
}
