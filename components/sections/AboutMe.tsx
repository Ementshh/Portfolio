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
            A Computer Engineering student at Universitas Indonesia with a passion 
            for Cybersecurity, Game Development, Networking, and anything that runs 
            on electricity.
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
            "Java",
            "Javascript",
            "Python",
            "C / C++",
            "Git",
            "Cisco Packet Tracer"
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
        transition={{ delay: 0.3 }}
      >
        <h4 className="text-lg font-bold crt-text mb-3">▸ INTERESTS</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            "Cybersecurity",
            "Networking",
            "Game Development",
            "Web Development",
            "AI / ML"
          ].map((interest, i) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="flex items-center gap-2"
            >
              <span style={{ color: 'var(--crt-blue-glow)' }}>▪</span>
              <span>{interest}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xs mt-8"
        style={{ color: 'var(--crt-blue-dim)' }}
      >
        // Last updated: 2026
      </motion.div>
    </div>
  );
}
