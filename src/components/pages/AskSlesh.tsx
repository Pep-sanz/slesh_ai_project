import Image from 'next/image'
import React from 'react'

export default function AskSlesh() {
  return (
    <div className="w-full py-24 relative flex flex-col justify-center items-center dark:text-foreground text-primary">
      <div className="bg-grid absolute inset-0 w-full h-full"></div>
      <Image src="/images/zenbook.png" alt="zenbook" width={700} height={500} className="z-10" />
      <div className="text-center space-y-1 p-3 dark:text-foreground text-primary shadow-cyan-500">
      <h3 className="text-3xl font-bold">Ask Slesh</h3>
      <p className="font-extralight text-neutral-500 dark:text-neutral-200 max-w-96">Interactive chat interface to answer your questions about the content/ page you’re at</p>
    </div>
      <button className="bg-gradient-to-r mt-3 from-[#CBEFFF] from-30% to-[#69C3FF] py-3 px-6 z-20 rounded-3xl text-cyan-700">
      Get <span className="font-semibold text-cyan-800">Slesh</span> For Free
      </button>
    </div>
  )
}
