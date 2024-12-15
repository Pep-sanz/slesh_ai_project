"use client"

import React from 'react'
import Navbar from './Navbar'
import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function Layouts({children}: {children: React.ReactNode}) {
  return (
    <div>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <Navbar />
          <div className="">
              <main className='min-h-screen w-full'>
                  {children}
              </main>
              {/* <div className="bg-grid absolute inset-0 -z-10 w-full h-full"></div> */}
              {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div> */}
          </div>
      </NextThemesProvider>
    </div>
  )
}
