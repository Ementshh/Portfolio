"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Laboratory Assistant",
    company: "Netlab FTUI",
    period: "July 2026 - Present",
    description: "Vice Person in Charge for the International Program Design and Management of Computer Networks practicum. Oversaw laboratory operations, supervised weekly sessions, and designed module materials, assignments, and case studies. Provided direct technical guidance to students during experiments.",
  },
  {
    title: "Head of Human Resources",
    company: "EXERCISE FTUI",
    period: "Jan 2026 - Present",
    description: "Directed end-to-end HR workflows at EXERCISE FTUI, managing recruitment, performance standards, and large-scale engagement events to sustain the quality and alignment of 80+ active members.",
  },
  {
    title: "Human Resource Staff",
    company: "EXERCISE FTUI",
    period: "Jan 2025 - Jan 2026",
    description: "Facilitated a positive organizational culture by managing member relations and orchestrating training programs that were developmental and impactful for professional growth.",
  },
  {
    title: "Marketing Director",
    company: "EXERTION UI",
    period: "2025",
    description: "Directed a national-scale tech and logic competition for high school and university students. Spearheaded a strategic marketing campaign in coordination with division heads, successfully driving participation from hundreds of registrants.",
  },
  {
    title: "Science and Technology Development Staff",
    company: "Ikatan Mahasiswa Elektro FTUI",
    period: "2025",
    description: "Advanced the development of science and technology within the Electrical Engineering Department by curating educational events. Collaborated with stakeholders to execute programs that fostered technical innovation and student engagement.",
  },
  {
    title: "Academic Writing",
    company: "3rd Place Winner of OIM FTUI - PKM RE",
    period: "2025",
    description: "Co-authored the research proposal \"Analisa Mikrobioma Tanah Berbasis Machine Learning untuk Menilai Kelayakan Tanah dan Kesehatan Tanaman.\" Arranged research methods and presented findings to a panel of judges, securing 3rd place.",
  },
  {
    title: "Cybersecurity",
    company: "3rd Place Winner of Capture The Flag - RISTEK Universitas Indonesia",
    period: "2025",
    description: "Secured 3rd place by analyzing and exploiting security vulnerabilities. Specialized in solving Cryptography challenges and authored detailed writeups on the methodology used.",
  },
  {
    title: "Software Development",
    company: "2nd Runner Up of GDGoC UI Hackathon",
    period: "2025",
    description: "Developed a transparency platform to monitor the allocation of School Operational Funds (BOS). Engineered the solution to track financial flows, securing the 2nd Runner Up position.",
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
        {/* Achievements: 3 Awards | Organizations: 3 | Years: 2025-Present */}
      </motion.div>
    </div>
  );
}
