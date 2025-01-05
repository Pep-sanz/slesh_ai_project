import Image from 'next/image';
import React from 'react';

export default function WebNavigarion() {
  return (
    <div className="xl:min-h-screen h-[80vh] lg:h-[60vh] w-full pt-24 md:pb-24 flex flex-col bg-gradient-to-tl from-background from-85% dark:to-primary/20 to-[#CBEFFF] justify-center items-center relative">
      <Image
        src="/images/blue-ribbed-sphere.png"
        alt="blue ribbed sphere"
        width={250}
        height={250}
        className="absolute top-32 md:top-16 xl:top-6"
      />
      <div className="bg-white/30 p-3 border border-neutral-200 dark:border-neutral-600 dark:bg-white/10 z-10 pointer-events-none backdrop-blur-md rounded-md">
        <div className="flex flex-col justify-center items-center w-[80vw] h-[200px] z-20 md:w-[70vw] md:h-[350px] lg:w-[50vw] lg:h-[381px] bg-gradient-to-bl dark:from-neutral-950 from-[#F3F3F3] dark:from-50% dark:to-neutral-700 to-[#D2D2D2] rounded-md relative overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/videos/web-navigation-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="text-center mt-10 space-y-1 shadow-bottom-navigation p-3 dark:text-foreground text-primary shadow-cyan-500">
        <h3 className="text-3xl font-bold">Auto Website Navigation</h3>
        <p className="font-extralight text-neutral-500 dark:text-neutral-200">
          Site-wide search for your questions
        </p>
      </div>
    </div>
  );
}
