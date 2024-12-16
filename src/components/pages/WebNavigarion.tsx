import Image from 'next/image'
import React from 'react'

export default function WebNavigarion() {
  return (
    <div className="min-h-screen w-full py-24 flex flex-col bg-gradient-to-tl from-background from-85% dark:to-primary/20 to-[#CBEFFF] justify-center items-center relative">
        <Image
        src="/images/blue-ribbed-sphere.png"
        alt="blue ribbed sphere"
        width={250}
        height={250}
        className="absolute top-24 md:top-3"
        />
      <div className="bg-white/30 p-3 dark:bg-white/10 z-10 pointer-events-none backdrop-blur-md rounded-md">
        <div className="flex flex-col justify-center items-center w-[80vw] h-[200px] z-20 md:w-[70vw] md:h-[350px] lg:w-[50vw] lg:h-[60vh] bg-gradient-to-bl dark:from-neutral-950 from-[#F3F3F3] dark:from-50% dark:to-neutral-700 to-[#D2D2D2] rounded-md relative overflow-hidden">
            <Image src="/icons/slesh-ic-gray.png" alt="slesh gray icon" width={150} height={50} /> 
            <p className="text-lg font-extralight text-neutral-500 absolute bottom-10">(Video Preview/Screenshot)</p>
        </div>
      </div>
      <div className="text-center mt-10 space-y-1 shadow-bottom-navigation p-3 dark:text-foreground text-primary shadow-cyan-500">
        <h3 className="text-3xl font-bold">Auto Website Navigation</h3>
        <p className="font-extralight text-neutral-500 dark:text-neutral-200">+ Highlight to answer your questions</p>
      </div>
    </div>
  )
}
