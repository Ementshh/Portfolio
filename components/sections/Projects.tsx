"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";

const projects = [
  {
    name: "E-Commerce Platform",
    tech: ["Next.js", "TypeScript", "Stripe"],
    description: "Full-featured online store with payment processing and inventory management.",
    link: "#",
  },
  {
    name: "Task Management App",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Collaborative project management tool with real-time updates.",
    link: "#",
  },
  {
    name: "API Gateway Service",
    tech: ["Go", "Redis", "Docker"],
    description: "High-performance API gateway handling millions of requests daily.",
    link: "#",
  },
  {
    name: "Mobile Fitness App",
    tech: ["React Native", "Firebase"],
    description: "Cross-platform fitness tracking application with social features.",
    link: "#",
  },
];

export default function Projects() {
  const { playHover, playClick } = useAudio();

  return (
    <div className="space-y-6" style={{ color: 'var(--crt-blue)' }}>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold crt-text mb-6"
      >
        ▸ PROJECTS
      </motion.h3>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            onMouseEnter={playHover}
            onClick={playClick}
            className="block window-border rounded-lg p-4 transition-colors cursor-pointer"
            style={{ backgroundColor: 'var(--window-bg)' }}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-base md:text-lg font-bold crt-text">{project.name}</h4>
              <span className="text-sm" style={{ color: 'var(--crt-blue-glow)' }}>▸</span>
            </div>
            
            <p className="text-sm mb-3" style={{ opacity: 0.7 }}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border rounded"
                  style={{ borderColor: 'var(--window-border)', backgroundColor: 'rgba(0, 170, 255, 0.1)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xs mt-8"
        style={{ color: 'var(--crt-blue-dim)' }}
      >
        // Click on a project to view more details
      </motion.div>
    </div>
  );
}
