"use client";

import { motion } from "framer-motion";

export default function HomeScreen() {
  return (
    <div className="h-full flex flex-col items-center text-center px-4 md:px-8 pt-24 md:pt-32">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-crt-blue crt-text mb-2">
          Hi! I&apos;m Clement
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-crt-blue-dim mb-4"
        >
          Computer Engineering Student
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-crt-blue to-transparent"
        />
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
