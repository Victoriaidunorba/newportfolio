import React from 'react'
import Image from 'next/image'
import cssicon from '../../public/cssicon.png'
import reacticon from '../../public/reacticon.png'
import javascripticon from '../../public/javascripticon.png'
import visualstudioicon from '../../public/visualstudioicon.png'
import Phone from '../../public/phone.png'
import Vuefashion from '../../public/kuda.png'
import VuefashionPhone from '../../public/kudaphone.png'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

export default function Projects13({ directionLeft }: Props) {
  return (
    <div>
    <motion.div 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
    }}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    className='h-[2800px] relative lg:snap-center flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center md:-top-[200px] lg:-top-[600px] -top-[380px] wide'>
   
        <div className='w-screen wide6 flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-48'>
          <motion.div 
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
          }}
          transition={{duration: 1}}
          whileInView={{opacity: 1, x: 0}}
          className='w-[1000px] h-[800px] relative -mt-[680px] ml-[310px] md:-mt-[500px] md:ml-[10px] lg:-mt-[780px] lg:ml-[300px] vert-move'>
             <Image src={Vuefashion} alt='' className='relative lg:w-[1200px] md:w-[800px] w-[450px] ml-[110px]'  />
          </motion.div>

          <div className="w-[1200px] h-[800px] relative -top-[600px] md:-top-[650px] lg:-top-[620px] ml-[1380px] lg:ml-[2080px] vert-move">
            <Image src={VuefashionPhone} alt='' className='kudaphone lg:w-[250px] w-[100px] md:w-[200px]' />
            </div>

        </div>

        <p className='pro wide6 text-gray-400 absolute md:text-3xl md:-mt-[260px] lg:-ml-[1200px] lg:-mt-[1400px] -mt-[1000px] md:w-[700px] text-2xl w-[370px] font-semibold'>
        <span className='text-[#008080] font-bold'>React JS Banking Application.</span> This is a clone of the Kuda Bank website's landing page. This page contains animation done 
        with CSS3 animation features. Fully responsive. Purely Frontend.
        </p>

          <div className='flex absolute lg:top-[800px] md:hidden lg:flex lg:-ml-[1500px] top-[1050px] -ml-[180px]'>
        <Image src={reacticon} alt='' />
        <Image src={cssicon} alt='' />
        <Image src={javascripticon} alt='' />
        <Image src={visualstudioicon} alt='' />
      
            </div> 
   
   </motion.div>


   <motion.div className='lg:-mt-[2500px] md:scale-90 md:-mt-[1660px] lg:flex lg:-ml-[150px] -ml-[45px] -mt-[2060px] lg:scale-75 scale-75 md:flex wide'>
   <div className='ml-[70px]'>
  <a href="#" className="button2">
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="button2__wrapper">
      <span className="button2__text text-gray-500 md:text-gray-300 md:text-3xl">SOURCE CODE</span>
    </div>
    <div className="button2__box">
      <div className="inner inner__top"></div>
      <div className="inner inner__front"></div>
      <div className="inner inner__bottom"></div>
      <div className="inner inner__back"></div>
      <div className="inner inner__left"></div>
      <div className="inner inner__right"></div>
    </div>
  </a>
</div>
<div className='button2 lg:flex flex md:flex lg:ml-[60px] md:ml-[70px] md:mt-[20px] lg:mt-[5px] ml-[250px] mt-[50px]'>
  <h2 className='button2__text text-gray-300 md:text-gray-300 md:text-3xl'>LIVE MODE</h2>
  <div className='mt-5 '>
  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
</div>
</div>
        </motion.div>

  

   </div>
  )
}