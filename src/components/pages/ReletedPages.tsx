import Image from 'next/image'
import React from 'react'

export default function ReletedPages() {
  return (
    <div className="min-h-screen px-6 py-24 sm:px-12 w-full bg-gradient-to-tr dark:from-background from-foreground from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
    <div className="flex flex-col justify-start md:justify-center items-center">
      <div className="shadow-bottom-search shadow-primary space-y-3 p-3 text-primary dark:text-foreground">
      <h3 className=" md:text-5xl text-3xl font-extralight flex flex-col">
      Related
      <span className="font-bold ml-3 text-5xl md:text-6xl">
      Pages
      </span>
      </h3>
      <p className="font-extralight text-xs text-wrap max-w-[160px] text-neutral-500 dark:text-neutral-200">Viewing a content, and get recommended with other pages</p>
      </div>
    </div>
    <div className="relative flex justify-center items-center">
    <div className="border lg:block hidden border-neutral-600 h-[287.53px] w-[395.8px] top-0 -right-6 1051:w-[80%] absolute 1051:left-24"/>
    <div className=" z-20 lg:absolute left-0 flex justify-center items-center lg:w-[469.98px] lg:h-[326.35px] 1051:w-[40vw] w-[80vw] h-[40vh] sm:w-[60vw] sm:h-[40vh] md:h-[50vh] bg-gradient-to-br dark:from-[#1D1D1D] from-[#F3F3F3] dark:to-[#454545] to-[#D2D2D2] rounded-3xl">
     <p className="text-lg font-extralight text-neutral-500">(Video Preview/Screenshot)</p>
     </div>
    <div className="border lg:block hidden border-neutral-600 h-[287.53px] w-[405.8px] absolute -left-6 bottom-6 1051:w-[80%] 1051:bottom-0"/>
    <div className="w-[131.27px] h-[131.27px] hidden lg:flex justify-center items-center absolute -right-6 1051:right-0 bottom-6 z-20 rounded-3xl">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl"/>
      <Image
        src="/icons/grid-ic.png"
        alt="grid icon"
        width={50}
        height={50}
        className="relative z-10"
      />
    </div>
    </div>
  </div>
  )
}
