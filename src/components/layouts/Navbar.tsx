"use client"

import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const {setTheme, theme }=useTheme()

  return (
    <div className='flex justify-between items-center backdrop-blur-sm px-[230px] w-full h-20 fixed top-0 left-0 right-0 z-50'>
        <Link href="/" className='flex gap-2'>
            <Image src="/icons/slesh.png" alt="slesh Logo" width={43} height={43} />
            <span className='text-xl mt-1 dark:text-foreground text-primary'>Slesh AI</span>
        </Link>
        <NavItems />
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")} className="bg-cyan-500 p-2 rounded-md text-black ">{theme === "light" ? "Dark Mode": "light Mode" }</button>
    </div>
  )
}
