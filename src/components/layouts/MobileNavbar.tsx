import React from 'react';
import NavItems from './NavItems';

export default function MobileNavbar({
  navItems,
  className,
  setIsActive,
  isActive,
}: {
  className?: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  navItems: { label: string; href: string; isShow?: boolean }[];
}) {
  return (
    <div
      className={`min-h-screen w-full bg-background md:w-[450px] backdrop-blur-sm ${className}`}
    >
      <div className="w-full !h-full">
        <NavItems
          isActive={isActive}
          navItems={navItems}
          className="flex-col"
          setIsActive={setIsActive}
        />
      </div>
    </div>
  );
}
