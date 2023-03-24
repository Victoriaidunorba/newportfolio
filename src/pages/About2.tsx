import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ContactPage from '@/Contact/ContactPage'
import Link from 'next/link'
import messageicon from '../../public/messageicon.png'

type Props = {}

export default function About2({}: Props) {
  return (
    <motion.div 
    initial={{
      x: -200,
      opacity: 0,
    }}
    transition={{
      duration: 1.2,
    }}
    whileInView={{ opacity: 1, x:0}}
    viewport={{once: true}}
    className='md:mt-[100px] bg-black -mt-[200px] lg:-mt-[100px] wide2'>
      <div>
      <h2 className='mirrortext mt-[450px] ml-[180px] lg:ml-[500px] md:w-[200px] md:ml-[550px] w-[200px]'>Mirror, mirror on the wall...</h2>
      <h3 className='top-40 lg:ml-[100px] ml-[30px] uppercase tracking-[20px] md:w-[10px] md:ml-[30px] w-[6px] text-gray-500 text-2xl lg:text-3xl md:text-3xl'>Who now is the best of them all?</h3>
    <motion.div 
      
    className='-mt-10 scale-75 lg:scale-125 lg:ml-[650px] lg:-mt-[170px] wide6s -ml-[30px] md:-mt-[380px] md:ml-[110px]'>
      
  <div className="text text--left">

  </div>
  <div className="items-container">
    <div className="item item--forest">
      <div className="item__screen item__screen--full"></div>
      <div className="item__screen item__screen--clip"></div>
    </div>
    <img className="mirror " src="https://images2.imgbox.com/f5/2e/gzBTKoLY_o.png" alt="mirror"/>
    <div className="item item--girl">
      <div className="item__screen item__screen--full"></div>
      <div className="item__screen item__screen--clip"></div>
    </div>
  </div>
  
  
   {/* <img className="mirror" src="https://images2.imgbox.com/f5/2e/gzBTKoLY_o.png" alt="mirror"/>
   */}

    </motion.div>
    </div>
    <p className='pro2 md:w-[910px] md:ml-[40px] lg:text-2xl w-[500px] md:text-4xl md:font-normal lg:ml-[1030px] lg:w-[650px] lg:-mt-[350px] font-light tracking-[5px] space-y-10 text-2xl md:-mt-[60px]'>
      Hey👋The name's <span className='text-[#008080]'>VICTORIA</span> and I just graduated from college. I am a Communications Engineer who's dabbled into Software Engineering, a bit of DevOps and UX Design. Some would call me a design Fanatic😅
      Being comfortable with writing clear and usable code allows me to fuctionally prototype and validate experiences in record time. If you are interested in the tools and software I use check out <Link href='/uses'><span className='text-[#008080] hover:text-cyan-500 cursor-pointer ind'>what i use. </span></Link>
      Most would describe my designs as "pixel-perfect" I crave perfection!😁
      During my free time you'd probably catch me writing (mostly poetry), playing video games or watching Anime. I love Anime!
      Anything you want to tell me? <span className='text-[#008080] flex cursor-pointer hover:text-cyan-500'>send me a message<Image src={messageicon} alt="" className='flex' /></span>
    </p>

    </motion.div>
  )
}