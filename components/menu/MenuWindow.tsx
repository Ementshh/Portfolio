"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuWindowProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  offset?: { x: number; y: number };
}

export default function MenuWindow({ title, isOpen, children, onClose, offset = { x: 0, y: 0 } }: MenuWindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 + offset.y, x: offset.x }}
            animate={{ opacity: 1, scale: 1, y: offset.y, x: offset.x }}
            exit={{ opacity: 0, scale: 0.9, y: 20 + offset.y, x: offset.x }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            drag
            dragMomentum={false}
            className="cursor-move max-w-[90vw] md:max-w-3xl max-h-[80vh] w-auto pointer-events-auto"
          >
            <div className="window-border backdrop-blur-sm rounded-lg flex flex-col overflow-hidden max-h-[80vh]" style={{ backgroundColor: 'var(--window-bg)' }}>
              {/* Window title bar - drag handle */}
              <div className="flex items-center justify-between px-4 py-2 border-b cursor-move" style={{ borderColor: 'var(--window-border)', backgroundColor: 'var(--title-bar-bg)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm crt-text" style={{ color: 'var(--crt-blue-glow)' }}>■</span>
                  <h2 className="font-bold text-sm md:text-base crt-text select-none" style={{ color: 'var(--crt-blue)' }}>{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="transition-colors text-xl leading-none px-2 cursor-pointer"
                  style={{ color: 'var(--crt-blue)' }}
                >
                  ×
                </button>
              </div>

              {/* Window content */}
              <div className="overflow-y-auto p-4 md:p-6 cursor-text select-text" onPointerDown={(e) => e.stopPropagation()}>
                {children}
              </div>

              {/* Window footer */}
              <div className="px-4 py-2 border-t text-xs" style={{ borderColor: 'var(--window-border)', color: 'var(--crt-blue-dim)' }}>
                <span className="animate-pulse">▮</span> SYSTEM READY
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
