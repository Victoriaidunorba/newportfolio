import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Headers2 from '@/Header/Headers2'
type Props = {}

export default function Header({}: Props) {
  return (
    <div>
   <header className='pro1 top-0 p-0 items-start justify-between flex max-w-7xl mx-auto z-20 xl:items-center'>
    
    <motion.div 
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='flex flex-row items-center ssm:scale-50'>
    
   
  <div className="logodesign items-start mt-24 ml-[200px] md:ml-96 lg:ml-[500px]">
    <h2 className='items-start first'>VICTORIA</h2>
    <h2 className='items-start second'>VICTORIA</h2>
  </div>

       
    </motion.div>
   </header>
  

   </div>
  )
}