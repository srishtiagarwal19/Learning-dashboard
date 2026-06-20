"use client";

import { motion } from "framer-motion";

interface SettingsCardProps {
  title: string;
  value: string;
}

export default function SettingsCard({
  title,
  value,
}: SettingsCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      className="
        bg-zinc-900
        p-6
        rounded-3xl
        border
        border-zinc-800
      "
    >
      <h3 className="text-zinc-400 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </motion.div>
  );
}