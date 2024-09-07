import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className='overflow-y-hidden w-full py-20 rounded-tl-3xl rounded-tr-3xl overflow-hodden bg-[#004D43]'>
      <div className='text border-t-[1px] items-center  border-b-[1px] border-zinc-300 uppercase flex whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 15}}  className='text-[20vw]  leading-none font-["Founders Grotesk"] font-semibold] pt-3 font-semibold pr-[5vw] tracking-tighter -mt-[0vw]'>We are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 15}}  className='text-[20vw]  leading-none font-["Founders Grotesk"] font-semibold] pt-3 font-semibold pr-[5vw] tracking-tighter -mb-[0vw]'>We are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 15}}  className='text-[20vw]  leading-none font-["Founders Grotesk"] font-semibold] pt-3 font-semibold pr-[5vw] tracking-tighter -mb-[0vw]'>We are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 15}}  className='text-[20vw]  leading-none font-["Founders Grotesk"] font-semibold] pt-3 font-semibold pr-[5vw] tracking-tighter -mb-[0vw]'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
