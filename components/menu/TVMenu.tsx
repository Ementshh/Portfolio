"use client";

import { motion } from "framer-motion";
import { useAudio } from "../audio/AudioContext";
import clsx from "clsx";

export type MenuSection = "home" | "about" | "experience" | "projects" | "contact";

interface TVMenuProps {
  activeSection: MenuSection;
  onSelect: (section: MenuSection) => void;
}

const menuItems: { id: MenuSection; label: string }[] = [
  { id: "about", label: "ABOUT ME" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function TVMenu({ activeSection, onSelect }: TVMenuProps) {
  const { playClick, playHover } = useAudio();

  const handleClick = (section: MenuSection) => {
    playClick();
    onSelect(section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="window-border bg-black/80 backdrop-blur-sm rounded-lg p-2 md:p-4">
        {/* Menu header */}
        <div className="text-crt-blue-dim text-xs md:text-sm mb-3 border-b border-crt-blue/30 pb-2 crt-text">
          ▸ MENU
        </div>

        {/* Menu items */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              onMouseEnter={playHover}
              onClick={() => handleClick(item.id)}
              className={clsx(
                "text-left px-3 py-2 text-sm md:text-lg transition-all menu-item-hover rounded",
                activeSection === item.id
                  ? "text-crt-blue-glow bg-crt-blue/10 crt-text"
                  : "text-crt-blue hover:text-crt-blue-glow hover:bg-crt-blue/5"
              )}
            >
              <span className="mr-2">
                {activeSection === item.id ? "▸" : " "}
              </span>
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Back to home */}
        {activeSection !== "home" && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onMouseEnter={playHover}
            onClick={() => handleClick("home")}
            className="mt-4 pt-3 border-t border-crt-blue/30 text-crt-blue-dim hover:text-crt-blue text-xs md:text-sm w-full text-left px-3 menu-item-hover"
          >
            ◂ BACK
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
