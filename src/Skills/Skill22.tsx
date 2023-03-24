import React from 'react'
import { motion } from "framer-motion";


type Props = {
    directionLeft?: boolean;
}

export default function Skill22({ directionLeft }: Props) {
  return (

    <div>
    <div className='group relative md:hidden lg:hidden flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAe1BMVEX///9WPXxPM3dMMHaglrO2rsRTOHpCH29VO3taQn9zYpFGJnLj4OhwXY5KLHRDIXD08/Z9bZilm7ZJKnPNyNa+t8rY1N+qobqDdJyJe6GZjq1fSILy8fTKxNPUz9yek7Hq6O7b2OI9F2yUh6ljTYVxX4/Dvc+xqcBoU4gxSCJUAAAESklEQVR4nO2da5eqIBSGvYxiYlipXWbsNs3U+f+/8NjM+YBKQmeVpPt9PrNY8SwI2G7AcQAAAAAAAAAAAAAAAAAAAAAAAAAAbJDkRfB4ijyx3bD/pAzilAvhPx4heBoHpe0G3k2yZn7oPo/QZ+th9ZbZhj1TyD8tbDOz3VBz8sx7upErXpbbbqopK9aLkStsZbuxZrzz3pS4Ln+33VwTFn0qqaQsbDdYz7a/gfML29puso4Zj3p2EvFXn33mz5+Dm4Rz243uZpn2rsR106XtZnfy3X83qTrKt+1md5HY6CZVR3nlVf6in/VrE++V5+OPviedX6IP2w2/zczO0KkGz+tOx7vMkpNsZ7vpNyl8S078wnbTb7Ky5uR1t8dvdqadauJ5s930m8BJGzhpAydt4KQNnLTROvGYlpSlPBN+eNcuYcBODPdqZZKv1hn3zLUM2ck9P/24F8LUChUnFYFnuDAm5MRx9syoq5By4iyFSTSTlhOnNJmBiDlxSoOgDDUnTq7/2ErOibPW/qXQc3LQhnlH4ySeKojXb9tWwDnWdZTROHFDJZ5gm0b+3llQcTK5Ocl6jfyJUjd4CDhxo89jrWLtfpuAEzea1CrWZXCQcOLyWv7E6TkTWh880Ek91PKkSb4PHuiknnyky1eg4ST6kovCyY+TSC6K/5MfJ65cFPPOlXAqF8X65KfoSSp50EULaDgRZ6lkoAtV03CSySW1aXIknHA58WirjT5ScJJt5IKuNko9fich28vlNvov86Nxoo4peX76XQsUXAzOA43GSaxifgoOtTovJjm3o3FixMno1BglJ8uJ2Ud0Ok5200/Doy90nMx2e88sBYWOkytno9FDy4njLAwOolJz4iwzOutYYxLt+dzROEnUHNrnk5a64TMaJz5Xk3qbc7NizR/taJzc3heHIgvqNUfdo4eAk4osrtWsySyg4cT1akFqTZSaiBNXrMyrpuLEZfIEdOyMP5Jx4tf+ZztjBmSc1D+jd+a0kXESCbn0e1fdZJy4qVz60rVso+OkdilQ5wqFqJMtnFxhcmk4uVK/1QRj56e0nG7RnVtAxgnfGddNxUnjQqDO9C0qThrp5Z1BWSJO2KVW9RH7nfCzcRvQnnasIAp9Nj80qu7+HjgaJyJVhqj9r037TvLO3c6InNzBTPPZi6ITMnnU5izInAc0Rp/RRs6JwT3oxJwcprqBQ87JwuiRCUJOykWGHD+ZsoiZ6TVTQ3ZieEfyYVmcPlKjG3IG7yT6UuZOy0z/THjKM/+Oi8iG7aTa3mmJNKkmo3PyLOAETgbuBPdRt8G95W1wv30bvIOgAO9ltMG7Km3w/o4CvNPUBu95KcC7b23wPqACvCOpAO+NKsC7tArwfrECvHOtAO+hq0jWzH+mltBn65de0SspgzjlQviPRwiexu1cpoGQ5EXweIp8eD0EAAAAAAAAAAAAAAAAAAAAAAAAAOPgLzAmXvPHw9xoAAAAAElFTkSuQmCC"
        // initial={{
        //     x: directionLeft ? -200 : 200,
        //     opacity: 0,
        // }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>BOOTSTRAP</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>

    {/* tabs adn laps */}

    <div className='group relative hidden md:flex lg:flex cursor-pointer top-48'>
        <motion.img 
        className='rounded-full border border-[#000] object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAe1BMVEX///9WPXxPM3dMMHaglrO2rsRTOHpCH29VO3taQn9zYpFGJnLj4OhwXY5KLHRDIXD08/Z9bZilm7ZJKnPNyNa+t8rY1N+qobqDdJyJe6GZjq1fSILy8fTKxNPUz9yek7Hq6O7b2OI9F2yUh6ljTYVxX4/Dvc+xqcBoU4gxSCJUAAAESklEQVR4nO2da5eqIBSGvYxiYlipXWbsNs3U+f+/8NjM+YBKQmeVpPt9PrNY8SwI2G7AcQAAAAAAAAAAAAAAAAAAAAAAAAAAbJDkRfB4ijyx3bD/pAzilAvhPx4heBoHpe0G3k2yZn7oPo/QZ+th9ZbZhj1TyD8tbDOz3VBz8sx7upErXpbbbqopK9aLkStsZbuxZrzz3pS4Ln+33VwTFn0qqaQsbDdYz7a/gfML29puso4Zj3p2EvFXn33mz5+Dm4Rz243uZpn2rsR106XtZnfy3X83qTrKt+1md5HY6CZVR3nlVf6in/VrE++V5+OPviedX6IP2w2/zczO0KkGz+tOx7vMkpNsZ7vpNyl8S078wnbTb7Ky5uR1t8dvdqadauJ5s930m8BJGzhpAydt4KQNnLTROvGYlpSlPBN+eNcuYcBODPdqZZKv1hn3zLUM2ck9P/24F8LUChUnFYFnuDAm5MRx9syoq5By4iyFSTSTlhOnNJmBiDlxSoOgDDUnTq7/2ErOibPW/qXQc3LQhnlH4ySeKojXb9tWwDnWdZTROHFDJZ5gm0b+3llQcTK5Ocl6jfyJUjd4CDhxo89jrWLtfpuAEzea1CrWZXCQcOLyWv7E6TkTWh880Ek91PKkSb4PHuiknnyky1eg4ST6kovCyY+TSC6K/5MfJ65cFPPOlXAqF8X65KfoSSp50EULaDgRZ6lkoAtV03CSySW1aXIknHA58WirjT5ScJJt5IKuNko9fich28vlNvov86Nxoo4peX76XQsUXAzOA43GSaxifgoOtTovJjm3o3FixMno1BglJ8uJ2Ud0Ok5200/Doy90nMx2e88sBYWOkytno9FDy4njLAwOolJz4iwzOutYYxLt+dzROEnUHNrnk5a64TMaJz5Xk3qbc7NizR/taJzc3heHIgvqNUfdo4eAk4osrtWsySyg4cT1akFqTZSaiBNXrMyrpuLEZfIEdOyMP5Jx4tf+ZztjBmSc1D+jd+a0kXESCbn0e1fdZJy4qVz60rVso+OkdilQ5wqFqJMtnFxhcmk4uVK/1QRj56e0nG7RnVtAxgnfGddNxUnjQqDO9C0qThrp5Z1BWSJO2KVW9RH7nfCzcRvQnnasIAp9Nj80qu7+HjgaJyJVhqj9r037TvLO3c6InNzBTPPZi6ITMnnU5izInAc0Rp/RRs6JwT3oxJwcprqBQ87JwuiRCUJOykWGHD+ZsoiZ6TVTQ3ZieEfyYVmcPlKjG3IG7yT6UuZOy0z/THjKM/+Oi8iG7aTa3mmJNKkmo3PyLOAETgbuBPdRt8G95W1wv30bvIOgAO9ltMG7Km3w/o4CvNPUBu95KcC7b23wPqACvCOpAO+NKsC7tArwfrECvHOtAO+hq0jWzH+mltBn65de0SspgzjlQviPRwiexu1cpoGQ5EXweIp8eD0EAAAAAAAAAAAAAAAAAAAAAAAAAOPgLzAmXvPHw9xoAAAAAElFTkSuQmCC"
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        />
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl font-bold bg-[#000] text-white opacity-100'>BOOTSTRAP</p>
        </div>
      </div>
        <div className='w-full absolute top-[30%] bg-[#f7abba]/10 left-0 h-[250px] -skew-y-12' />
    </div>
    </div>
  )
}