import Aos from 'aos';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import "aos/dist/aos.css";




function LandingPage() {

    useEffect(() =>{
        Aos.init({
            disable: "phone",
            duration: 1500,
            easing: "ease-in-cubic"
        });
    }, []);
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen text-[#212121] bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-[10vw] px-[3.5vw]'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return  <div className='masker'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            // motion is a framer supported component
                <motion.div 
                initial={{width:0}} 
                animate={{width: "9vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                className="mr-[1vw] w-[9vw] rounded-md h-[6vw] relative top-[0.5vw] bg-green-500">
                    <img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "0% 90%", borderRadius: "5px"}} src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1 data-aos="fade-up" data-aos-delay="50" className="pt-[1vw] -mb-[0.3vw] uppercase text-[7vw] leading-[7vw] tracking-tighter font-['Founders Grotesk'] leading-[6.5vw] font-bold">
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
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>
                start the project
                </div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-600'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage
