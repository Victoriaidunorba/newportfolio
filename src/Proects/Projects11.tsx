import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import objcicon from '../../public/objcicon.png'
import reacticon from '../../public/reacticon.png'
import cssicon from '../../public/cssicon.png'
import iosicon from '../../public/iosicon.gif'
import androidicon from '../../public/androidicon.png'
import nodeicon from '../../public/nodeicon.png'
import tailwindicon from '../../public/tailwindicon.png'
import Phone from '../../public/phone.png'
import uber1 from '../../public/uber1s.jpg'
import uber2 from '../../public/uber2ss.jpg'
import Fits3 from '../../public/fits3.jpg'
import Fits4 from '../../public/fits4.jpg'
import Fits5 from '../../public/uber4.jpg'
import Food6 from '../../public/food6.jpg'
import Food7 from '../../public/food10.jpg'
import Food8 from '../../public/food11.jpg'
import Food9 from '../../public/food12.jpg'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

export default function Projects11({ directionLeft }: Props) {
  return (
    <div>
      {/* laptops and tablets */}
    <motion.div 
    initial={{
      x: directionLeft ? -200 : 200,
      opacity: 0,
  }}
  transition={{duration: 1}}
  whileInView={{opacity: 1, x: 0}}
     
    className='h-[2500px] relative hidden md:flex lg:flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center md:-top-[50px] lg:-top-[430px] top-[250px] wide1'>
   
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
        className='w-screen wide6 flex-shrink-0 flex lg:-ml-[300px] flex-col space-y-5 items-center justify-center p-20 md:p-44 md:ml-[1500px] h-screen mt-56'>
          
          <div className='w-[300px] h-[600px] lg:w-[2000px] md:w-[2000px] scale-40 scale-x-50 relative -mt-[680px] md:-mt-[480px] -ml-[55px] lg:-mt-[780px] lg:ml-[700px] vert-move'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={uber1} alt='' className='phoneApp uber' />
            <Image src={uber2} alt='' className='phoneApp uber' />
          
            </div>
          </div>

          <div className="lg:w-[1500px] md:w-[1500px] w-[300px]  md:relative lg:relative relative md:-top-[550px] lg:-top-[550px] lg:ml-[800px] vert-move">
            <Image src={Phone} alt='' className='phone2 w-[300px]' />
            <div className="phoneScreen2">
            <Image src={Fits5} alt='' className='phoneApps' />
            </div></div>

            <motion.p
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x:0}}
            viewport={{once: true}}
            className='pro text-gray-400 absolute md:w-[700px] md:text-3xl md:top-[840px] md:left-[40px] lg:top-[550px] lg:ml-[950px]'>
              <span className='text-[#008080] font-bold'>React Native Uber Clone.</span> Full stack Uber App clone using React Native for IOS and Android. MongoDB, Google Places & directions API, Navigation, Redux
              cc: <a href="https://m.youtube.com/watch?v=zIwiQz8adoE">EFFICIENT PROGRAMMING - <span className='underlined text-[#008080]  font-sans'>"The Real Uber Clone"</span> </a><a href="https://m.youtube.com/watch?v=bvn_HYpix6s">SONNY SANGHA - <span className='underlined text-[#008080] font-sans decoration-[#008080]'>UBER 2.0</span> </a> (fusion of both code-along tutorials)
              <span className='text-[#008080] spanner'> (React, Tailwind, IOS, Android, Node JS)</span>
            </motion.p>

          <div className='flex absolute lg:top-[790px] lg:ml-[500px]'>
        <Image src={reacticon} alt='' />
        <Image src={tailwindicon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={androidicon} alt='' />
        <Image src={nodeicon} alt='' className='rounded-full' />
                 </div> 
        </motion.div>      
   </motion.div>

   
{/* for mobile view */}
   <motion.div 
    // initial={{opacity: 0}}
    // whileInView={{opacity: 1}}
    // transition={{duration: 1.5}}
    className='h-[2500px] relative flex overflow-hidden flex-col text-left md:hidden lg:hidden
    max-w-full justify-evenly mx-auto items-center -top-[400px]'>
     
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-56'>
         
          <div className="w-[500px] h-[800px] relative -top-[570px] left-[100px] vert-move">
            <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={Fits5} alt='' className='phoneApps' />
            </div></div>
              <div>
            <p className='pro text-gray-400 -mt-[550px] w-[320px] text-2xl font-semibold'><span className='text-[#008080] font-bold'>React Native Uber Clone.</span> Full stack Uber App clone using React Native for IOS and Android. MongoDB, Google Places & directions API, Navigation, Redux
              cc: <a href="https://m.youtube.com/watch?v=zIwiQz8adoE">EFFICIENT PROGRAMMING - <span className='underlined text-[#008080]  font-sans'>"The Real Uber Clone"</span> </a><a href="https://m.youtube.com/watch?v=bvn_HYpix6s">SONNY SANGHA - <span className='underlined text-[#008080] font-sans decoration-[#008080]'>UBER 2.0</span> </a> (fusion of both code-along tutorials)
              <span className='text-[#008080] spanner'> (React, Tailwind, IOS, Android, Node JS)</span></p>

          <div className='flex absolute top-[1510px] -ml-[10px]'>
        <Image src={reacticon} alt='' />
        <Image src={tailwindicon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full'/>
        <Image src={androidicon} alt='' />
        <Image src={nodeicon} alt='' className='rounded-full' />
        
 
            </div>
            </div>

        </div>

        
        
      
   </motion.div>
   <motion.div className='lg:-mt-[2140px] lg:scale-75 md:scale-90 md:-mt-[940px] ind scale-75 -mt-[1630px] lg:ml-[1200px] wide'>
   <div>
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
          
        </motion.div>

   </div>
  )
}