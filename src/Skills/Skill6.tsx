import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionLeft?: boolean;
}

export default function Skill6({ directionLeft }: Props) {
  return (

    <div>
    <div className='group relative flex md:hidden lg:hidden cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6WbhMVBkys-68Ei7tljvTsmTN2vckVltYvTrrxzZB36TmLvi_g4bCo2Fu-mHzv8PSfQ&usqp=CAU"
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
         <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>NEXT JS</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* laptops and tabs */}

    <div className='group relative hidden lg:flex md:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6WbhMVBkys-68Ei7tljvTsmTN2vckVltYvTrrxzZB36TmLvi_g4bCo2Fu-mHzv8PSfQ&usqp=CAU"
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
         <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>NEXT JS</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}