"use client";

import Link from "next/link";
import {
  Home,
  Trophy,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
        md:hidden
        fixed
        bottom-0
        left-0
        right-0
        bg-zinc-950
        border-t
        border-zinc-800
        flex
        justify-around
        py-4
        z-50
      "
    >
      <Link href="/">
        <Home />
      </Link>

      <Link href="/achievements">
        <Trophy />
      </Link>

      <Link href="/settings">
        <Settings />
      </Link>
    </nav>
  );
}