"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="space-y-6" style={{ color: 'var(--crt-blue)' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl md:text-2xl font-bold crt-text mb-4">
          ▸ ABOUT ME
        </h3>
        <div className="border-l-2 pl-4 space-y-4" style={{ borderColor: 'var(--window-border)' }}>
          <p className="text-sm md:text-base leading-relaxed">
            Hello! I&apos;m a passionate software developer with a love for building 
            elegant solutions to complex problems. I specialize in full-stack 
            development and enjoy working with modern technologies.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, 
            contributing to open source projects, or tinkering with retro hardware.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="text-lg font-bold crt-text mb-3">▸ SKILLS</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            "JavaScript/TypeScript",
            "React & Next.js",
            "Node.js",
            "Python",
            "SQL & NoSQL",
            "Git & CI/CD",
            "Cloud Services",
            "API Design"
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-center gap-2"
            >
              <span style={{ color: 'var(--crt-blue-glow)' }}>▪</span>
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xs mt-8"
        style={{ color: 'var(--crt-blue-dim)' }}
      >
        // Last updated: 2026
      </motion.div>
    </div>
  );
}
