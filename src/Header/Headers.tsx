import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

type Props = {}

export default function Headers({}: Props) {
    
  return (
    <div className=''>

<div className="flex flex-row h-full">
  
     
  
    </div>
    <header className='top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center wide'>
        
        <motion.div className='flex flex-row items-center ml-0 lg:ml-24'
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
            <SocialIcon
            url='https://www/twitter.com/sonnysangha'
            fgColor='grey'
            bgColor='transparent'
            />
            <SocialIcon
            url='https://www/github.com/sonnysangha'
            fgColor='grey'
            bgColor='transparent'
            />
            <SocialIcon
            url='https://www/whatsapp.com/sonnysangha'
            fgColor='grey'
            bgColor='transparent'
            />
             <SocialIcon
            url='https://www.linkedin.com/in/victoria-idunorba-554a68184/'
            fgColor='grey'
            bgColor='transparent'
            />
            

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
                <SocialIcon 
                    className='cursor-pointer right-[79px] md:right-[39px] lg:-right-[200px]'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden text-sm text-gray-400 md:hidden'>Get In Touch</p>
            </motion.div>
        
        
    </header>

  
    <nav className="bg-[#1119] ml-[270px] -mt-[90px] w-20  justify-between flex flex-row ">
       
      </nav>

                


    </div>
  )
}