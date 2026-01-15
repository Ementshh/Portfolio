"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";

const projects = [
  {
    name: "LabuBoom",
    tech: ["Java", "LibGDX", "SpringBoot"],
    description: "A 2D side-scrolling shooter game featuring custom entity management and physics built with Java and the LibGDX framework. Part of the Object Oriented Programming practicum.",
    link: "https://ement.itch.io/labuboom",
  },
  {
    name: "Enterprise Network Topology Simulation",
    tech: ["Cisco Packet Tracer", "Network Design"],
    description: "A comprehensive Cisco Packet Tracer network simulation implementing VLAN trunking, EtherChannel, and dynamic routing to model a scalable enterprise infrastructure. Part of the Computer Networks practicum.",
    link: "https://drive.google.com/drive/folders/10I5U43iGSoGndG6SQibweRExXj_KBQFI?usp=drive_link",
  },
  {
    name: "CareersMatch AI",
    tech: ["TypeScript", "React", "Next.js", "Supabase"],
    description: "An AI-powered career consultancy app that matches users to jobs based on skills and personality while providing course recommendations to bridge qualification gaps.",
    link: "https://careersmatchai.vercel.app",
  },
  {
    name: "BOS Transparency App",
    tech: ["TypeScript", "React", "Next.js", "Firebase"],
    description: "A web application designed to monitor and visualize the allocation of School Operational Funds (BOS) to ensure financial transparency and accountability.",
    link: "https://bostransparency.vercel.app/",
  },
  {
    name: "Analisa Mikrobioma Tanah Berbasis Machine Learning untuk Menilai Kelayakan Tanah dan Kesehatan Tanaman",
    tech: ["Team Coordination", "Academic Writing", "Machine Learning"],
    description: "A real-time soil analysis system that utilizes biosensors and Deep Learning on an NVIDIA Jetson to evaluate microbiome health and determine optimal crop suitability.",
    link: "https://drive.google.com/file/d/1Y5Qg32dJNyHgJ17HvNzPTK0gkGjtXFas/view?usp=sharing",
  },
  {
    name: "A Comparative Analysis of LSTM and SARIMA for PoE Switch Load Forecasting in Classroom Environments",
    tech: ["Team Coordination", "Academic Writing", "Time Series"],
    description: "A comparative study evaluating the trade-off between predictive accuracy and computational overhead in SARIMA and LSTM models for forecasting Power over Ethernet switch loads.",
    link: "https://drive.google.com/file/d/1cxNiG_ZCkaxMxj9M3HSFfnMDP8M-NQCa/view?usp=sharing",
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
            target="_blank"
            rel="noopener noreferrer"
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
