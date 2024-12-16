import Image from 'next/image'
import React from 'react'

export default function QuickAction() {
  return (
    <div className="min-h-screen w-full py-24 px-6 sm:px-12 lg:px-32 bg-gradient-to-br from-background from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div className="lg:relative min-h-full lg:w-[50vw] flex justify-center items-center">
      <div className=" z-20 lg:absolute left-5 top-0 flex justify-center items-center w-[80vw] sm:w-[70vw] lg:w-[585px] h-[40vh] sm:h-[50vh] lg:h-[341px] md:h-[50vh] bg-gradient-to-br dark:from-[#1D1D1D] from-[#F3F3F3] dark:to-[#454545] to-[#D2D2D2] rounded-3xl">
       <p className="md:text-lg text-sm font-extralight text-neutral-500">(Video Preview/Screenshot)</p>
       </div>
       <div className="border lg:block hidden border-neutral-600 h-[312px] w-[538px] absolute left-56 top-32">
      <Image src="/images/blue-ribbed-sphere.png" alt="blue ribbed sphere" width={250} height={250} className="absolute top-10 left-60 rotate-180" />
       </div>
       <div className="w-[351px] h-[352px] rounded-full border-2 border-neutral-600 absolute left-36 top-14 lg:block hidden">
       <Image src="/icons/cursor-ic.png" alt="cursor icon" width={53} height={53} className="absolute bottom-0 right-10"/>
       </div>
       <div className="w-[254px] h-[254px] lg:flex hidden justify-center items-center absolute -right-20 -bottom-24 rounded-r-3xl rounded-b-3xl">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-r-3xl rounded-b-3xl"/>
        <Image
          src="/icons/slesh-ic.png"
          alt="slesh icon"
          width={124}
          height={124}
          className="relative z-10"
        />
      </div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center md:items-end mt-10 text-primary dark:text-foreground">
        <h3 className="flex flex-col md:text-end text-3xl md:text-5xl font-thin">Quick <span className="md:text-6xl text-5xl font-semibold">Action</span></h3>
        <p className="md:text-lg text-sm flex flex-col md:text-end font-extralight mt-4 text-neutral-500 dark:text-neutral-200">Do actions quickly, <span>shortcuts across the web</span></p>
      </div>
    </div>
  )
}
