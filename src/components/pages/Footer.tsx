import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className="relative w-full h-[300px] flex justify-center items-end">
      <Image src="/images/blue-ribbed-sphere-lg.png" alt="blue ribbed sphere" width={500} height={500} className="" />
      <div className="backdrop-blur-sm w-full h-[50%] md:h-[60%] z-20 absolute bottom-0 bg-white/30 dark:bg-black/30"></div>
    </div>
  )
}
