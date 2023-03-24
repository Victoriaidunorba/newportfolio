import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Chevronicon from '../../public/chevronicon.png'
import $ from "jquery";
import logo from '../../public/logo.png'
import arrow from '../../public/arrow.gif'
import bookicon from '../../public/book.png'
import playgroundicon from '../../public/playgroundicon.png'
import skillicon from '../../public/skill.png'
import contacticon from '../../public/contact.png'
import portfolioicon from '../../public/portfolio.png'
import incognitoicon from '../../public/incognito.png'
import Link from 'next/link';


type Props = {}

export default function uses({}: Props) {


  return (
    <div className='bad bg-black lg:h-[4500px] relative'>
      
      <div>
    <div className='text-white h-screen justify-center text-center'>
      <h3 className='lg:text-4xl lg:pt-[60px] lg:-ml-[100px] text-3xl tracking-[28px] font-sans uppercase text-[#008080] lg:text-[#800000] md:text-[#800000] md:font-bold'>Uses</h3>
      <p className='lg:w-[500px] md:w-[500px] md:text-3xl w-[300px] text-center justify-center lg:ml-[450px] user text-2xl font-light lg:mt-[20px]'>A somewhat comprehensive list of tools, apps, 
      hardware, and more that I use on a daily basis to design and code things. And yeah, that is a GIF from an Anime called CyberPunk in the background.</p>
    </div>

    <div className='text-gray-400 h-screen justify-center text-center lg:-mt-[330px] md:-mt-[500px] -mt-[200px]'>
      <h3 className='lg:text-4xl text-3xl lg:pt-[60px] tracking-[28px] font-sans uppercase text-[#008080] lg:text-[#800000]'>Design</h3>
      <div className='flex'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] w-[320px] text-center justify-center lg:ml-[10px] ml-[30px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>Figma is the main tool I use for UX Design.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] w-[320px] ml-[30px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>I have also been using AdobeXD for editing and design as well.</p>
      </div>

      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] w-[320px] ml-[30px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>I use blender for designs (sometimes). <a href="https://sketchfab.com/"><span className='text-[#008080] font-semibold'>Sketchfab</span></a> is my go to for .gltf and 3D graphics.</p>
      </div>

      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] w-[320px] ml-[30px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>Copped an AutoDesk Certification for a course in my second year of Uni. So I guess I know a bit of that as well. (AutoCad is used for Engineering Drawing)</p>
      </div>
    </div>

    <div className='text-gray-400 h-screen justify-center text-center lg:mt-[100px] -mt-[100px]'>
      <h3 className='lg:text-4xl text-3xl lg:pt-[60px] lg:tracking-[28px] tracking-[10px] font-sans uppercase text-[#008080] lg:text-[#800000]'>Development</h3>
      <div className='flex'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px]  font-light lg:mt-[20px]'>I use Visual Studio Code as my text editor for Web Development. Apache NetBeans IDE for Java Development.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px]  font-light lg:mt-[20px]'>Chrome and Safari are my main browsers for both development and general use.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>For Data Visualization I use Tableu. Took a free course on Udacity: <a href="https://www.udacity.com/course/data-visualization-in-tableau--ud1006"><span className='text-[#008080] ind cursor-pointer font-semibold'>Data Visualization with Tableu</span></a></p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>React is my front end Javascript library of choice. I have just found it interesting.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'>For 3D effects I use three.js. Also took a free course on Udacity: <a href="https://www.udacity.com/course/interactive-3d-graphics--cs291"><span className='text-[#008080] ind cursor-pointer font-semibold'>Interactive 3D Graphics</span></a></p>
      </div>

    </div>

    <div className='text-gray-400 h-screen justify-center text-center lg:mt-[250px] md:-mt-[80px] mt-[60px]'>
      <h3 className='lg:text-4xl text-3xl lg:pt-[60px] lg:tracking-[28px] tracking-[10px] font-sans uppercase text-[#008080] lg:text-[#800000]'>Current Build</h3>
      <div className='flex mt-[15px]'>
        {/* <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' /> */}
      <p className='lg:w-[500px] text-center justify-center lg:ml-[320px] ml-[50px] user text-3xl font-bold lg:mt-[20px] text-[#800000]'>For this build I used:</p>
      </div>
      <div className='flex mt-[10px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'><span className='text-[#800000] font-normal'>Development:</span> Chrome & Edge.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'><span className='text-[#800000] font-normal'>Javascript Library:</span> Next JS 13 with Typescript.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'><span className='text-[#800000] font-normal'>Styling:</span> I made use of Tailwind CSS and CSS3.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'><span className='text-[#800000] font-normal'>Icons:</span> Most icons in this build were gotten from <span className='text-[#008080]'>Icons8</span>.</p>
      </div>
      <div className='flex mt-[30px]'>
        <ChevronRightIcon color='#fff' width={20} className='relaive lg:ml-[400px] hidden lg:flex md:flex' />
      <p className='lg:w-[500px] text-center justify-center lg:ml-[10px] user text-2xl md:text-3xl md:w-[450px] font-light lg:mt-[20px]'><span className='text-[#800000] font-normal'>Animation:</span>All animations were done using <span className='text-[#008080]'>Framer Motion</span> & <span className='text-[#008080]'>CSS3</span>.</p>
      </div>
 
    </div>
    
    <div className='text-gray-400 h-screen justify-center text-center lg:-mt-[200px]'>
     
    </div>

    <section className='lg:-mt-[2800px] lg:h-[700px] lg:flex md:flex hiddens md:-mt-[400px] h-[1000px] md:h-screen wrap1'>
    <ul className='h-screen items-center cursor-pointer uppercase'>
      <li className='py-2 -px-72 -ml-[10px] -mt-[30px] border-[#fff] transition-all 
      hover:border-black'>
        <Image src={logo} alt='logo' className='w-96' />
      </li>
            <li className='wrapli ind px-6 py-2 -mt-[1px] border-[#000] text-center uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='/About'>About</Link><Image src={incognitoicon} alt='' className='w-[20px]'/></li>
            <li className='wrapli px-6 py-2 mt-[5px]  border-[#000] text-center uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href=''>Education</Link><Image src={bookicon} alt='' className='w-[30px]'/></li>
            <li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='/AllProjects'>Portfolio</Link><Image src={portfolioicon} alt='' className='w-[20px]'/></li>
            <li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='/SkillHolder'>Skills</Link><Image src={skillicon} alt='' className='w-[20px]'/></li>
            <li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='#ContactPage'>Contact</Link><Image src={contacticon} alt='' className='w-[20px]'/></li>
            <li className='wrapli2 px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='/Playground'>Playground</Link><Image src={playgroundicon} alt='' className='w-[30px]'/></li>
      

      <li className='px-6 py-2 mt-[25px] text-center border-[#000]  uppercase text-xs tracking-widest  transition-all 
      hover:border-black hover:text-white'><Link href='/'><Image src={arrow} alt='' className='w-[80px]' /></Link></li>
            
        </ul>
        </section>



    </div>


    </div>
  )
}