import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import logo from '../../public/logo.png'
import bookicon from '../../public/bookicon.png'
import playgroundicon from '../../public/playgroundicon.png'
import skillicon from '../../public/skillicon.png'
import contacticon from '../../public/contacticon.png'
import portfolioicon from '../../public/portfolioicon.png'
import incognitoicon from '../../public/incognitoicon.png'
import Image from 'next/image'

type Props = {}

export default function Headers2({}: Props) {
    
  return (
    <div className='lg:hidden md:hidden flex'>

<div className="flex flex-row h-full">
  
     
  
    </div>
    <header className='top-0 mt-[50px] p-5 bg-[#1116] wrapd h-[70px] w-[1000px]  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center wide'>
        
        <motion.div className='flex flex-row items-center ml-0 lg:ml-24 cursor-pointer'
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
          <Link href='/About'><Image src={incognitoicon} alt='about' className='w-[40px] -mt-[10px]  hover:w-[55px]' /></Link>
          <Link href='/SkillHolder'><Image src={bookicon} alt='about' className='w-[50px] ml-[40px] -mt-[10px]  hover:w-[60px]' /></Link>
          <Link href='/Playground'><Image src={playgroundicon} alt='about' className='w-[45px] ml-[30px]  hover:w-[55px]' /></Link>

            
          
            

        </motion.div>

        
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{duration: 1.5}}
                className='flex flex-row items-center text-white cursor-pointer'
            >
               <Link href='/SkillHolder'><Image src={skillicon} alt='about' className='w-[40px] mr-[30px]  hover:w-[55px]' /></Link>
               <Link href='/Contacts'><Image src={contacticon} alt='about' className='w-[35px] mr-[30px]  hover:w-[55px]' /></Link>
               <Link href='/AllProjects'><Image src={portfolioicon} alt='about' className='w-[40px] mr-[30px]  hover:w-[55px]' /></Link>
            </motion.div>
        
        
    </header>

  
   

                


    </div>
  )
}