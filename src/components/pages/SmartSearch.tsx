import Image from 'next/image';
import React from 'react';

export default function SmartSearch() {
  return (
    <div className="xl:min-h-screen py-24 w-full bg-gradient-to-bl from-background from-85% dark:to-primary/20 to-[#CBEFFF] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="shadow-bottom-search p-3 w-fit space-y-3 text-primary dark:text-foreground shadow-primary/50">
          <h3 className="text-3xl sm:text-5xl font-thin flex flex-col">
            Search
            <span className="font-bold ml-3 text-4xl sm:text-6xl">Smarter</span>
          </h3>
          <p className="font-extralight text-center text-neutral-500 dark:text-neutral-200">
            X Search, Gmail Search
          </p>
        </div>
      </div>
      <div className="relative z-30 flex justify-center items-center">
        <div className="bg-grid absolute inset-0 w-full h-full -z-10"></div>
        <Image
          src="/images/macbook-air.png"
          alt="macbook air"
          width={550}
          height={550}
          className="hidden dark:block"
        />
        <Image
          src="/images/macbook-air-light.png"
          alt="macbook air"
          width={550}
          height={550}
          className="block dark:hidden"
        />
      </div>
    </div>
  );
}
