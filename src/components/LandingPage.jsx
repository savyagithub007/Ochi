import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
                return  <div className='masker bg-red-500'>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                <div className=" mr-[1vw] w-[9vw] rounded-md h-[5.5vw] relative top-[0.5vw] bg-green-500"></div>)}

                <h1 className="pt-[1vw] -mb-[0.3vw] uppercase text-[7vw] leading-[7vw] tracking-tighter font-['Founders Grotesk'] leading-[6.5vw] font-bold">
                    {item}
                    </h1>
                    </div>
            </div>
            })}
        </div>       
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For pulic and private companies", "From the first pitch to IPO"].map((item, index)=>(
                <p className="text-md font-light tracking-tight leading-none">{item}</p>
))}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</div>
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
