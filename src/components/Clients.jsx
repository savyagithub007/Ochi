import React, { useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function Clients() {
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);
    
  return (
    <>
    <div  className='w-full h-screen py-6 bg-zinc-100 border-b-[1px] border-zinc-400'>
      <div className='clientheading px-[4vw] border-b-[1px] border-zinc-400 pb-8'>
        <h1 className='text-[4vw] text-zinc-900'>Clients' reviews</h1>
      </div>

      <div className='w-full flex gap-[5vw] pt-[1vw]'>
        <div className='left-container w-[50vw] h-[55vh] flex justify-between px-[4vw]'>
            <div>
                <h5 className='text-zinc-900'>Karman Ventures</h5>
            </div>
            <div>
                <h5 className='mb-[4vw] text-zinc-900'>Services:</h5>
                <div className='buttons flex flex-col gap-[1vw]'>
                    <div className='flex items-center gap-[5px]'>
                <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                 className={`border-[1px] border-zinc-600 rounded-full px-[10px] p-[2px] text-[#000] duration-300 ${hovered ? 'bg-zinc-900 text-[#fff]' : ''} `}>
                INVESTOR DECK
                </button>
                <span
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
                 className={`cursor-pointer border-[1px] border-zinc-900 rounded-full px-[5px] p-[5px] text-[#000] duration-300 ${hovered ? 'bg-zinc-900 text-[#fff]' : ''}`}>
                    <FiArrowUpRight />
                </span>
                    </div>

                    <div className='flex items-center gap-[5px]'>
                <button
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                 className={`w-[10vw] border-[1px] border-zinc-600 rounded-full px-[10px] p-[2px] text-[#000] duration-300 ${hovered1 ? 'bg-zinc-900 text-[#fff]' : ''} `}>
                SALES DECK
                </button>
                <span
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                 className={`cursor-pointer border-[1px] border-zinc-900 rounded-full px-[5px] p-[5px] text-[#000] duration-300 ${hovered1 ? 'bg-zinc-900 text-[#fff]' : ''}`}>
                    <FiArrowUpRight />
                </span>
                    </div>
                </div>
            </div>
        </div>

        <div className='right-container w-[50vw] h-[55vh] flex justify-between px-[4vw]'>
            <div>
                <h5 className='text-zinc-900 mb-[4vw]'>William Barnes</h5>
                <div className='w-[7vw] h-[7vw] rounded-[10px] mb-[1vw]'>
                <img className='w-full h-full rounded-[10px] object-cover' src="https://i.pinimg.com/564x/e6/3a/12/e63a1274d16ece550d0886e481cad659.jpg" alt="" />
                </div>
                <p className='text-zinc-600 tracking-tight'>They were transparent about the time and the stages of the <br />
                project. The end product is high quality, and I feel confident <br />
                about how they were handholding the client through the <br />
                process. I feel like I can introduce them to someone who <br />
                needs to put a sales deck together from scratch, and they <br />
                would be able to handhold the client experience from 0 to 100 <br />
                very effectively from story to design. 5/5</p>
            </div>

            <div>
                <h5 className='text-zinc-400'>READ</h5>
            </div>
        </div>
      </div>
    </div>

    <div className='partitions bg-zinc-100'>
        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Planetly</button>
            <h5 className='text-left'>Nina Walloch</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Wokiz Easy</button>
            <h5 className='text-left'>Tomer Levy</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Premium Blend</button>
            <h5>Ellen kim</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Hypercare Systems</button>
            <h5>Brendan Goss</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Officevibe</button>
            <h5>Raff Labrie</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Orderlion</button>
            <h5>Stefan Strohmer</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Black Book</button>
            <h5>Jaci Smith</h5>
            <button className='underline'>READ</button>
            </div>

        <div className='partition flex justify-between px-[4vw] py-4 border-b-[1px] border-zinc-400 text-zinc-900'>
            <button className='underline'>Trawa Energy</button>
            <h5>David Budde</h5>
            <button className='underline'>READ</button>
            </div>

    </div>
    </>
  )
}

export default Clients
