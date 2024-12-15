"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import MobileNavbar from './MobileNavbar'

export default function Navbar({className}: {className?: string}) {
  const [isActive, setIsActive]=useState(false)

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`flex justify-between items-center backdrop-blur-sm lg:px-[130px] px-6 sm:px-10 md:px-12 w-full h-20 fixed top-0 left-0 right-0 z-50 ${className}`}>
        <Link href="/" className='flex gap-2'>
            <Image src="/icons/slesh.png" alt="slesh Logo" width={43} height={43} />
            <span className='text-xl mt-1 dark:text-foreground text-primary'>Slesh AI</span>
        </Link>
        <NavItems className='md:flex hidden' />
        <div onClick={handleClick} className={`h-[20px] md:hidden flex flex-col justify-between items-center cursor-pointer`}>
            <span
              className={`w-[28px] h-[4px] bg-background dark:bg-foreground block rounded ${isActive ? " origin-top-left rotate-45 translate-x-1 -translate-y-[1px] transition-all duration-300 ease-in " : "rotate-0 transition-all duration-300 ease-out "}`}
            ></span>
            <span className={`w-[28px] h-[4px] bg-background dark:bg-foreground block rounded ${isActive ? " opacity-0 transition-all duration-300 ease-in " : "opacity-100 ease-out duration-300"}`} />
            <span
              className={`w-[28px] h-[4px] bg-background dark:bg-foreground block rounded ${
                isActive ? " origin-bottom-left -rotate-45 translate-x-1 translate-y-[1px] transition-all duration-300 ease-in " : " rotate-0 transition-all ease-out duration-300 "
              }`}
            ></span>
          </div>
        <MobileNavbar setIsActive={setIsActive} className={`absolute md:hidden top-0 right-0 sm:!w-[50vw] h-screen flex flex-col gap-4 bg-bcPrimary pt-20 -z-50 ${
              isActive ? "translate-x-0 opacity-100 transition-all duration-300 ease-in " : "transition-all duration-300 ease-out opacity-0 translate-x-full"
            }`}/>
    </div>
  )
}
