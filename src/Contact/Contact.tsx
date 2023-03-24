import React from 'react'
import {PhoneIcon,MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Contacts from '../pages/Contacts'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div>
    <div className='h-screen flex bg-transparent relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-x-10'>
          <h3 className='absolute top-64 uppercase tracking-[20px] text-white text-4xl'>Contact</h3>

          <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl mt-56 md:mt-0 lg:mt-0 font-semibold text-center'>Your most capable developer</h4>
           
          </div>
          <div className='space-y-10 -mt-48 md:mt-0 lg:mt-0'>
        <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#023020] h-7 w-7 animate-bounce bg-transparent'  />
            <p className='text-2xl'>+234 708 013 941 3</p>
        </div>
     


        <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#fff] h-7 w-7 animate-pulse bg-transparent'  />
            <p className='text-2xl'>idunorbavictoria@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#fff] h-7 w-7 animate-pulse bg-transparent'  />
            <p className='text-2xl'>Lagos, Nigeria</p>
        </div>
        </div>
    </div>
    <Contacts />
    </div>
  )
}