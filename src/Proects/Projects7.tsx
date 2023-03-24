import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import sanityicon from '../../public/sanity.png'
import reacticon from '../../public/reacticon.png'
import tailwindicon from '../../public/tailwindicon.png'
import iosicon from '../../public/iosicon.gif'
import androidicon from '../../public/androidicon.png'
import googleicon from '../../public/googleicon.png'
import Phone from '../../public/phone.png'
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

export default function Projects7({ directionLeft }: Props) {
  return (
    <div className='bg-[#1116]'>
    
      {/* laptops and tablets */}
    <motion.div 

    className='h-[2500px] lg:snap-center relative md:hidden lg:flex min-w-sm overflow-hidden flex-col text-left md:flex-row
    justify-evenly mx-auto items-center lg:-top-[400px] top-[400px] wide1'>
      
    
          
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
        className='wide6 w-screen flex-shrink-0 flex lg:-ml-[300px] -ml-[300px] flex-col space-y-5 items-center justify-center p-20 md:p-44 md:ml-[1500px] md:mt-[900px] h-screen'>
        
       
          <motion.div 
              //   initial={{
              //     x: directionLeft ? 200 : -200,
              //     opacity: 0,
              // }}
              // transition={{duration: 0.2}}
              // whileInView={{opacity: 1, x: 0}}

          className='lg:w-[300px] -mt-[1900px] md:w-[2000px] w-[300px] scale-50 relative w3 lg:-mt-[1900px] lg:-ml-[500px] vert-move'>
            <div className='phone2s'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen2s phoneScreen">
            <video src='./foodapp2.mp4' width={2500} height={500} controls autoPlay className='phoneApps2 phoneApps' />
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
            className='pro text-gray-400 lg:font-light absolute md:w-[700px] md:text-2xl lg:text-3xl md:top-[1000px] md:font-semibold md:left-[40px] lg:top-[550px] lg:ml-[900px]'>
              <span className='text-[#008080] font-bold'>React Native Food Delivery App.</span> This app makes use of Redux for State Management.
              Groq (Sanity API) which uses the same priniciples as GraphQL. Server Side Rendering. The Application also makes use of React Naviagation, Google Places Api and Tailwind CSS.
              Extremely user friendly application which also gives a time estimate for delivery arrival based on location.  <span className='text-[#008080] spanner'>Sanity, Tailwind CSS, React Native, I0S, Android, GraphQL</span>
            </motion.p>
            <div className='flex absolute lg:top-[890px] md:hidden lg:flex lg:ml-[500px]'>
        <Image src={sanityicon} alt='' className='w-[60px] rounded-full h-[60px]' />
        <Image src={tailwindicon} alt='' />
        <Image src={reacticon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={androidicon} alt='' />
        <Image src={graphqlicon} alt='' />
        <Image src={googleicon} alt='' />
            </div> 

        </motion.div>      
   </motion.div>


{/* for mobile screens */}

<motion.div 
    // initial={{opacity: 0}}
    // whileInView={{opacity: 1}}
    // transition={{duration: 1.5}}
    className='h-[2500px] relative flex overflow-hidden flex-col text-left md:flex lg:hidden
    max-w-full justify-evenly mx-auto items-center -top-[1550px] md:[3000px] md:top-[10px]'>
    
    
   
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 h-screen mt-56'>
          <div className='w-[300px] h-[600px] lg:w-[2000px] md:w-[1500px] md:ml-[1200px] md:h-[800px] scale-40 md:scale-95 md:scalex-50 md:-mt-[1200px] scale-x-50 relative -mt-[1480px] ml-[5px] vert-move mid'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen phoneScreen2s">
            <video src='./foodapp2.mp4' width={2500} height={500} controls autoPlay className='phoneApps2 phoneApps' />
            </div>
          </div>

          {/* <div className="w-[500px] h-[800px] relative -top-[30px] left-[100px] vert-move">
            <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={Food5} alt='' className='phoneApps' />
            </div></div> */}

            <div className=''>
            <p className='pro text-gray-400 mt-[50px] md:-mt-[150px] md:w-[600px] md:text-3xl w-[320px] text-2xl font-semibold'> <span className='text-[#008080] font-bold'>React Native Food Delivery App.</span> This app makes use of Redux for State Management.
              Groq (Sanity API) which uses the same priniciples as GraphQL. Server Side Rendering. The Application also makes use of React Naviagation, Google Places Api and Tailwind CSS.
              Extremely user friendly application which also gives a time estimate for delivery arrival based on location.</p>
              <span className='text-[#008080] spanner text-2xl'>Sanity, Tailwind CSS, React Native, I0S, Android, GraphQL</span>
          <div className='flex absolute top-[1230px] md:top-[780px] md:ml-[10px] -ml-[10px]'>
        <Image src={sanityicon} alt='' className='w-[60px] rounded-full h-[60px]' />
        <Image src={tailwindicon} alt='' />
        <Image src={reacticon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={androidicon} alt='' />
        <Image src={graphqlicon} alt='' />
            </div> </div>

        

        </div>

        
        
      
   </motion.div>
   

   
   <motion.div className='lg:-mt-[2000px] lg:ml-[1200px] ind cursor-pointer -mt-[3450px] -ml-[10px] scale-75 md:scale-90 lg:scale-75 wide'>
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