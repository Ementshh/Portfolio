"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface MenuWindowProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  offset?: { x: number; y: number };
  zIndex?: number;
  onWindowClick?: () => void;
}

export default function MenuWindow({ title, isOpen, children, onClose, offset = { x: 0, y: 0 }, zIndex = 50, onWindowClick }: MenuWindowProps) {
  const dragControls = useDragControls();
  const isMobile = useIsMobile();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={
          isMobile
            ? "fixed inset-0 z-50 flex flex-col pt-16 pointer-events-none"
            : "fixed inset-0 flex items-center justify-center pointer-events-none"
        }
        style={{ zIndex }}
        >
          <motion.div
            initial={isMobile 
              ? { opacity: 0, y: 100 }
              : { opacity: 0, scale: 0.9, y: 20 + offset.y, x: offset.x }
            }
            animate={isMobile
              ? { opacity: 1, y: 0 }
              : { opacity: 1, scale: 1, y: offset.y, x: offset.x }
            }
            exit={isMobile
              ? { opacity: 0, y: 100 }
              : { opacity: 0, scale: 0.9, y: 20 + offset.y, x: offset.x }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
            drag={!isMobile}
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            className={
              isMobile
                ? "w-full h-full pointer-events-auto"
                : "max-w-[90vw] md:max-w-3xl max-h-[80vh] w-auto pointer-events-auto"
            }
            onMouseDown={onWindowClick}
          >
            <div 
              className={
                isMobile
                  ? "window-border rounded-t-lg flex flex-col overflow-hidden h-full"
                  : "window-border backdrop-blur-sm rounded-lg flex flex-col overflow-hidden max-h-[80vh]"
              }
              style={{ backgroundColor: 'var(--window-bg)' }}
            >
              {/* Window title bar - drag handle on desktop only */}
              <div 
                className={`flex items-center justify-between px-4 py-2 border-b ${isMobile ? '' : 'cursor-move'}`}
                style={{ borderColor: 'var(--window-border)', backgroundColor: 'var(--title-bar-bg)' }}
                onPointerDown={isMobile ? undefined : (e) => dragControls.start(e)}
              >
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
              <div className="overflow-y-auto p-4 md:p-6 cursor-text select-text">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
