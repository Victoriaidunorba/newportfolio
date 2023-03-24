import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionRight?: boolean;
}

export default function Skill11({ directionRight }: Props) {
  return (

    <div>
    <div className='group relative md:hidden lg:hidden flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABBVBMVEX///8AlUYArkIAr0IAIC8Al0YAHy8AHSwAFCYAmkWOlprz9fUAGCnv8PHq7O37/PzJzc8uP0sAk0Hf4eMpOkUQKTdGU11dZ3AAkDq9wsUAABfc3+EAqjYAqC0ApyYAjTL0/PkAtEu0xMGepakLJTMACh8cLzs2RU/3/vvq+PBnxYC5xcVpc3uvtbnR1Nd1foSAiY5QXGSco6cAAABfaXG3vMBrdXx2x5TD69IAkhlFvmsAmjGKxp8ApENZw3pYt4Kr28DV7t+V27AaoFc1p2Vsvo6o4b2U0K98wZa56Mt00Zml2r4vu19tzIyq4LwQsF9Jv4ZlvZWcx7ZlrocAowuIv6gAABCOe7WcAAAIfElEQVR4nO2ae5uiyBWHUWqE5W4DdiP2TaFoewTUUXfSSfduz0wus5nOJptkvv9HSVEFKl528jyJXc8W5/1HRO0+P861CiQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDfAjdj3hbwY/w9bwv48f53d7xN4MbD7//A2wRevFw+XjQz4++eLuXHsx94m8GDm4dBW35sXfyZtyGvD5Xefmy1rn/kbcprU0gnEO1vrt/zNuZ1sZ+o9Ha7RcRfNEv8y2V7rb3Vunjmbc8r8qGSzrSfvWmO+PeXpMxtaW+dfWzKfHdzy3TLa+2ti6a0+ZdBu12LecJ1M9r8+6vS61t+J+KbkPJ3t3J73++ts0+8DXsFNjW+4E2rQVF/M2gf1t4Sf0n3/WBT5He0/5G3bSfmZiAf87vw5e7DoC0f0y6449dFXi6b3Lb21rXQGf/5qnI4uwZyTfuF0Lt3T/Uqv6O9dXbD28DTMR5s3M6ivq5d5D2cP122f93vAg9394Nf1y5wtbsbtDcdTj6kXdxd2+ermnSS7rvaxQ36D1shf6jHiTzU329P8oe1i1rpi6GuNtDu9Tji97/wtvI0jC/r0g/5XdRdy8817QfrvLBdrix1tVK/r/1H3maehJ/qk4182O9/5W3mSdhdyBzULugi/kn+dq1rCfowwpfmar+7rc90R7QLOdXe3Lb3OKD94w1vQ09AXbt8pL+3BNUubwX7Mb+Lqn1XOTn4rhkxX9T5cpJdX4ID2oWsdUV/Z8Nce3Owr13M2eZ+sJ/v+9qF7O/lPL894Mj72gVdwLMd6vruxZ52Qddxz/+VdjEfNLTl/b2L/ZgXc+9Cuperee5ovp99EnPPavtRG/lIfxe01EnS+GpnuNnXLmi6Ex7WEx0bbRp0b2Id9DJN/APaBX62dPv++8F13IWYO5WUl8HOWmZH+3eCVvmC56v1VMuKXkOqPOW+fit2R7vYT9g9bz9E3d56lpgONuJWOspL3fENcnvtWWJ5x+8CN7iSv121N7Wurl3YuWbNw2Azzj9uR7ywzxltGA/Wazn5561CJ+Ym5Q6fr6r9Svnns8YUupKfqrXs4O9r7YLuVe3zUBb7wT8q7eLX+DVfmPjLXyrpjUh2xpgl/OXbj0y6oE9XHWbMtu6CfxZBf/ZG/M6+zfh2QFpc8Mt1EfA3vK15ZcZfBoMfguDT2XWDcn3N07/+/XY4bMI4d4APQ0LI2wpOELcPLd5GcMIh2m3eRnAiGw7f8raBF+Fw6PC2gRduc0udZA2HLm8beKEPhyZvG3hhN7fMN1q79LaxLY4kvM7bAgAAAAAAAAAAAOD/gRmaBMslWJulnmtVJwVe/tkzw0uSxPd91PGSScqkZlHUTRLcQQgnE2H3d23LWUU+Woaus8yxqvSoUt1dJj7KnSBdKFFnxNvI02Fi3GX7WVaOfJSysxpiR2mEI3F3eHXP71ZZrXUwysojxIJ9EikpJ8tOz7Z2aRVFMxoEWqfDtJMA0DhZdnpq2l2MVep4Da21q7yrne4EkhSO5kHhlWw0X262nM2llmvL6taD5ZDa5ExXo7UeK80n06VFfsa+Y420Ffs77C9va5dWPnNzFfP2eTw5oaxvo48mPXVqrlCsqlPJnah91ZhUxo+82XSB4mRJjs3prGvMrFk/RkavFDTCk1EeK93zmWrRr/iT6axvzKoKVtc+Qv6ieCUxH0i2bWloyrfF28sF8pPZPHMWUbTozZ3gHKlz9tm0X/SgMEEKCQw97UW4m2jpqBcpU/r56F3hx0D1k17xCysxSEzbAUJeGSl17QHyacJrCHd7vQQrScr7ZpY9i5LCa3ov6hW26LOI+TXtUzdJIfaTwmaz69MvmonvFed1g3pbmkUz+r1Fn7XrVCmvzY72bK3dz9P5aOUhJeGd7yuFadQMVodTBRdBq/eMcvTQqOM3IrUO7cth32BvFXopwjguY72LO0xxXbuD/HOmneW7O4l8Pzulsm8zUahJ0lJNaAwGBtWeFWlJyeKIFikSEPR9akQhPW1Qv49Ueu3mCip1apHB/FnXnnainH5c1Xn93EerUyr7NhvtXaolY9odBZXaXT+iQVxpD1Sq3eorNDAWX+n3pigqdaZKh80sde3TSC2K5ka7FCi4y/cxpV3tTqndQGXMm110SLu0UjF5dd6xAWWK1DLmA4XlSF27nfhdGlcb7ZmPveJf2txu5B7R7kYsRIupxKB+3NWur3zjfJKUc2mqqEF1FLMCXtOeIpVdyyrfi+oXLWzJdjOLV7M7EPPUGb3IYwEZxrgs6KV2ozI+nzhOZbYbs/ZNMl89L09h7FUfZ9goczuPqkIyVwySBaETOC4nz0/KOp8aa7/T11QtHa/1WVT3yjpPtNPy7E7i5dbfIYMBe5vE5aWxyBhbHjqempeXYVLOd8W5IpecMF2aXDq9HSZRr7jsVt7BATFP15QoLdxg56oytXR9FOf0beaT/l58IY+iuUlOzb9ifJ5PpyOHes30yOLUtM28X2ZBqEUY46njZOmiX6WGG3R97I8cxyGfzm2q3clcHiVPn3he4nU1KUi8pOvlZIzzuonXKzLe1rw+Snql1atO5CN/Rap+x/dVLyt+iyNFVZERz6jbrBX+ipNkVvZsx/c97PtGbPjeqhrhMoywR34fI9zTWG200jDgM+O4rmmaoSXZxeaaqZM4sEzTCssthyBYOmUqBk5BJunLjLwWESJZaLHKFwnCRlkVw2C5DKvUNV3XzehvrE1E6255NjQ3Sx4uXv/fCNj+i+54fsLbllcm+FrtPARxj6slr083LluVFL6bc7Xk9TlXqmFcw1wN4YATq5pOxjI99cTdbj1Givt4li96ucB3WI5ipdOpNmqe0wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgN8t/AFkzxOsJTVNaAAAAAElFTkSuQmCC"
        // initial={{
        //     x: directionRight ? 200 : -200,
        //     opacity: 0,
        // }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
         <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>MONGODB</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* laptops and tablets */}

    <div className='group relative hidden lg:flex md:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/png;base64,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"
        initial={{
            x: directionRight ? 200 : -200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
         <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>MONGODB</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}