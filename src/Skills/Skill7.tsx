import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionLeft?: boolean;
}

export default function Skill7({ directionLeft }: Props) {
  return (

    <div>
    <div className='group relative flex cursor-pointer top-48'>
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
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}