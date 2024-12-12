"use client"

import Image from "next/image";

export default function Home() {
  return (
   <div className="h-screen w-full">
    <div className="w-full h-full flex flex-col justify-center items-center dark:text-foreground text-primary  bg-gradient-to-tr dark:from-background from-foreground dark:from-80% from-85% dark:to-primary/30 to-[#CBEFFF]">
      <div className="bg-grid absolute inset-0 w-full h-full"></div>
      <h5 className="font-light text-center text-[62px] z-20 flex flex-col italic">
      Lorem Ipsum dolor sit amet 
      <span className="font-semibold">lorem dolor <span className="bg-gradient-to-r dark:from-primary from-background dark:to-90% to-50% to-primary dark:to-foreground bg-clip-text text-transparent">ipsum amet sit.</span></span>
      </h5>
      <p className="text-center max-w-[800px] z-20 mt-10 text-xl italic font-light dark:text-foreground text-neutral-700">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <button className="bg-gradient-to-r from-[#CBEFFF] from-30% to-[#69C3FF] mt-10 py-3 px-6 z-20 rounded-3xl text-[#004879]">
      Get <span className="font-bold">Slesh</span> For Free
      </button>
    </div>
    {/* smart search */}
    <div className="min-h-screen w-full bg-gradient-to-bl dark:from-background from-foreground from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="shadow-bottom-search p-3 w-fit space-y-3 text-primary dark:text-white shadow-primary/50">
        <h3 className=" text-5xl font-thin flex flex-col">
        Search
        <span className="font-bold ml-3 text-6xl">
          Smarter
        </span>
        </h3>
        <p className="font-extralight text-center text-neutral-500 dark:text-neutral-200">X Search, Gmail Search</p>
        </div>
      </div>
      <div className="relative z-30 flex justify-center items-center">
        <div className="bg-grid absolute inset-0 w-full h-full -z-10"></div>
      <Image src="/images/macbook-air.png" alt="macbook air" width={550} height={550} className="hidden dark:block" />
      <Image src="/images/macbook-air-light.png" alt="macbook air" width={550} height={550} className="block dark:hidden" />
      </div> 
    </div>
    {/* Auto Website Navigation */}
      <div className="min-h-screen w-full py-24 flex flex-col bg-gradient-to-tl dark:from-background from-foreground from-85% dark:to-primary/20 to-[#CBEFFF] justify-center items-center relative">
    <Image
      src="/images/blue-ribbed-sphere.png"
      alt="blue ribbed sphere"
      width={250}
      height={250}
      className="absolute top-3"
    />
      <div className="bg-white/30 p-3 dark:bg-white/10 z-10 pointer-events-none backdrop-blur-md rounded-md">
      <div className="flex flex-col justify-center items-center w-[50vw] h-[60vh] bg-gradient-to-bl dark:from-neutral-950 from-[#F3F3F3] dark:from-50% dark:to-neutral-700 to-[#D2D2D2] rounded-md relative overflow-hidden">
        <Image src="/icons/slesh-ic-gray.png" alt="slesh gray icon" width={150} height={50} /> 
        <p className="text-lg font-extralight text-neutral-500 absolute bottom-10">(Video Preview/Screenshot)</p>
      </div>
      </div>
    <div className="text-center mt-10 space-y-1 shadow-bottom-navigation p-3 dark:text-foreground text-primary shadow-cyan-500">
      <h3 className="text-3xl font-bold">Auto Website Navigation</h3>
      <p className="font-extralight text-neutral-500 dark:text-neutral-200">+ Highlight to answer your questions</p>
    </div>
  </div>

    {/* quick action */}
    <div className="min-h-screen w-full pt-14 grid grid-cols-2 bg-gradient-to-br dark:from-background from-foreground from-85% dark:to-primary/20 to-[#CBEFFF]">
      <div className="relative min-h-full w-[50vw] ml-24">
      <div className=" z-20 absolute left-5 top-0 flex justify-center items-center w-[585px] h-[341px] bg-gradient-to-br dark:from-[#1D1D1D] from-[#F3F3F3] dark:to-[#454545] to-[#D2D2D2] rounded-3xl">
       <p className="text-lg font-extralight text-neutral-500">(Video Preview/Screenshot)</p>
       </div>
       <div className="border border-neutral-600 h-[312px] w-[538px] absolute left-56 top-32">
      <Image src="/images/blue-ribbed-sphere.png" alt="blue ribbed sphere" width={250} height={250} className="absolute top-10 left-60 rotate-180" />
       </div>
       <div className="w-[351px] h-[352px] rounded-full border-2 border-neutral-600 absolute left-36 top-14">
       <Image src="/icons/cursor-ic.png" alt="cursor icon" width={53} height={53} className="absolute bottom-0 right-10"/>
       </div>
       <div className="w-[254px] h-[254px] flex justify-center items-center absolute -right-20 bottom-10 rounded-r-3xl rounded-b-3xl">
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
      <div className="flex flex-col justify-center items-end mr-32 text-primary dark:text-foreground">
        <h3 className="flex flex-col text-end text-5xl font-thin">Quick <span className="text-6xl font-semibold">Action</span></h3>
        <p className="text-lg flex flex-col text-end font-extralight mt-4 text-neutral-500 dark:text-neutral-200">Do actions quickly, <span>shortcuts across the web</span></p>
      </div>
    </div>
    {/* relted pages */}
    <div className="min-h-screen w-full bg-gradient-to-tr dark:from-background from-foreground from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="shadow-bottom-search shadow-primary space-y-3 p-3 text-primary dark:text-foreground">
        <h3 className=" text-5xl font-extralight flex flex-col">
        Related
        <span className="font-bold ml-3 text-6xl">
        Pages
        </span>
        </h3>
        <p className="font-extralight text-xs text-wrap max-w-[160px] text-neutral-500 dark:text-neutral-200">Viewing a content, and get recommended with other pages</p>
        </div>
      </div>
      <div className="relative bg-sky-00">
      <div className="border border-neutral-600 h-[287.53px] w-[495.8px] absolute left-36 top-24"/>
      <div className=" z-20 absolute left-6 top-32 flex justify-center items-center w-[569.98px] h-[426.35px] bg-gradient-to-br dark:from-[#1D1D1D] from-[#F3F3F3] dark:to-[#454545] to-[#D2D2D2] rounded-3xl">
       <p className="text-lg font-extralight text-neutral-500">(Video Preview/Screenshot)</p>
       </div>
      <div className="border border-neutral-600 h-[287.53px] w-[495.8px] absolute left-10 bottom-28"/>
      <div className="w-[131.27px] h-[131.27px] flex justify-center items-center absolute right-20 bottom-24 z-20 rounded-3xl">
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
    {/* Ask Slesh */}
    <div className="w-full py-24 relative flex flex-col justify-center items-center dark:text-foreground text-primary  bg-foreground dark:bg-background">
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
    <div className="relative w-full h-[300px] dark:bg-background bg-foreground flex justify-center items-center">
    <Image src="/images/blue-ribbed-sphere-lg.png" alt="blue ribbed sphere" width={500} height={500} className="" />
      <div className="backdrop-blur-sm w-full h-[60%] z-20 absolute bottom-0 bg-white/30 dark:bg-black/30"></div>
    </div>
   </div>
  );
}
