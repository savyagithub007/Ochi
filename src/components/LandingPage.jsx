import Aos from 'aos';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import "aos/dist/aos.css";


function LandingPage() {

    useEffect(() =>{
        Aos.init({
            // disable: "phone",
            duration: 1500,
            easing: "ease-in-cubic"
        });
    }, []);

    const [hovered, setHovered] = useState(false);
    
  return (    
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='landing w-full h-screen text-[#212121] bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-[10vw] px-[3.5vw]'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return  <div className='masker'>
                    <div className='w-[50vw] flex items-end overflow-hidden'>
                        {index === 1 && (
                            // motion is a framer supported component
                <motion.div
                initial={{width:0}} 
                animate={{width: "9vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                className="mr-[1vw] w-[9vw] rounded-md h-[6vw] relative top-[-1vw] bg-green-500">
                    <img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "0% 90%", borderRadius: "5px"}} src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1 data-aos="fade-up" data-aos-delay="50" className="pt-[1vw] -mb-[0.3vw] uppercase text-[9.5vw] leading-[7.3vw] tracking-tight leading-[6.5vw] font-bold">
                    {item}
                    </h1>
                    </div>
            </div>
            })}
        </div>       
        <div className=" border-t-[1px] border-zinc-400 mt-20 text-[1.2vw] flex justify-between items-center py-2 px-20">
            {["For pulic and private companies", "From the first pitch to IPO"].map((item, index)=>(
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
))}
        <div
         className='start flex items-center gap-1'>
            <div>
               <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`w-[100%] h-[100%] border-[1px] border-zinc-900 py-[1.5px] px-3 uppercase text-[1.2vw] bg-zinc-100 rounded-full duration-[400ms] tracking-tight ${hovered ? 'bg-zinc-900 text-[#fff]' : ''}`}>
                start the project
               </button>
                </div>
            <div className='w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-600'>
                <span 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`flex justify-center items-center cursor-pointer w-[100%] h-[100%] bg-zinc-100 rounded-full duration-[400ms] ${hovered ? 'bg-zinc-900 text-[#fff]' : ''}`}>
                <FiArrowUpRight />
                </span>
            </div>
        </div>
        </div>
        <h5 className='flex justify-center p-[2vw] text-[#999]'>Scroll down</h5>
    </div>
  )
}

export default LandingPage
