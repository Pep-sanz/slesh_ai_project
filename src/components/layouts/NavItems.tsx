'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavItems({
  navItems,
  className,
  setIsActive,
  isActive,
}: {
  className?: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  navItems: {
    label: string;
    href: string;
    isShow?: boolean;
  }[];
}) {
  const pathname = usePathname();
  return (
    <div className={`flex gap-6 px-6 ${className}`}>
      {navItems.map((item, i) => {
        const isActivePath = pathname === item.href;

        return (
          <Link
            key={i}
            href={item.href}
            onClick={() => setIsActive(!isActive)}
            className={`text-lg font-medium transition-colors duration-200 ${
              isActivePath
                ? 'text-primary'
                : 'text-neutral-500 hover:dark:text-white hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
