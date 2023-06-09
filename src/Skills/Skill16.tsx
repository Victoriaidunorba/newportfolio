import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionRight?: boolean;
}

export default function Skill16({ directionRight }: Props) {
  return (

    <div>
    <div className='group relative md:hidden lg:hidden flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/jpeg;base64,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"
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
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>VUE JS</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* lapts and tabs */}

    <div className='group relative hidden md:flex lg:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/jpeg;base64,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"
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
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>VUE JS</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}