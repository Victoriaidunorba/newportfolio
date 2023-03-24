import Skill from '@/Skills/Skill'
import React from 'react'
import Certifications from './Certifications'
import Education from './Education'

type Props = {}

function SkillHolder({}: Props) {
  return (
    <div className='smallphone'>
    <div className='bg-black lg:h-[1600px] h-[3800px] md:h-[3400px]'>
        <div className='bg-black relative'> 
            <Education  />
        </div>
        
        {/* <div className='lg:mt-[100px] mt-[70px] md:mt-[300px] overflow-hidden'>
        <Certifications/>
        </div> */}

        <div className='lg:mt-[100px] mt-[200px]'>
        <Skill />
        </div>
        
    </div>
  </div>
    
  )
}

export default SkillHolder