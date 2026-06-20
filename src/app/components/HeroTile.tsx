"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-10
        bg-gradient-to-r
        from-purple-600
        via-blue-500
        to-cyan-500
        shadow-[0_0_40px_rgba(59,130,246,0.35)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-4 text-xl text-white/90">
          Continue your learning journey.
        </p>

        <div className="mt-8">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-white/20
              backdrop-blur-md
              border
              border-white/20
              text-white
              text-lg
            "
          >
            🔥 15 Day Streak
          </span>
        </div>
      </div>
    </motion.div>
  );
}