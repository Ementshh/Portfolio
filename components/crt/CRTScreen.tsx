"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CRTScreenProps {
  children: ReactNode;
}

export default function CRTScreen({ children }: CRTScreenProps) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Simulate TV turning on
    const timer = setTimeout(() => setIsOn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black rounded-[10px] overflow-hidden w-full aspect-[4/3] md:w-[700px] lg:w-[800px]">
      <AnimatePresence>
        {isOn && (
          <motion.div
            initial={{ scaleY: 0.01, filter: "brightness(10)" }}
            animate={{ scaleY: 1, filter: "brightness(1)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 bg-tv-dark"
          >
            {/* Main content area */}
            <div className="relative w-full h-full crt-glow animate-glow-pulse">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen curvature overlay */}
      <div className="absolute inset-0 crt-curve pointer-events-none z-20" />
    </div>
  );
}
