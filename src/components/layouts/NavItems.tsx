"use client";

import { NAV_ITEMS } from "@/constants";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NavItems({className, setIsActive}: {className?:string, setIsActive?: any}) {
  const pathname = usePathname(); // Mengambil path aktif
  const {setTheme, theme }=useTheme()
  return (
    <div className={`flex gap-6 px-6 ${className}`}>
      {NAV_ITEMS.map((item) => {
        const isActivePath = pathname === item.href; // Cek apakah path aktif

        return (
          <>
          <Link
            key={item.href}
            href={item.href}
            onClick={()=> setIsActive(false)}
            className={`text-lg font-medium transition-colors duration-200 ${
              isActivePath
                ? "dark:text-white text-primary"
                : "text-neutral-500 hover:dark:text-white hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
          </>
        );
      })}
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")} className="bg-cyan-500 p-1 rounded-md max-w-28 text-black ">{theme === "light" ? "Dark Mode": "light Mode" }</button>
    </div>
  );
}
