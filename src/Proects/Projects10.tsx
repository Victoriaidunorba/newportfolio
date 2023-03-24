import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import sanityicon from '../../public/sanity.png'
import reacticon from '../../public/reacticon.png'
import tailwindicon from '../../public/tailwindicon.png'
import iosicon from '../../public/iosicon.gif'
import androidicon from '../../public/androidicon.png'
import javaicon from '../../public/javaicon.gif'
import rubyicon from '../../public/rubyicon.png'
import One from '../../public/number1.gif'
import Phone from '../../public/phone.png'
import Food1 from '../../public/food1.jpg'
import Food2 from '../../public/food2.jpg'
import Food3 from '../../public/food3.jpg'
import Food4 from '../../public/food4.jpg'
import Food5 from '../../public/food6.jpg'
import graphqlicon from '../../public/graphqlicon.png'
import { motion } from 'framer-motion'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

type Props = {
  directionLeft?: boolean;
}

export default function Projects10({ directionLeft }: Props) {
  return (
    <div className='bg-[#1116]'>
    
      {/* laptops and tablets */}
    <motion.div 

    className='h-[2500px] lg:snap-center relative hidden md:flex lg:flex min-w-sm overflow-hidden flex-col text-left md:flex-row
    justify-evenly mx-auto items-center md:-top-[100px] lg:-top-[400px] top-[250px] wide1'>
      
    
          
        <motion.div 
        //  initial={{
        //   x: -200,
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 0.2,
        // }}
        // whileInView={{ opacity: 1, x:0}}
        // viewport={{once: true}}
        className='wide6 w-screen flex-shrink-0 flex lg:-ml-[300px] flex-col space-y-5 items-center justify-center p-20 md:p-44 md:ml-[1500px] md:mt-[900px] h-screen mt-56'>
        
       
          <motion.div 
              //   initial={{
              //     x: directionLeft ? 200 : -200,
              //     opacity: 0,
              // }}
              // transition={{duration: 0.2}}
              // whileInView={{opacity: 1, x: 0}}

          className='lg:w-[300px] md:w-[2000px] relative -mt-[680px] w3 md:-mt-[150px] -ml-[55px] md:ml-[25px] lg:-mt-[1900px] lg:-ml-[500px] vert-move'>
            <div className='phone2s'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen2s phoneScreen">
            <video src='./fitnessvid.mp4' width={2500} height={500} controls autoPlay className='phoneApps2 phoneApps' />
            </div></div>
          </motion.div>

          {/* <motion.div
           

          className="lg:w-[300px] md:w-[1500px] w-[300px]  md:relative lg:relative relative md:-top-[550px] lg:-top-[550px] lg:-ml-[600px] vert-move">
            <Image src={Phone} alt='' className='phone2 w-[300px]' />
            <div className="phoneScreen2">
            <Image src={Food5} alt='' className='phoneApps' />
            </div></motion.div> */}

            <motion.p 
             initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            whileInView={{ opacity: 1, x:0}}
            viewport={{once: true}}
            className='pro text-gray-400 lg:font-light absolute md:w-[700px] md:text-3xl lg:text-3xl md:top-[1000px] md:font-semibold md:left-[40px] lg:top-[550px] lg:ml-[900px]'>
             <span className='text-[#008080] font-semibold'>React Native Fitness App.</span> Full stack Fitness App using React Native for IOS and Android. Application features Sign-in options complete with fitness exercies and dietary requirements.
              Extremely user friendly with smooth naviagtion. <span className='text-[#008080] spanner'>React Native, IOS, Ruby, Android, Java</span>
            </motion.p>
            <div className='flex absolute lg:top-[770px] lg:flex lg:ml-[380px]'>
        <Image src={reacticon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={rubyicon} alt='' />
        <Image src={androidicon} alt='' />
        <Image src={javaicon} alt='' className='rounded-full' />
            </div> 

        </motion.div>      
   </motion.div>

{/* mobile responsiveness */}

<motion.div 

className='h-[2500px] relative flex overflow-hidden flex-col text-left md:hidden lg:hidden
max-w-full justify-evenly mx-auto items-center -top-[50px] wide1'>
  

      
    <motion.div 
    //  initial={{
    //   x: -200,
    //   opacity: 0,
    // }}
    // transition={{
    //   duration: 0.2,
    // }}
    // whileInView={{ opacity: 1, x:0}}
    // viewport={{once: true}}
    className='w-screen flex-shrink-0 flex lg:-ml-[300px] flex-col space-y-5 items-center justify-center p-20 md:p-44 md:ml-[1500px] md:mt-[900px] h-screen mt-56'>
    
   
      <motion.div 
          //   initial={{
          //     x: directionLeft ? 200 : -200,
          //     opacity: 0,
          // }}
          // transition={{duration: 0.2}}
          // whileInView={{opacity: 1, x: 0}}

      className='wide lg:w-[300px] md:w-[2000px] relative -mt-[2020px] w3 md:-mt-[780px] -ml-[290px] lg:-mt-[1900px] lg:-ml-[500px] vert-move'>
        
           {/* <Image src={Phone} alt='' className='phone' /> */}
          
        <div className="phoneScreen2s phoneScreen ">
        <video src='./fitnessvid.mp4'  controls autoPlay className='phoneApps2 phoneApps' />
        </div>
      </motion.div>

      

        <motion.p 
         initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        whileInView={{ opacity: 1, x:0}}
        viewport={{once: true}}
        className='pro text-gray-400 top-[830px] w-[350px] text-3xl lg:font-light absolute md:w-[700px] md:text-2xl lg:text-3xl md:top-[1000px] md:font-semibold md:left-[40px] lg:top-[550px] lg:ml-[900px]'>
         <span className='text-[#008080] font-semibold'>React Native Fitness App.</span> Full stack Fitness App using React Native for IOS and Android. Application features Sign-in options complete with fitness exercies and dietary requirements.
          Extremely user friendly with smooth naviagtion. <span className='text-[#008080] spanner'>React Native, IOS, Ruby, Android, Java</span>
        </motion.p>
        <div className='flex absolute lg:top-[770px] top-[1250px] -ml-[100px] md:hidden lg:flex lg:ml-[380px]'>
    <Image src={reacticon} alt='' />
    <Image src={iosicon} alt='' className='rounded-full' />
    <Image src={rubyicon} alt='' />
    <Image src={androidicon} alt='' />
    <Image src={javaicon} alt='' className='rounded-full' />
        </div> 

    </motion.div>      
</motion.div>
   

   
   <motion.div className='lg:-mt-[2150px] lg:ml-[1160px] -mt-[950px] md:-mt-[750px] -ml-[10px] scale-75 md:scale-90 lg:scale-75 wide'>
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