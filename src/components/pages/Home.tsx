"use client"

import { useTheme } from 'next-themes';
import React from 'react'

export default function Home() {
  const { theme } = useTheme();

  console.log(theme)
  return (
    <div className="md:min-h-screen relative h-full flex flex-col md:justify-center px-6 sm:px-12 py-24 items-center dark:text-foreground text-primary bg-gradient-to-tr from-background dark:from-80% from-85% dark:to-primary/30 to-[#CBEFFF]">
    <div className="bg-grid absolute inset-0 w-full h-full"></div>
    <h5 className="font-light text-center text-[24px] sm:text-[32px] md:text-[44px] lg:text-[62px] z-20 flex flex-col italic">
    Lorem Ipsum dolor sit amet 
    <span className="font-semibold">lorem dolor <span className="bg-gradient-to-r from-foreground dark:to-90% to-50% to-primary bg-clip-text text-transparent">ipsum amet sit.</span></span>
    </h5>
    <p className="text-center max-w-[800px] z-20 mt-10 text-base md:text-xl italic font-light dark:text-foreground text-neutral-700">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    <button className="bg-gradient-to-r from-[#CBEFFF] from-30% to-[#69C3FF] mt-10 py-3 px-6 z-20 rounded-3xl text-[#004879]">
    Get <span className="font-bold">Slesh</span> For Free
    </button>
  </div>
  )
}
