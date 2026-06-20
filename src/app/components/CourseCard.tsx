"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Server,
  Rocket,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  icon: string;
}

export default function CourseCard({
  title,
  progress,
  icon,
}: CourseCardProps) {
  const icons = {
    Code2,
    Brain,
    Server,
    Rocket,
  };

  const Icon =
    icons[icon as keyof typeof icons] || Code2;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-zinc-900
        p-8
        border
        border-zinc-800
        hover:border-blue-500/50
        hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/10
          via-purple-500/5
          to-cyan-500/10
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <div className="mb-6">
          <Icon
            size={42}
            className="text-blue-400"
          />
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">
          {title}
        </h3>

        <div className="w-full h-3 bg-zinc-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-purple-500
              shadow-[0_0_12px_rgba(59,130,246,0.6)]
            "
          />
        </div>

        <p className="mt-4 text-lg text-zinc-300">
          {progress}% Complete
        </p>
      </div>
    </motion.article>
  );
}