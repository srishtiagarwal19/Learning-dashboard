"use client";

import { motion } from "framer-motion";

interface Activity {
  id: string;
  day: string;
  value: number;
}

export default function ActivityTile({
  data,
}: {
  data: Activity[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-zinc-900
        rounded-3xl
        p-8
        border
        border-zinc-800
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Weekly Activity
      </h2>

      <div className="flex items-end gap-3 h-40">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center flex-1"
          >
            <motion.div
              initial={{ height: 0 }}
             animate={{
  scaleY: item.value / 100,
}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              style={{
  height: `${item.value}%`,
}}
className="
  w-full
  rounded-lg
  bg-gradient-to-t
  from-green-500
  to-emerald-400
  min-h-[20px]
"
            />

            <span className="mt-2 text-sm text-zinc-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-zinc-400">
        +18% compared to last week
      </p>
    </motion.div>
  );
}