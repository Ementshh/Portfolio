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
            <div className="window-border bg-black/90 backdrop-blur-sm rounded-lg flex flex-col overflow-hidden max-h-[80vh]">
              {/* Window title bar - drag handle */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-crt-blue/30 bg-crt-blue/5 cursor-move">
                <div className="flex items-center gap-2">
                  <span className="text-crt-blue-glow text-sm crt-text">■</span>
                  <h2 className="text-crt-blue font-bold text-sm md:text-base crt-text select-none">{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="text-crt-blue hover:text-crt-blue-glow transition-colors text-xl leading-none px-2 cursor-pointer"
                >
                  ×
                </button>
              </div>

              {/* Window content */}
              <div className="overflow-y-auto p-4 md:p-6 cursor-default" onPointerDown={(e) => e.stopPropagation()}>
                {children}
              </div>

              {/* Window footer */}
              <div className="px-4 py-2 border-t border-crt-blue/30 text-crt-blue-dim text-xs">
                <span className="animate-pulse">▮</span> SYSTEM READY
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
