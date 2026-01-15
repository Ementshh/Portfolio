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
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src="/images/profile.png" 
              alt="Clement Profile" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2"
              style={{ borderColor: 'var(--window-border)' }}
            />
          </div>
          <div className="border-l-2 pl-4 flex-1" style={{ borderColor: 'var(--window-border)' }}>
            <p className="text-sm md:text-base leading-relaxed">
              A Computer Engineering student at Universitas Indonesia with a passion 
              for Cybersecurity, Game Development, Networking, and anything that runs 
              on electricity.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h4 className="text-lg font-bold crt-text mb-3">▸ EDUCATION</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L1 9L12 15L21 12V17H23V9L12 3ZM5 13.18V17.18C5 19.64 8.58 21 12 21C15.42 21 19 19.64 19 17.18V13.18L12 17L5 13.18Z" fill="var(--crt-blue-glow)"/>
            </svg>
            <div>
              <p className="font-bold">Universitas Indonesia</p>
              <p className="text-sm" style={{ color: 'var(--crt-blue-dim)' }}>2024 - Present</p>
              <p className="text-sm">Bachelor of Computer Engineering</p>
              <p className="text-sm">GPA: 3.85</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18V17.18C5 19.64 8.58 21 12 21S19 19.64 19 17.18V13.18L12 17L5 13.18ZM12 16L1 10L12 4L23 10L12 16Z" fill="var(--crt-blue-glow)"/>
              <path d="M18 9V14L16 13V10L18 9Z" fill="var(--crt-blue-glow)"/>
            </svg>
            <div>
              <p className="font-bold">SMAN 81 Jakarta</p>
              <p className="text-sm" style={{ color: 'var(--crt-blue-dim)' }}>2021 - 2024</p>
              <p className="text-sm">Science Track</p>
            </div>
          </div>
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
            "Git / Github",
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
            "Computer Networks",
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
