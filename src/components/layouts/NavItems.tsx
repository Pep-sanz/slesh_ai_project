"use client";

import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItems() {
  const pathname = usePathname(); // Mengambil path aktif

  return (
    <div className="flex gap-6 px-6">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href; // Cek apakah path aktif

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg font-medium transition-colors duration-200 ${
              isActive
                ? "dark:text-white text-primary"
                : "text-neutral-500 hover:dark:text-white hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
