"use client";
import { Trophy } from "lucide-react";
interface AchievementCardProps {
  title: string;
  description: string;
  unlocked: boolean;
}

export default function AchievementCard({
  title,
  description,
  unlocked,
}: AchievementCardProps) {
  return (
    <div className="
bg-zinc-900
p-8
rounded-3xl
border border-zinc-800
hover:scale-105
transition-all
duration-300
">
        <Trophy
      size={40}
      className={unlocked ? "text-yellow-400 mb-4" : "text-zinc-500 mb-4"}
    />

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="text-zinc-400 mt-2">
        {description}
      </p>

      <span
        className={`mt-4 inline-block px-4 py-2 rounded-full ${
          unlocked
            ? "bg-green-500/20 text-green-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {unlocked ? "Unlocked" : "Locked"}
      </span>
    </div>
  );
}