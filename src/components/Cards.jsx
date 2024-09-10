import React, { useState } from 'react'

function Cards() {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  return (
    <div className='w-full h-screen bg-zinc-100 px-[4vw] flex items-center gap-5 '>
      <div className='cardcontainer h-[50vh] w-1/2'>
      <div className='relative card w-full h-[55vh] rounded-xl bg-[#004D43]'>
        <div className='h-full flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        <button className='absolute left-5 px-2 py-[2px] tracking-tighter font-semibold text-[1vw]  border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full bottom-8'>&copy;2019-2022</button>
      </div>
      </div>

      <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
      <div className='relative flex items-center justify-center card w-1/2 h-[55vh] rounded-xl bg-[#212121]'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
         className={`absolute text-[1vw] left-5 px-3 py-[2px] border-[1px] rounded-full border-zinc-300 bottom-8 font-semibold text-zinc-300 tracking-tighter duration-300 ${hover1 ? 'bg-[white] text-[black]' : ''}`}>
        RATING 5.0 ON CLUTCH
        </button>
      </div>
      
      <div className='relative flex items-center justify-center card w-1/2 h-[55vh] rounded-xl bg-[#212121]'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
         className={`absolute text-[1vw] left-5 px-3 py-[2px] border-[1px] rounded-full broder-zinc-300 bottom-8 font-semibold text-zinc-300 tracking-tighter duration-300 ${hover2 ? 'bg-[white] text-[black]' : ''}`}>
          BUSINESS BOOTCAMP ALUMNI
        </button>
      </div>
      </div>
    </div>
  )
}

export default Cards
