import React from 'react'
import {motion}from 'framer-motion'
import Skill1 from './Skill1'
import Skill2 from './Skill2'
import Skill3 from './Skill3'
import Skill4 from './Skill4'
import Skill5 from './Skill5'
import Skill6 from './Skill6'
import Skill7 from './Skill7'
import Skill8 from './Skill8'
import Skill9 from './Skill9'
import Skill10 from './Skill10'
import Skill11 from './Skill11'
import Skill12 from './Skill12'
import Skill13 from './Skill13'
import Skill14 from './Skill14'
import Skill15 from './Skill15'
import Skill16 from './Skill16'

import Skill18 from './Skill18'
import Skill19 from './Skill19'
import Skill20 from './Skill20'
import Skill21 from './Skill21'
import Skill22 from './Skill22'

type Props = {
    
}

export default function Skill({}: Props) {
  return (
    <motion.div
    initial={{opacity: 1}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.2}}

    className='flex relative flex-col snap-center wide3 lg:scale-50 lg:-mt-[100px] md:scale-90 text-center md:text-left xl:flex-row xl:px-10 min-h-screen h-screen justify-center xl:space-y-0 mx-auto items-center mt-20'
    >
    <h3 className='absolute stack top-0 uppercase tracking-[36px] text-[#008080] font-semibold text-3xl'>
        Stack
    </h3>

    {/* <h3 className='absolute top-20 uppercase md:tracking-[6px] lg:tracking-[8px] text-white text-sm'>Hover over a skill to see my proficiency level</h3> */}

    <div className='grid grid-cols-4 -mt-96 lg:grid-cols-4 md:grid-cols-4 lg:gap-4 md:scale-105 md lg:scale-70 md:gap-4 gap-3 space1'>
            <Skill1 />
            <Skill2 />
            <Skill3 />
            <Skill4 />
            <Skill5 />
            <Skill6 />
            {/* <Skill7 /> */}
            <Skill8 />
            <Skill9 />
            <Skill10 />
            <Skill11 />
            <Skill12 />
            <Skill13 />
            <Skill14 />
            <Skill15 />
            <Skill16 />
           
            {/* Skill18 */}
            <Skill19 />
            <Skill20 />
            <Skill21 />
            <Skill22 />
    </div>
    </motion.div>
  )
}