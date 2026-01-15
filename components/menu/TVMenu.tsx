"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";
import clsx from "clsx";

export type MenuSection = "home" | "about" | "experience" | "projects" | "contact";

interface TVMenuProps {
  activeSection: MenuSection;
  onSelect: (section: MenuSection) => void;
  centered?: boolean;
}

const menuItems: { id: MenuSection; label: string }[] = [
  { id: "about", label: "ABOUT ME" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function TVMenu({ activeSection, onSelect, centered = false }: TVMenuProps) {
  const { playClick, playHover } = useAudio();

  const handleClick = (section: MenuSection) => {
    playClick();
    onSelect(section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: centered ? 20 : 0, x: centered ? 0 : -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className={clsx(
        "z-40",
        centered
          ? "absolute inset-x-0 top-[45%] flex justify-center"
          : "absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
      )}
    >
      <div className="window-border backdrop-blur-sm rounded-lg p-4 md:p-6 w-[280px] md:w-[420px]" style={{ backgroundColor: 'var(--window-bg)' }}>
        {/* Menu header */}
        <div className="text-sm md:text-base mb-4 border-b pb-3 crt-text text-center" style={{ color: 'var(--crt-blue-dim)', borderColor: 'var(--window-border)' }}>
          ▸ MENU
        </div>

        {/* Menu items */}
        <nav className="grid grid-cols-2 gap-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              onMouseEnter={playHover}
              onClick={() => handleClick(item.id)}
              className={clsx(
                "text-left px-4 py-3 text-base md:text-xl transition-all menu-item-hover rounded",
                activeSection === item.id
                  ? "crt-text"
                  : ""
              )}
              style={{ 
                color: activeSection === item.id ? 'var(--crt-blue-glow)' : 'var(--crt-blue)',
                backgroundColor: activeSection === item.id ? 'rgba(0, 170, 255, 0.1)' : 'transparent'
              }}
            >
              <span className="mr-3">▸</span>
              {item.label}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
