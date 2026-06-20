"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Trophy,
  Settings,
  BookOpen,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      icon: Home,
      label: "Dashboard",
    },
    {
      href: "/achievements",
      icon: Trophy,
      label: "Achievements",
    },
    {
      href: "/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <nav
      className="
        hidden
        md:flex
        w-24
        min-h-screen
        bg-zinc-950
        border-r
        border-zinc-800
        flex-col
        items-center
        py-8
      "
    >
      {/* Logo */}
      <div className="mb-10">
        <BookOpen
          size={34}
          className="text-blue-400"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                p-4
                rounded-2xl
                overflow-hidden
              "
            >
              {active && (
                <motion.div
                  layoutId="sidebar-highlight"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    absolute
                    inset-0
                    bg-zinc-800
                    rounded-2xl
                  "
                />
              )}

              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                className="
                  relative
                  z-10
                "
              >
                <Icon
                  size={30}
                  className={
                    active
                      ? "text-blue-400"
                      : "text-zinc-400"
                  }
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}