import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionRight?: boolean;
}

export default function Skill12({ directionRight }: Props) {
  return (

    <div>
    <div className='group relative md:hidden lg:hidden flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
         src="data:image/png;base64,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"
        // initial={{
        //     x: directionRight ? 200 : -200,
        //     opacity: 0,
        // }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>GIT</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* laptops and tabs */}

    <div className='group relative hidden md:flex lg:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
         src="data:image/png;base64,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"
        initial={{
            x: directionRight ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>GIT</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}