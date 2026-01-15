"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";
import { MenuSection } from "../menu/TVMenu";

interface HomeScreenProps {
  onNavigate: (section: MenuSection) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const { playHover, playClick } = useAudio();

  const handleNavigate = (section: MenuSection) => {
    playClick();
    onNavigate(section);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-crt-blue crt-text mb-4">
          DEVELOPER
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-crt-blue to-transparent"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-crt-blue-dim text-sm md:text-base mb-8 max-w-md"
      >
        Building digital experiences with clean code and creative solutions
      </motion.p>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-crt-blue-dim text-xs md:text-sm"
      >
        <span className="animate-pulse">▸</span> Select an option from the menu
      </motion.div>

      {/* Quick navigation for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-8 grid grid-cols-2 gap-3 md:hidden"
      >
        {[
          { id: "about" as MenuSection, label: "ABOUT" },
          { id: "experience" as MenuSection, label: "EXP" },
          { id: "projects" as MenuSection, label: "PROJECTS" },
          { id: "contact" as MenuSection, label: "CONTACT" },
        ].map((item) => (
          <button
            key={item.id}
            onMouseEnter={playHover}
            onClick={() => handleNavigate(item.id)}
            className="px-4 py-2 text-sm border border-crt-blue/50 rounded text-crt-blue hover:bg-crt-blue/10 hover:border-crt-blue transition-colors"
          >
            {item.label}
          </button>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 text-crt-blue-dim text-xs hidden md:block"
      >
        <div>SYS: READY</div>
        <div>MEM: OK</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 right-4 text-crt-blue-dim text-xs hidden md:block text-right"
      >
        <div>v1.0.0</div>
        <div>2026</div>
      </motion.div>
    </div>
  );
}
