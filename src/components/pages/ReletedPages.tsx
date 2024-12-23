import Image from 'next/image';
import React from 'react';

export default function ReletedPages() {
  return (
    <div className="xl:min-h-screen lg:h-[46vh] px-6 py-24 sm:px-12 w-full bg-gradient-to-tr from-background from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-rows-2 lg:grid-rows-1 grid-flow-col auto-cols-auto gap-6 lg:grid-cols-2">
      <div className="flex justify-center lg:justify-start xl:justify-center items-center order-2 lg:order-1">
        <div className="shadow-bottom-search shadow-primary space-y-6 p-3 text-primary dark:text-foreground">
          <h3 className=" md:text-5xl text-3xl font-extralight flex flex-col">
            Smart
            <span className="font-bold text-primary italic ml-3 text-5xl lg:text-5xl xl:text-6xl">
              Suggestions
            </span>
          </h3>
          <p className="font-extralight text-wrap max-w-[300px] text-neutral-500 dark:text-neutral-200">
            Get quick access to relevant follow-up pages, anticipating your next
            move
          </p>
        </div>
      </div>
      <div className="relative order-1 lg:order-2 flex justify-center items-center">
        <div className="border lg:block hidden border-neutral-600 h-[287.53px] w-[395.8px] top-0 -right-6 1051:w-[80%] absolute 1051:left-24" />
        <div className=" z-20 lg:absolute -left-14 lg:left-0 flex justify-center items-center lg:w-[469.98px] lg:h-[326.35px] 1051:w-[40vw] w-[80vw] xl:h-[426.35px] h-[30vh] sm:w-[70vw] sm:h-[300px] md:h-[341px]  bg-gradient-to-br dark:from-[#1D1D1D] from-[#F3F3F3] dark:to-[#454545] to-[#D2D2D2] rounded-3xl">
          <p className="text-lg font-extralight text-neutral-500">
            (Video Preview/Screenshot)
          </p>
        </div>
        <div className="border lg:block hidden border-neutral-600 h-[287.53px] w-[405.8px] absolute -left-20 bottom-6 xl:-left-6 xl:bottom-6 1051:w-[80%] 1051:bottom-0" />
        <div className="w-[131.27px] h-[131.27px] hidden lg:flex justify-center items-center absolute -right-6 1051:right-0 bottom-6 z-20 rounded-3xl">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl" />
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
  );
}
