import Image from 'next/image'
import React from 'react'
import firebaseicon from '../../public/firebase.png'
import reacticon from '../../public/reacticon.png'
import Movietab2 from '../../public/movietab2.png'
import disneyicon from '../../public/disneyicon.png'
import androidicon from '../../public/androidicon.png'
import typescripticon from '../../public/typescripticon.png'
import rubyicon from '../../public/rubyicon.png'
import disneylaptop from '../../public/disneylaptop.png'
import disneytab from '../../public/disneytab.gif'
import disneyphones from '../../public/disneyphone.png'
import Moviephones from '../../public/moviephoness.png'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

export default function Project5({ directionLeft }: Props) {
  return (
    // DISNEY CLONE
    <div className=''>
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
    max-w-full justify-evenly mx-auto items-center hidden md:flex lg:-top-[770px] md:-top-[200px] top-[600px] wide'>
    
    
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
             <Image src={disneylaptop} alt='' className='relative lg:w-[1200px] md:w-[800px] w-[450px] ml-[110px]'  />
          </motion.div>

          <motion.div 
          initial={{
            x: directionLeft ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
          className="w-[1200px] h-[800px] relative -top-[600px] md:-top-[20px] md:ml-[1100px] lg:-top-[540px] ml-[1380px] lg:-ml-[80px] vert-move">
            <Image src={disneytab} alt='' className='phone lg:w-[370px] md:w-[450px]' />
            </motion.div>

        </div>

            <p className='pro text-gray-400 absolute lg:top-[1300px] lg:left-[1100px] lg:w-[1100px] md:top-[750px] md:text-3xl md:-ml-[460px] md:w-[300px]'>
            <span className='text-[#008080] font-bold'>NEXT JS Disney Clone</span>  with Typescript. Redirects with NEXT Router and NEXT Auth JS, Firebase as Backend, NextAuth.js
            for Client Side Authentication. Styling done using CSS Styled Components, sliders implemented with 'Slider row' and 'React-Slick' package. Fetches API with Get Server Side Props. Dynamic header for logged in & out state.
            Fetches individual movies data with SSG. Creating and deploying API. <span className='text-[#008080] spanner'>(React Js, Disney API, Firebase, Typescript)</span>
            </p>

        
         <div className='flex absolute lg:top-[1530px] md:top-[1340px] md:left-[450px] lg:ml-[180px]'>
        <Image src={reacticon} alt='' />
        <Image src={disneyicon} alt='' />
        <Image src={firebaseicon} alt='' />
        <Image src={typescripticon} alt='' className='w-[70px] h-[70px] rounded-full' />
        
            </div> 

        </motion.div>
 
   </motion.div>
   </div>
    {/* mobile view */}
   <div 
    className='h-[4500px] relative flex overflow-hidden md:hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center -top-[800px]'>
    
    
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-48'>
          <div className='w-[2000px] h-[800px] relative -mt-[680px] md:-mt-[780px] ml-[1380px] lg:-mt-[780px] lg:ml-[380px] vert-move'>
               <Image src={disneylaptop} alt='' className='movielaptop hidden' />
          </div>

          {/* <div className='w-[2000px] h-[800px] relative -mt-[680px] md:-mt-[780px] ml-[1380px] lg:-mt-[780px] lg:ml-[780px] vert-move'>
               <Image src={Movietab} alt='' className='phone' />
          </div> */}
                <div>
          <div className='w-[1000px] h-[800px] relative -top-[300px]  ml-[1410px] vert-move'>
               <Image src={disneytab} alt='' className='w-[370px]' />
          </div>

          <div className="w-[1500px] h-[800px] relative -top-[270px]  ml-[1680px] vert-move">
            <Image src={disneyphones} alt='' className='phone w-[250px] hidden' />
          </div>
                </div>

                <p className='pro text-gray-300 text-2xl absolute top-[1500px] w-[330px] font-semibold'><span className='text-[#008080] font-bold'>NEXT JS Disney Clone with Typescript.</span> Redirects with NEXT Router and NEXT Auth JS, Firebase as Backend, NextAuth.js
            for Client Side Authentication. Styling done using CSS Styled Components, sliders implemented with 'Slider row' and 'React-Slick' package. Fetches API with Get Server Side Props. Dynamic header for logged in & out state.
            Fetches individual movies data with SSG. Creating and deploying API. <span className='text-[#008080] spanner'>(React Js, Disney API, Firebase, Typescript)</span>
            </p>

          <div className='flex absolute -ml-[60px] top-[1420px]'>
        <Image src={reacticon} alt='' />
        <Image src={disneyicon} alt='' />
        <Image src={firebaseicon} alt='' />
        <Image src={typescripticon} alt='' className='rounded-full' />
            </div> 

        </div>

        

        
      
   </div>
   <motion.div className='lg:-mt-[2500px] -ml-[45px] ind cursor-pointer -mt-[4070px] md:-mt-[500px] md:ml-[650px] lg:scale-75 md:scale-90 scale-75 lg:grid lg:grid-cols-1 lg:-ml-[20px] md:flex wide'>
   <div className=''>
  <a href="https://github.com/Victoriaidunorba/Disneyclone"  target="_blank"  rel='noopener'  className="button2">
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
<a href="#" target="_blank"  rel='noopener'>
<div className='button2 lg:flex flex md:flex lg:ml-[10px] md:mt-[150px] md:-ml-[60px] lg:mt-[65px] ml-[250px] mt-[50px]'>
  <h2 className='button2__text text-gray-300 md:text-gray-300 md:text-3xl'>LIVE MODE</h2>
  <div className='mt-5 '>
  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
</div>
</div>
</a>
        </motion.div>

   </div>
  )
}