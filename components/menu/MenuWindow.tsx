"use client";

import { ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuWindowProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function MenuWindow({ title, isOpen, children, onClose }: MenuWindowProps) {
  const constraintsRef = useRef(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Drag constraints container */}
          <div ref={constraintsRef} className="absolute inset-0 z-30 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            className="absolute inset-4 md:inset-8 z-30 cursor-move"
          >
            <div className="window-border bg-black/90 backdrop-blur-sm rounded-lg h-full flex flex-col overflow-hidden">
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
              <div className="flex-1 overflow-y-auto p-4 md:p-6 cursor-default" onPointerDown={(e) => e.stopPropagation()}>
                {children}
              </div>

              {/* Window footer */}
              <div className="px-4 py-2 border-t border-crt-blue/30 text-crt-blue-dim text-xs">
                <span className="animate-pulse">▮</span> SYSTEM READY
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
