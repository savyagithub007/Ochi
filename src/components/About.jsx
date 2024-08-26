import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
    <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full border-t-[1px] mt-20 border-[#96a65c] flex '>
        <div className='w-1/2 pt-10'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='px-10 uppercase py-5 bg-zinc-900 mt-10 rounded-full text-white flex gap-10 items-center'>
        Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full">
            <FaArrowUpLong className='text-black rotate-[65deg]'/>
        </div>
        </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-red-500 rounded-2xl mt-10"></div>
      </div>
    </div>
  )
}

export default About

