import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 px-[3.5vw] flex items-center gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
      <div className='relative card w-full h-full rounded-xl bg-[#004D43]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 px-5 py-1 border-2 rounded-full bottom-10'>&copy;2019-2022</button>
      </div>
      </div>

      <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
      <div className='relative flex items-center justify-center card w-1/2 h-[50vh] rounded-xl bg-[#212121]'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 px-5 py-1 border-2 rounded-full bottom-10'>&copy;2019-2022</button>
      </div>
      <div className='relative flex items-center justify-center card w-1/2 h-[50vh] rounded-xl bg-[#212121]'>
      <img className='w-32' src="https:/n/ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 px-5 py-1 border-2 rounded-full bottom-10'>&copy;2019-2022</button>
      </div>
      </div>
    </div>
  )
}

export default Cards
