import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { LuSun } from 'react-icons/lu';

export default function AskSlesh() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full py-24 relative flex flex-col justify-center items-center dark:text-foreground text-primary">
      <div className="bg-grid absolute inset-0 w-full h-full"></div>
      <Image
        src="/images/zenbook.png"
        alt="zenbook"
        width={700}
        height={500}
        className="z-10"
      />
      <div className="text-center space-y-1 p-3 dark:text-foreground text-primary shadow-cyan-500">
        <h3 className="text-3xl font-bold">Ask Slesh</h3>
        <p className="font-extralight text-neutral-500 dark:text-neutral-200 max-w-96">
          Get instant answers anywhere
        </p>
      </div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-gradient-to-r from-white to-primary shadow-md text-black p-3 z-20 rounded-xl w-fit mt-32 "
      >
        {theme === 'light' ? <FaMoon size={20} /> : <LuSun size={20} />}
      </button>
    </div>
  );
}
