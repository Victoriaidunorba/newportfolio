import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionLeft?: boolean;
}

export default function Skill2({ directionLeft }: Props) {
  return (

    <div>
    <div className='group relative md:hidden lg:hidden flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
          src="data:image/png;base64,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"
        // initial={{
        //     x: directionLeft ? -200 : 200,
        //     opacity: 0,
        // }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>TAILWIND</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* laptops adn tabs */}

    <div className='group relative md:flex hidden lg:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
          src="data:image/png;base64,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"
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>TAILWIND</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}