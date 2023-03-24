import Project5 from '@/Proects/Project5'
import Project6 from '@/Proects/Project6'
import Projects7 from '@/Proects/Projects7'
import Projects8 from '@/Proects/Projects8'
import Projects9 from '@/Proects/Projects9'
import Image from 'next/image'
import React from 'react'
import number1 from '../../public/number1.gif'
import number2 from '../../public/number2.gif'
import number3 from '../../public/number3.gif'
import number4 from '../../public/number4.gif'
import number6 from '../../public/number6.gif'
import number5 from '../../public/number5.gif'
import number7 from '../../public/number7.gif'
import number8 from '../../public/number8.gif'
import number9 from '../../public/number9.gif'
import Projects10 from '@/Proects/Projects10'
import Projects11 from '@/Proects/Projects11'
import Projects12 from '@/Proects/Projects12'
import Projects13 from '@/Proects/Project13'

type Props = {}

export default function AllProjects({}: Props) {
  return (
    <div>
    <div className='relative overflow-hidden lg:h-[7000px] h-[12000px] md:h-[13000px] bg-[#000]'>
{/* disney clone 1 */}
      <div className=''>
      <h1 className='uppercase text-center justify-center h-[50px] pt-20 lg:text-5xl md:text-2xl font-bold ttext-2xl text-3xl text-[#008080]'>Disney Cl<span className='underlined'>one usi</span>ng Typescript</h1>
        <div className='justify-start text-right align-middle items-right self-right lg:mt-[40px]'>
          <Image src={number1} alt='' className='lg:w-48 md:w-40 md:h-36 lg:flex md:flex hidden lg:h-48 lg:-mt-[100px]' />
        </div>
        <Project5 />
      </div>


{/* fashion1 */}

    <div className='h-[2100px] lg:h-[800px] overflow-hidden relative lg:mt-[400px] mt-[100px] '>
    <div className='bg-[#000]'>
    <h1 className='uppercase text-center justify-center pt-20 text-3xl md:text-2xl md:ml-[40px] lg:text-5xl font-bold text-[#008080]'>E-commerce W<span className='underlined'>ebsite us</span>ing React JS</h1>
    <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
    <Image src={number2} alt='' className='md:w-40 md:h-36 -mt-[100px] lg:w-48 lg:flex md:flex hidden lg:h-48' />
    </div>
    </div>
    <Project6/>
    </div>

   {/* react native food delivery app */}

   <div className='lg:mt-0 -mt-[1000px] md:-mt-[850px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center lg:pt-20 text-3xl md:text-2xl md:ml-[40px] lg:text-5xl font-bold text-[#008080]'>React Nativ<span className='underlined'>e Food D</span>elivery App</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number3} alt='' className='md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects7 />
      </div>
      </div>

  {/* social media facebook clone */}

  <div className='mt-[100px] md:mt-[1020px] lg:mt-[100px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 text-3xl lg:text-5xl font-bold text-[#008080]'>Faceb<span className='underlined'>ook C</span>lone</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number4} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects8 />
      </div>
      </div>

    {/* fashion2 */}

    <div className='mt-[100px] lg:mt-[460px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 text-3xl lg:text-5xl font-bold text-[#008080]'>Fashi<span className='underlined'>on St</span>ore</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number5} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects9 />
      </div>
      </div>

   {/* fitness app */}

   <div className='mt-[100px] lg:mt-[250px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 md:text-2xl  lg:text-5xl text-3xl font-bold text-[#008080]'>React Nat<span className='underlined'>ive Fitne</span>ss App</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number6} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects10 />
      </div>
      </div>

         {/*chef of laygurss */}

   <div className='lg:mt-[250px] mt-[70px] md:mt-[170px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 lg:text-5xl md:text-2xl md:ml-[50px] text-3xl font-bold text-[#008080]'>Full-Stack Fo<span className='underlined'>od Orderi</span>ng Platform</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number7} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects12 />
      </div>
      </div>

   {/* uber clone */}

   <div className='lg:mt-[50px] mt-[130px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 lg:text-5xl text-3xl font-bold text-[#008080]'>Ube<span className='underlined'>r C</span>lone</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number8} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects11 />
      </div>
      </div>

  {/* kuda bank */}

  <div className='mt-[100px]'>
    <div className='bg-black'>
      <h1 className='uppercase text-center justify-center pt-20 lg:text-5xl text-3xl font-bold text-[#008080]'>Kud<span className='underlined'>a B</span>ank</h1>
        <div className='justify-start text-right align-middle items-right self-right  lg:mt-[40px]'>
          <Image src={number9} alt='' className='w-48 h-48 md:w-40 md:h-36 lg:flex md:flex hidden -mt-[100px]' />
        </div>
        <Projects13 />
      </div>
      </div>

    </div>



{/* mobuk */}



    </div>
  )
}