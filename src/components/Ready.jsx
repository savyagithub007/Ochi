import React, { useEffect, useState } from 'react'

function Ready() {
  const [rotate, setRotate] = useState(0)
  const [blackhover, setblackHover] = useState(false)
  const [whitehover, setwhiteHover] = useState(false)

  useEffect(() =>{
    window.addEventListener("mousemove", (e) =>{
      let mouseX = e.clientX 
      let mouseY = e.clientY

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var  angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  })

  return (
    <div  className='eyes w-full min-h-[135vh] overflow-hidden bg-[#CDEA68] relative'>
        <div className='heading pt-[8vw] text-[14vw] font-semibold leading-[12vw] text-center text-zinc-900'>
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT?</h1>
        </div>

        <div className='flex flex-col text-zinc-700 items-center gap-[15px] pt-[2vw]'>
            <button
            onMouseEnter={() => setblackHover(true)}
            onMouseLeave={() => setblackHover(false)}
             className={`w-[17vw] bg-zinc-800 justify-between px-[2vw] p-[17px] tracking-tight text-[1vw] text-zinc-300 rounded-full font-semibold flex items-center duration-300 ${blackhover ? 'bg-zinc-900 text-[#fff]' : ''}`}>
            START THE PROJECT
                <span className='block w-2 h-2 rounded-full bg-zinc-100'></span>
            </button>

            OR
            
            <button
            onMouseEnter={() => setwhiteHover(true)}
            onMouseLeave={() => setwhiteHover(false)}
             className={`w-[17vw] border-[1px] border-zinc-800 justify-between px-[2vw] p-[17px] tracking-tight text-[1vw] text-[#000] rounded-full flex items-center duration-300 ${whitehover ? 'bg-zinc-900 text-[white]' : ''}`}>
            HELLO@OCHI.DESIGN
                <span className={`block w-2 h-2 rounded-full bg-zinc-800 duration-300 ${whitehover ? 'bg-[#fff] text-[white]' : ''}`}></span>
            </button>
        </div>

      <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%]'>

      <div className='flex items-center justify-center w-[11.5vw] h-[11.5vw] bg-zinc-100 rounded-full'>
      <div className='relative w-[7vw] h-[7vw] rounded-full bg-zinc-900 flex items-center justify-center'>
      <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%] w-full h-10'>
      <div className='w-3.5 h-3.5 rounded-full bg-zinc-100'></div>
      </div>
      </div>
      </div>

      <div className='flex items-center justify-center w-[11.5vw] h-[11.5vw] bg-zinc-100 rounded-full'>
      <div className='relative w-[7vw] h-[7vw] bg-zinc-100 rounded-full bg-zinc-900 flex items-center justify-center'>
      <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[20%] w-full h-10'>
      <div className='w-3.5 h-3.5 rounded-full bg-zinc-100'></div>
      </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Ready
