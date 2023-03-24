import Image from 'next/image'
import React from 'react'
import crypto from '../../public/crypto.png'
import digital from '../../public/digital.png'
type Props = {}

export default function Certifications({}: Props) {
  return (
    <div className='lg:mt-[300px] bg-[#111] '>
        <div className="wrapperv">
	<div className="outerv">
		<div className="cardv firs">
        {/* style="--dealy:-1;" */}
			<div className="content">
				<Image src={digital} alt='' />	
			</div>
		</div>

		<div className="cardv second">
        {/* style="--dealy:0;" */}
			<div className="contentv">
				
			<div className="content">
				<Image src={digital} alt='' />	
			</div>
			</div>
		</div>

		<div className="cardv third">
        {/* style="--dealy:1;" */}
			<div className="contentv">
				
            <div className="content">
				<Image src={digital} alt='' />	
			</div>
			</div>
		</div>

		<div className="cardv fourth">
        {/* style="--dealy:2;" */}
			<div className="contentv">
				
				<div className="content">
				<Image src={crypto} alt='' />	
			</div>
			</div>
		</div>

		<div className="cardv fifth">
        {/* style="--dealy:2;" */}
			<div className="contentv">
				
            <div className="content">
				<Image src={crypto} alt='' />	
			</div>
			</div>
		</div>
	</div>
</div>


    </div>
  )
}