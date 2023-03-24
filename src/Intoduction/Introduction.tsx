import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import logo from '../../public/logo.png'
import arrow from '../../public/arrow.gif'
import bookicon from '../../public/bookicon.png'
import playgroundicon from '../../public/playgroundicon.png'
import skillicon from '../../public/skillicon.png'
import contacticon from '../../public/contacticon.png'
import portfolioicon from '../../public/portfolioicon.png'
import incognitoicon from '../../public/incognitoicon.png'
import MainHeader from '@/Header/MainHeader'
import Headers2 from '@/Header/Headers2'

type Props = {}

export default function Introduction({}: Props) {
  const [text, count] = useTypewriter({
    words: [
    "我的名字是维多利亚。",
    "<اسمي فيكتوريا.tsx />",
    "私の名前はビクトリアです。"
    ],
    loop: true,
    delaySpeed: 2000
})
  return (
    <div>
    <div className='md:h-[500px] h-[500px]'>
    <div className='text-4xl lg:snap-start lg:h-screen md:text-6xl lg:text-6xl wide md:scale-95 wide5'>
    <div className='flex flex-col space-y-8 items-start justify-start text-center overflow-hidden w-full mt-36'>
    <div>
    <h1 className='text-[1em] lg:text-5xl font-semi-bold px-40 lg:px-40 md:px-40 mt-7'>
            <span className='mr-16 lg:-mr-[600px] md:mr-24 text-white texts'>{text}</span>
            {/* <Cursor cursorColor='#008080' /> */}
        </h1>
    <div className='mr-16 lg:ml-[226px]'>   
    <h1 className='communincations uppercase lg:text-[#2d2d2d]  md:text-[#2d2d2d] md:bg-transparent lg:bg-transparent text-[#2d2d2d]'>Communications</h1>
    <h1 className='engineer'>ENGINEER</h1>
    </div>
    </div>

    
    </div>
 

    </div>
      <section className='lg:-mt-[600px] lg:h-[660px] md:-mt-[300px] h-[1000px] md:h-screen wrap'>
    <ul className='h-screen items-center cursor-pointer uppercase'>
      <li className='py-2 -px-72 -ml-[10px] -mt-[30px] border-[#fff] transition-all 
      hover:border-black'>
        <Image src={logo} alt='logo' className='w-96' />
      </li>
      <Link href='/About'><li className='wrapli px-6 py-2 -mt-[1px] border-[#000] text-center uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>About</span><Image src={incognitoicon} alt='' className='lg:w-[20px] md:w-[40px] md:hover:w-[55px]'/></li></Link>
      <Link href='/SkillHolder'><li className='wrapli px-6 py-2 mt-[5px]  border-[#000] text-center uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>Education</span><Image src={bookicon} alt='' className='lg:w-[30px] md:w-[50px] md:hover:w-[70px]'/></li></Link>
      <Link href='/AllProjects'><li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>Portfolio</span><Image src={portfolioicon} alt='' className='lg:w-[20px] md:w-[40px] md:hover:w-[55px]'/></li></Link>
      <Link href='/SkillHolder'><li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>Skills</span><Image src={skillicon} alt='' className='lg:w-[20px] md:w-[40px] md:hover:w-[55px]'/></li></Link>
      <Link href='/Contacts'><li className='wrapli px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>Contact</span><Image src={contacticon} alt='' className='lg:w-[20px] md:w-[40px] md:hover:w-[55px]'/></li></Link>
      <Link href='/Playground'><li className='wrapli2 px-6 py-2 mt-[5px] text-center border-[#000]  uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><span className='md:hidden lg:flex hidden'>Playground</span><Image src={playgroundicon} alt='' className='w-[20px] md:w-[40px] md:hover:w-[55px]'/></li></Link>
      

      {/* <li className='px-6 py-2 mt-[25px] text-center border-[#000]  uppercase text-xs tracking-widest text-[#fff] transition-all 
      hover:border-black hover:text-[#ffcc00]'><Link href='/'><Image src={arrow} alt='' className='w-[80px]' /></Link></li> */}
            
        </ul>
        </section>
        
       

    </div>
    
    </div>

  )
}