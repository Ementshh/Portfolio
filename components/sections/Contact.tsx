"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";

const contactLinks = [
  { label: "EMAIL", value: "clementheobenaya@gmail.com", href: "mailto:clementheobenaya@gmail.com" },
  { label: "GITHUB", value: "https://github.com/Ementshh", href: "https://github.com/Ementshh" },
  { label: "LINKEDIN", value: "www.linkedin.com/in/clementheo-benaya-b521b4315", href: "https://www.linkedin.com/in/clementheo-benaya-b521b4315" },
  { label: "LINE", value: "ccllmmnntt", href: "#" },
];

export default function Contact() {
  const { playHover, playClick } = useAudio();

  return (
    <div className="space-y-6" style={{ color: 'var(--crt-blue)' }}>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold crt-text mb-6"
      >
        ▸ CONTACT
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-base leading-relaxed border-l-2 pl-4"
        style={{ borderColor: 'var(--window-border)' }}
      >
        I&apos;m always open to discussing new projects, creative ideas, or opportunities 
        to be part of your vision. Feel free to reach out through any of the channels below.
      </motion.p>

      <div className="space-y-3 mt-6">
        {contactLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            {...(link.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ x: 10 }}
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-4 p-3 rounded-lg transition-colors group"
          >
            <span className="text-xs w-20" style={{ color: 'var(--crt-blue-dim)' }}>{link.label}</span>
            <span className="transition-colors" style={{ color: 'var(--crt-blue)' }}>
              {link.value}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" style={{ color: 'var(--crt-blue-glow)' }}>
              ▸
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xs mt-8"
        style={{ color: 'var(--crt-blue-dim)' }}
      >
        {/* Response time: Usually within 24 hours */}
      </motion.div>
    </div>
  );
}
