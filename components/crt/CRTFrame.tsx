"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CRTFrameProps {
  children: ReactNode;
}

export default function CRTFrame({ children }: CRTFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="tv-frame rounded-[40px] p-6 md:p-10 relative"
    >
      {/* TV brand label */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 text-gray-500 text-sm tracking-widest">
        PORTFOLIO
      </div>

      {/* Screen bezel */}
      <div className="tv-bezel rounded-[20px] p-3 md:p-4">
        {children}
      </div>

      {/* TV Controls at bottom */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Decorative speaker grille */}
        <div className="hidden md:flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-20 h-1 bg-gray-700 rounded-full" />
          ))}
        </div>

        {/* Decorative knobs */}
        <div className="flex gap-4">
          <div className="tv-knob w-8 h-8 rounded-full border-2 border-gray-600" />
          <div className="tv-knob w-8 h-8 rounded-full border-2 border-gray-600" />
          <div className="tv-knob w-8 h-8 rounded-full border-2 border-gray-600">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Decorative speaker grille */}
        <div className="hidden md:flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-20 h-1 bg-gray-700 rounded-full" />
          ))}
        </div>
      </div>

      {/* TV feet/stand */}
      <div className="flex justify-center gap-40 mt-4">
        <div className="w-16 h-3 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg" />
        <div className="w-16 h-3 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg" />
      </div>
    </motion.div>
  );
}
