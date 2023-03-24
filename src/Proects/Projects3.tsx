import Image from 'next/image'
import React from 'react'
import firebaseicon from '../../public/firebase.png'
import reacticon from '../../public/reacticon.png'
import Movietab2 from '../../public/movietab2.png'
import tmdbicon from '../../public/tmdbicon.png'
import androidicon from '../../public/androidicon.png'
import nodeicon from '../../public/nodeicon.png'
import rubyicon from '../../public/rubyicon.png'
import Movielaptop from '../../public/movielaptop.png'
import Movietab from '../../public/movietabs.png'
import Moviephone from '../../public/moviephone.png'
import Moviephones from '../../public/moviephoness.png'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

export default function Projects3({ directionLeft }: Props) {
  return (
    <div>
      <div>
      {/* desktops and tablets */}
    <motion.div 
      // initial={{
      //   x: -200,
      //   opacity: 0,
      // }}
      // transition={{
      //   duration: 1.2,
      // }}
      // whileInView={{ opacity: 1, x:0}}
      // viewport={{once: true}}
    className='h-[2500px] relative overflow-hidden flex-col text-left lg:snap-center md:flex-row
    max-w-full justify-evenly mx-auto items-center hidden md:flex lg:-top-[150px] md:top-[10px] top-[600px] wide'>
    
    
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

        className='w-screen wide6 flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-48'>
        
        <div className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center lg:ml-[200px] justify-center p-20 md:p-44 h-screen mt-48'>

         
          <motion.div 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
          className='w-[1000px] h-[800px] relative -mt-[680px] ml-[310px] md:-mt-[480px] md:ml-[10px] lg:-mt-[350px] lg:ml-[100px] vert-move'>
             <Image src={Movielaptop} alt='' className='relative lg:w-[1200px] md:w-[800px] w-[450px] ml-[110px]'  />
          </motion.div>

          <motion.div 
          initial={{
            x: directionLeft ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
          className="w-[1200px] h-[800px] relative -top-[600px] md:-top-[20px] md:ml-[1100px] lg:-top-[540px] ml-[1380px] lg:-ml-[80px] vert-move">
            <Image src={Movietab} alt='' className='phone lg:w-[370px] md:w-[450px]' />
            </motion.div>

        </div>

            <p className='pro text-gray-400 absolute lg:top-[1300px] lg:left-[1100px] lg:w-[1100px] md:top-[750px] md:text-3xl md:-ml-[460px] md:w-[300px]'>
            <span className='text-[#008080] font-bold'>React Movie Application</span> Fully Responsive, Full stack application with very impressive animations. Data 
            fetching using TMDB API. Styling done using SCSS. <span className='text-[#008080] spanner'>React, TMDB API, Firebase, Node JS</span>
            </p>
        
         <div className='flex absolute lg:top-[1110px] md:top-[1080px] md:left-[15px] lg:ml-[160px]'>
        <Image src={reacticon} alt='' />
        <Image src={tmdbicon} alt='' className='w-12 h-12 mt-3' />
        <Image src={firebaseicon} alt='' />
        <Image src={nodeicon} alt='' className='w-[70px] h-[70px]' />
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
               <Image src={Movielaptop} alt='' className='movielaptop hidden' />
          </div>

          {/* <div className='w-[2000px] h-[800px] relative -mt-[680px] md:-mt-[780px] ml-[1380px] lg:-mt-[780px] lg:ml-[780px] vert-move'>
               <Image src={Movietab} alt='' className='phone' />
          </div> */}
                <div>
          <div className='w-[2000px] h-[800px] relative -mt-[680px]  ml-[1630px] vert-move'>
               <Image src={Movietab2} alt='' className='w-[370px]' />
          </div>

          <div className="w-[1500px] h-[800px] relative -top-[270px]  ml-[1680px] vert-move">
            <Image src={Moviephones} alt='' className='phone w-[250px]' />
          </div>
                </div>

                <p className='pro text-white absolute top-[1160px] w-[330px] font-semibold'><span className='text-[#008080] font-bold'>React Movie Application</span> Fully responsive application with very impressive animations. Data 
            fetching using TMDB API. Styling done using SCSS. <span className='text-[#008080] spanner'>React, TMDB API, Firebase, Node JS</span>
            </p>

          <div className='flex absolute -ml-[60px] top-[1080px]'>
        <Image src={reacticon} alt='' />
        <Image src={tmdbicon} alt='' className='w-12 h-12 mt-3' />
        <Image src={firebaseicon} alt='' />
        <Image src={nodeicon} alt='' className='rounded-full' />
            </div> 

        </div>

        

        
      
   </div>
   <motion.div className='lg:-mt-[1780px] -ml-[45px] ind cursor-pointer -mt-[1400px] md:-mt-[750px] md:-ml-[10px] lg:scale-75 md:scale-90 scale-75 lg:grid lg:grid-cols-1 lg:-ml-[20px] md:flex wide'>
   <div className=''>
  <a href="https://github.com/Victoriaidunorba/Vikymovies" target="_blank"  rel='noopener' className="button2">
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="button2__wrapper">
      <span className="button2__text text-gray-500">SOURCE CODE</span>
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
<a href="https://vikymovies.vercel.app/" target="_blank"  rel='noopener'>
<div className='button2 lg:flex flex md:flex lg:ml-[10px] ind md:mt-[150px] md:-ml-[60px] lg:mt-[65px] ml-[250px] mt-[50px]'>
  <h2 className='button2__text'>LIVE MODE</h2>
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