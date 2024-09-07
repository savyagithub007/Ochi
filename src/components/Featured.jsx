import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({y: "0"})
    }

    const handleHoverEnd = (index) =>{
        cards[index].start({y: "100%"})
    }

    return (
        <div className='w-full py-20 bg-[#F1F1F1]'>
            <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-400'>
                <h1 className='text-7xl text-[#212121] tracking-tight'>
                Featured projects
                </h1>
            </div>
            <div className='px-20'>
                {/* section1 */}
            <div className="cards w-full flex gap-10 mt-10">
                    <motion.div 
                    onHoverStart={() => handleHover(0)}
                    onHoverEnd={() => handleHoverEnd(0)}
                    className="cardcontainer relative w-1/2 h-[75vh]">
                    <h1 className='absolute overflow-hidden z-[9] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                    {"FYDE".split('').map((item, index)=> (
                        <motion.span 
                        initial={{y: "100%"}} 
                        animate={cards[0]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className="inline-block">
                            {item}
                            </motion.span>
                    ))}
                    </h1> 
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                    </motion.div>

                    <motion.div 
                     onHoverStart={() => handleHover(1)}
                     onHoverEnd={() => handleHoverEnd(1)}
                    className="cardcontainer relative w-1/2 h-[75vh]">
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                    {"VISE".split('').map((item, index)=> (
                       <motion.span 
                       initial={{y: "100%"}} 
                       animate={cards[1]} 
                       transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                       className="inline-block">
                           {item}
                           </motion.span>
                    ))}
                    </h1> 
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                    </div>
                    </motion.div>
                </div>

               

            </div>
        </div>
    )
}

export default Featured
