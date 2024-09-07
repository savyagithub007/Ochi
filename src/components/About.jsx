import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";





function About() {

  const [hovered, setHovered] = useState(false);
  

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.09" className='w-full p-[3.5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black pb-[5vw]'>
    <h1 className="font-['Neue Montreal'] text-[4.2vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo-­ple.</h1>
      <div className='w-full border-t-[1px] mt-20 border-[#96a65c] flex '>
        <div className='w-1/2 pt-10'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
         className='px-10 uppercase py-5 bg-zinc-900 mt-10 rounded-full text-white flex gap-10 items-center'>
        Read More
        <div className={`w-2 h-2 bg-zinc-100 rounded-full duration-300 ${hovered ? 'scale-150' : 'scale-100'}`}>
            <FaArrowUpLong className='text-black rotate-[65deg]'/>
        </div>
        </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-2xl mt-10">
        <img className='w-full h-full object-cover rounded-2xl' src="https://i.pinimg.com/564x/6d/83/55/6d8355d3dc4442132c3c34a06b9cd9ac.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About



