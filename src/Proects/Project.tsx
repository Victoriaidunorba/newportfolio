import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import sanityicon from '../../public/sanity.png'
import reacticon from '../../public/reacticon.png'
import tailwindicon from '../../public/tailwindicon.png'
import iosicon from '../../public/iosicon.gif'
import androidicon from '../../public/androidicon.png'
import googleicon from '../../public/googleicon.png'
import One from '../../public/number1.gif'
import Phone from '../../public/phone.png'
import Food1 from '../../public/food1.jpg'
import Food2 from '../../public/food2.jpg'
import Food3 from '../../public/food3.jpg'
import Food4 from '../../public/food4.jpg'
import Food5 from '../../public/food5.jpg'
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

export default function Project({ directionLeft }: Props) {
  return (
    <div>
    
      {/* laptops and tablets */}
    <motion.div 

    className='h-[2500px] lg:snap-center relative hidden md:flex lg:flex min-w-sm overflow-hidden flex-col text-left md:flex-row
    justify-evenly mx-auto items-center md:top-16 lg:-top-5 top-[250px] wide1'>
      
    <h3 className='absolute top-40 uppercase tracking-[20px] md:text-2xl text-gray-500 text-3xl'>Projects</h3>
          
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
                initial={{
                  x: directionLeft ? 200 : -200,
                  opacity: 0,
              }}
              transition={{duration: 0.2}}
              whileInView={{opacity: 1, x: 0}}

          className='lg:w-[300px] md:w-[2000px] relative -mt-[680px] md:-mt-[780px] -ml-[55px] lg:-mt-[1300px] lg:-ml-[1000px] vert-move'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={Food1} alt='' className='phoneApp' />
            <Image src={Food2} alt='' className='phoneApp' />
            <Image src={Food3} alt='' className='phoneApp' />
            <Image src={Food4} alt='' className='phoneApp' />
            </div>
          </motion.div>

          <motion.div
           

          className="lg:w-[300px] md:w-[1500px] w-[300px]  md:relative lg:relative relative md:-top-[550px] lg:-top-[550px] lg:-ml-[600px] vert-move">
            <Image src={Phone} alt='' className='phone2 w-[300px]' />
            <div className="phoneScreen2">
            <Image src={Food5} alt='' className='phoneApps' width={1000} />
            </div></motion.div>
             
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
              <span className='font-bold text-[#008080]'>React Native Food Delivery App.</span> This app makes use of Redux for State Management.
              Groq (Sanity API) which uses the same priniciples as GraphQL. Server Side Rendering. The Application also makes use of React Naviagation, Google Places Api and Tailwind CSS.
              Extremely user friendly application which also gives a time estimate for delivery arrival based on location.
              <span className='text-[#008080] spanner'>Sanity, Tailwind CSS, React Native, I0S, Android, GraphQL</span>
            </motion.p>
            <div className='flex absolute lg:top-[890px] md:hidden lg:flex lg:ml-[480px]'>
        <Image src={sanityicon} alt='' className='w-[60px] rounded-full h-[60px]' />
        <Image src={tailwindicon} alt='' />
        <Image src={reacticon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={androidicon} alt='' />
        <Image src={googleicon} alt='' />
        <Image src={graphqlicon} alt='' />
            </div> 

        </motion.div>      
   </motion.div>

   
{/* for mobile view */}
   <motion.div 
    // initial={{opacity: 0}}
    // whileInView={{opacity: 1}}
    // transition={{duration: 1.5}}
    className='h-[2500px] relative flex overflow-hidden flex-col text-left md:hidden lg:hidden
    max-w-full justify-evenly mx-auto items-center -top-[50px]'>
    <h3 className='absolute top-40 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    
   
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-56'>
          <div className='w-[300px] h-[600px] lg:w-[2000px] md:w-[2000px] scale-40 scale-x-50 relative -mt-[680px] md:-mt-[780px] -ml-[55px] lg:-mt-[780px] lg:ml-[780px] vert-move'>
               <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={Food1} alt='' className='phoneApp' />
            <Image src={Food2} alt='' className='phoneApp' />
            <Image src={Food3} alt='' className='phoneApp' />
            <Image src={Food4} alt='' className='phoneApp' />
            </div>
          </div>

          <div className="w-[500px] h-[800px] relative -top-[30px] left-[100px] vert-move">
            <Image src={Phone} alt='' className='phone' />
            <div className="phoneScreen">
            <Image src={Food5} alt='' className='phoneApps' />
            </div></div>

            <div className=''>
            <p className='pro text-gray-400 mt-[100px] w-[320px] font-semibold'> <span className='text-[#008080] font-bold'>React Native Food Delivery App.</span> This app makes use of Redux for State Management.
              Groq (Sanity API) which uses the same priniciples as GraphQL. Server Side Rendering. The Application also makes use of React Naviagation, Google Places Api and Tailwind CSS.
              Extremely user friendly application which also gives a time estimate for delivery arrival based on location.</p>
              <span className='text-[#008080] spanner'>Sanity, Tailwind CSS, React Native, I0S, Android, GraphQL</span>
          <div className='flex absolute top-[1460px] -ml-[20px]'>
        <Image src={sanityicon} alt='' className='w-[60px] rounded-full h-[60px]' />
        <Image src={tailwindicon} alt='' />
        <Image src={reacticon} alt='' />
        <Image src={iosicon} alt='' className='rounded-full' />
        <Image src={androidicon} alt='' />
        <Image src={graphqlicon} alt='' />
            </div> </div>

        

        </div>

        
        
      
   </motion.div>
   <motion.div className='lg:-mt-[1620px] lg:ml-[1300px] -mt-[1100px] -ml-[10px] ind scale-75 md:scale-90 lg:scale-75 wide1'>
   <div>
  <a href="https://github.com/Victoriaidunorba/FooddeliveryApp" target="_blank"  rel='noopener' className="button2">
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="button2__wrapper">
      <span className="button2__text text-gray-500">SOURCE CODE</span>
    </div>
    <div className="button2__box ind">
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