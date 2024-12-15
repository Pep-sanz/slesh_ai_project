import React from 'react'
import NavItems from './NavItems'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileNavbar({className, setIsActive}: {className?: string, setIsActive: any}) {
  return (
    <div className={`min-h-screen w-full bg-foreground dark:bg-background md:w-[450px] backdrop-blur-sm ${className}`}>
        <div className="w-full !h-full">
            <NavItems className='flex-col' setIsActive={setIsActive} />
        </div>
    </div>
  )
}
