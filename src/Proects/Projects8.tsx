import Image from 'next/image'
import React from 'react'
import cssicon from '../../public/cssicon.png'
import htmlicon from '../../public/htmlicon.png'
import javascripticon from '../../public/javascripticon.png'
import socialslaptop from '../../public/socialslaptop.png'
import socialstab from '../../public/socialstabs.png'
import socialstabs from '../../public/socialstab.png'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

export default function Projects8({ directionLeft }: Props) {
  return (
    // social media clone facebook
    <div className='bg-[#1116]'>
      <div className='bg-[#1116]'>
      {/* desktops and tablets */}
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
    className='h-[2500px] relative overflow-hidden flex-col text-left lg:snap-center md:flex-row
    max-w-full justify-evenly mx-auto items-center hidden md:flex lg:-top-[750px] md:-top-[250px] top-[600px] wide'>
    
    
        <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x:0}}
        viewport={{once: true}}

        className='w-screen wide6 flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-48'>
        
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center lg:ml-[200px] justify-center p-20 md:p-44 h-screen mt-48'>

         
          <motion.div 
          initial={{
            x: directionLeft ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
          className='w-[1000px] h-[800px] relative -mt-[680px] ml-[310px] md:-mt-[480px] md:ml-[10px] lg:-mt-[350px] lg:ml-[100px] vert-move'>
             <Image src={socialslaptop} alt='' className='relative lg:w-[1200px] md:w-[800px] w-[450px] ml-[110px]'  />
          </motion.div>

          <motion.div 
          initial={{
            x: directionLeft ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
          className="w-[1200px] h-[800px] relative -top-[600px] md:-top-[20px] md:ml-[1100px] lg:-top-[540px] ml-[1380px] lg:-ml-[80px] vert-move">
            <Image src={socialstab} alt='' className='phone lg:w-[370px] lg:flex md:hidden' />
            <Image src={socialstabs} alt='' className='phone lg:hidden md:w-[450px]' />
            </motion.div>

        </div>

            <p className='pro text-gray-400 absolute lg:top-[1300px] lg:left-[1100px] lg:w-[1100px] md:top-[750px] md:text-3xl md:-ml-[460px] md:w-[300px]'>
            <span className='text-[#008080] font-bold'>Facebook Clone</span>  with HTML, CSS & JavaScript. Codaverse group challenge. As a matter of fact, this was my first major project on CSS posed as a group challenge!
            I put this here to show growth and how far I've come in Web Development. <span className='text-[#008080] spanner'>HTML5, CSS3, Javascript</span>
            </p>

        
         <div className='flex absolute lg:top-[1110px] md:top-[1240px] md:left-[15px] lg:ml-[250px]'>
        <Image src={htmlicon} alt='' />
        <Image src={javascripticon} alt='' />
        <Image src={cssicon} alt='' />
            </div> 

        </motion.div>
 
   </motion.div>
   </div>
    {/* mobile view */}
   <div 
    className='h-[2500px] relative flex overflow-hidden md:hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center top-[100px]'>
    
    
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-48'>
          <div className='w-[2000px] h-[800px] relative -mt-[680px] md:-mt-[780px] ml-[1380px] lg:-mt-[780px] lg:ml-[380px] vert-move'>
               <Image src={socialslaptop} alt='' className='movielaptop hidden' />
          </div>

          {/* <div className='w-[2000px] h-[800px] relative -mt-[680px] md:-mt-[780px] ml-[1380px] lg:-mt-[780px] lg:ml-[780px] vert-move'>
               <Image src={Movietab} alt='' className='phone' />
          </div> */}
                <div>
          <div className='w-[2000px] h-[800px] relative -mt-[1430px]  ml-[1600px] vert-move'>
               <Image src={socialstabs} alt='' className='w-[400px] scale-90' />
          </div>

         </div>

                <p className='pro text-gray-400 absolute top-[600px] text-2xl w-[330px] font-semibold'><span className='text-[#008080] font-bold'>Facebook Clone</span>  with HTML, CSS & JavaScript. Codaverse group challenge. As a matter of fact, this was my first major project on CSS posed as a group challenge!
            I put this here to show growth and how far I've come in Web Development. <span className='text-[#008080] spanner'>HTML5, CSS3, Javascript</span>
            </p>

          <div className='flex absolute -ml-[20px] top-[510px]'>
        <Image src={htmlicon} alt='' />
        <Image src={cssicon} alt='' />
        <Image src={javascripticon} alt='' />
            </div> 

        </div>

        

        
      
   </div>
   <motion.div className='lg:-mt-[2500px] ind cursor-pointer -ml-[45px] -mt-[1860px] md:-mt-[750px] md:-ml-[10px] lg:scale-75 md:scale-90 scale-75 lg:grid lg:grid-cols-1 lg:-ml-[20px] md:flex wide'>
   <div className=''>
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
<div className='button2 lg:flex flex md:flex lg:ml-[10px] md:mt-[150px] md:-ml-[60px] lg:mt-[65px] ml-[250px] mt-[50px]'>
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