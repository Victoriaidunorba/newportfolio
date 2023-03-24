import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function Education({}: Props) {
       // Function will execute on click of button 

       const onButtonClick = () => { 

        // using Java Script method to get PDF file 

        fetch('Resume_2.pdf').then(response => { 

            response.blob().then(blob => { 

                // Creating new object of PDF file 

                const fileURL = window.URL.createObjectURL(blob); 

                // Setting various property values 

                let alink = document.createElement('a'); 

                alink.href = fileURL; 

                alink.download = 'Resume_2.pdf'; 

                alink.click(); 

            }) 

        }) 

        const ButtonClick2 = () => { 

          // using Java Script method to get PDF file 
  
          fetch('digitalskills_certificate.pdf').then(response => { 
  
              response.blob().then(blob => { 
  
                  // Creating new object of PDF file 
  
                  const fileURL = window.URL.createObjectURL(blob); 
  
                  // Setting various property values 
  
                  let alink = document.createElement('a'); 
  
                  alink.href = fileURL; 
  
                  alink.download = 'digitalskills_certificate.pdf'; 
  
                  alink.click(); 
  
              }) 
  
          })
      }
    }
  return (
	<div className=''>
		{/* <h3 className='absolute underliner top-[600px] ml-[400px] uppercase tracking-[25px] text-gray-400 text-1xl'>
        Certifications
    </h3>  */}
    <div className='body5 lg:-ml-[400px] lg:mt-[10px] mt:[25px] md:-mt-[170px]'>
<section className="flexx">
{/* <h3 className='absolute top-0 uppercase tracking-[15px] text-gray-400 text-1xl'>
        Certifications
    </h3> */}
	<ul className="ulx">
		<li className="lix">
			<span onClick={onButtonClick} className="list__item list__item-textx">
				1. <a href="#">Google Digital Marketing Certificate</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				2. <a href="#">Google UX Design Certificate</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				3. <a href="#">HIIT Web Development Certificate</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				4. <a href="#">AWS Amazon Cloud Services Certificate</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				5. <a href="#">Software Analysis & Testing Certification</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				6. <a href="#">Designing RESTful APIs</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				7. <a href="#">Google SEO Fundamentals</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				8. <a href="#">Cryptography: Security</a>
			</span>
		</li>
		<li className="lix">
			<span className="list__item list__item-textx">
				9. <a href="#">Fiber Optics Certification</a>
			</span>
		</li>
	</ul>
</section>
	</div>

					<div className="candidatos lg:w-[500px] md:w-[500px] w-[1000px] md:-mt-[160px] lg:-mt-[600px] -mt-[600px] ml-[750px]">
                      <div className="parcial">
                        <div className="info">
                          <div className="nome uppercase tracking-[5px]">Frontend Development</div>
                          <div className="percentage-num">90%</div>
                        </div>
                        <div className="progressBar">
                            <div className="percentagem frontend"></div>
                        </div>
                      </div>
                    </div>

					<div className="candidatos w-[500px] mt-[40px] ml-[750px]">
                      <div className="parcial">
                        <div className="info">
                          <div className="nome uppercase lg:tracking-[9px] md:tracking-[7px] tracking-[7px]">Backend Development</div>
                          <div className="percentage-num">50%</div>
                        </div>
                        <div className="progressBar">
                            <div className="percentagem backend"></div>
                        </div>
                      </div>
                    </div>

					<div className="candidatos w-[500px] mt-[40px] ml-[750px]">
                      <div className="parcial">
                        <div className="info">
                          <div className="nome uppercase tracking-[5px]">Graphics Design</div>
                          <div className="percentage-num">55%</div>
                        </div>
                        <div className="progressBar">
                            <div className="percentagem graphics"></div>
                        </div>
                      </div>
                    </div>

					<div className="candidatos w-[500px] mt-[40px] ml-[750px]">
                      <div className="parcial">
                        <div className="info">
                          <div className="nome uppercase tracking-[5px]">SEO/Digital Marketing</div>
                          <div className="percentage-num">80%</div>
                        </div>
                        <div className="progressBar">
                            <div className="percentagem digital"></div>
                        </div>
                      </div>
                    </div>

					<div className="candidatos w-[500px] engl mt-[40px] ml-[750px]">
                      <div className="parcial">
                        <div className="info">
                          <div className="nome uppercase md:tracking-[1px] lg:tracking-[4px]">Communication/Writing: English</div>
                          <div className="percentage-num">100%</div>
                        </div>
                        <div className="progressBar">
                            <div className="percentagem english"></div>
                        </div>
                      </div>
                    </div>


                    {/* button */}

                    <motion.div className='bff lg:mt-[100px] mt-[120px] lg:ml-[400px] ind cursor-pointer pon  md:scale-90 scale-75 lg:grid lg:grid-cols-1  md:flex wide'>
   <div className=''>
  <div onClick={onButtonClick} className="button2">
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="plates"></div>
    <div className="button2__wrapper">
      <button className="button2__text text-[#008080] font-normal">DOWNLOAD CV</button>
    </div>
    <div className="button2__box">
      <div className="inner inner__top"></div>
      <div className="inner inner__front"></div>
      <div className="inner inner__bottom"></div>
      <div className="inner inner__back"></div>
      <div className="inner inner__left"></div>
      <div className="inner inner__right"></div>
    </div>
  </div>
</div>
        </motion.div>
	</div>
  )
}