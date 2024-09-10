import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()]; 
    const cards2 = [useAnimation(), useAnimation()]; 
    const cards3 = [useAnimation(), useAnimation()];
    const [hover, setHover] = useState(false);

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }

    // Second section functions
    const sechandleHover = (index) => {
        cards2[index].start({ y: "0" });
    }

    const sechandleHoverEnd = (index) => {
        cards2[index].start({ y: "100%" });
    }

    // Third section functions
    const thirdHandleHover = (index) => {
        cards3[index].start({ y: "0" });
    }

    const thirdHandleHoverEnd = (index) => {
        cards3[index].start({ y: "100%" });
    }

    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);
    const [hovered8, setHovered8] = useState(false);
    const [hovered9, setHovered9] = useState(false);
    const [hovered10, setHovered10] = useState(false);
    const [hovered11, setHovered11] = useState(false);
    const [hovered12, setHovered12] = useState(false);
    const [hovered13, setHovered13] = useState(false);
    const [hovered14, setHovered14] = useState(false);


    const [scale, setScale] = useState(false);

    return (
        <div className='w-full py-20 pb-30 bg-[#F1F1F1]'>
            <div className='w-full px-[4vw] border-b-[1px] pb-8 border-zinc-400'>
                <h1 className='projectheading text-[4vw] text-[#212121] tracking-tight'>
                    Featured projects
                </h1>
            </div>
            <div className='fliptext px-[4vw]'>
                {/* Section 1 */}
                <div className="relative cards w-full flex gap-5 mt-10">
                    <motion.div 
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className='absolute overflow-hidden w-[72vw] z-[9] right-[-17vw] translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                            {"CARDBOARD SPACESHIP".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1> 
                        <div 
                        onMouseEnter={() => setScale(true)}
                        onMouseLeave={() => setScale(false)} 
                        className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <div className='absolute top-[100%] flex-btns flex gap-[1vw] pt-[15px]'>
                            <button
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            BRANDED TEMPLATE</button>

                            <button
                            onMouseEnter={() => setHovered2(true)}
                            onMouseLeave={() => setHovered2(false)}
                             className={`px-2 tracking-tight text-[1vw] border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered2 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            SALES DECK</button>

                            <button
                            onMouseEnter={() => setHovered3(true)}
                            onMouseLeave={() => setHovered3(false)}
                             className={`px-2 tracking-tight text-[1vw] border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered3 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            SOCIAL MEDIA TEMPLATES</button>
                        </div>

                    <motion.div 
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <h1 className='absolute flex overflow-hidden w-[72vw] right-[24vw] translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                                {"AH2 & MATT HORN".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className="inline-block"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1> 
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                        <div className='absolute top-[100%] right-[35vw] flex-btns flex gap-[1vw] pt-[15px]'>
                        <button
                            onMouseEnter={() => setHovered4(true)}
                            onMouseLeave={() => setHovered4(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered4 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            PITCH DECK</button>
                        </div>
                </div>

                {/* Section 2 */}
                <div className='second'>
                    <div className="relative cards2 w-full flex gap-5 mt-40">
                        <motion.div 
                            onHoverStart={() => sechandleHover(0)}
                            onHoverEnd={() => sechandleHoverEnd(0)}
                            className="cardcontainer relative w-1/2 h-[75vh]"
                        >
                            <h1 className='absolute overflow-hidden z-[9] right-[-1vw] translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                                {"FYDE".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards2[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className="inline-block"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1> 
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            </div>
                        </motion.div>
                        <div className='absolute top-[100%] flex-btns flex gap-[1vw] pt-[15px]'>
                        <button
                            onMouseEnter={() => setHovered6(true)}
                            onMouseLeave={() => setHovered6(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered6 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            AUDIT</button>

                            <button
                            onMouseEnter={() => setHovered7(true)}
                            onMouseLeave={() => setHovered7(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered7 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            COPY WRITING</button>
                            
                            <button
                            onMouseEnter={() => setHovered8(true)}
                            onMouseLeave={() => setHovered8(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered8 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            SALES DECK</button>

                            <button
                            onMouseEnter={() => setHovered9(true)}
                            onMouseLeave={() => setHovered9(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered9 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            SLIDES DESIGN</button>
                        </div>

                        <motion.div 
                            onHoverStart={() => sechandleHover(1)}
                            onHoverEnd={() => sechandleHoverEnd(1)}
                            className="cardcontainer relative w-1/2 h-[75vh]"
                        >
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <h1 className='absolute flex overflow-hidden right-[45vw] translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                                    {"VISE".split('').map((item, index) => (
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={cards2[1]}
                                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                            className="inline-block"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </h1> 
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                            </div>
                        </motion.div>
                        <div className='absolute top-[100%] right-[21.5vw] flex-btns flex gap-[1vw] pt-[15px]'>
                        <button
                            onMouseEnter={() => setHovered10(true)}
                            onMouseLeave={() => setHovered10(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered10 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            AGENCY</button>

                            <button
                            onMouseEnter={() => setHovered11(true)}
                            onMouseLeave={() => setHovered11(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered11 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                                COMPANY PRESENTATION
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className='third'>
                    <div className="relative cards3 w-full flex gap-5 mb-10 mt-40">
                        <motion.div 
                            onHoverStart={() => thirdHandleHover(0)}
                            onHoverEnd={() => thirdHandleHoverEnd(0)}
                            className="cardcontainer relative w-1/2 h-[75vh]"
                        >
                            <h1 className='absolute overflow-hidden w-[14vw] z-[9] right-[-2vw] translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                                {"TRAWA".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards3[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className="inline-block"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1> 
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            </div>
                        </motion.div>
                        <div className='absolute top-[100%] flex-btns flex gap-[1vw] pt-[15px]'>
                        <button
                            onMouseEnter={() => setHovered11(true)}
                            onMouseLeave={() => setHovered11(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered11 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            BRAND IDENTITY</button>

                            <button
                            onMouseEnter={() => setHovered12(true)}
                            onMouseLeave={() => setHovered12(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered12 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            DESIGN RESEARCH</button>

                            <button
                            onMouseEnter={() => setHovered13(true)}
                            onMouseLeave={() => setHovered13(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered13 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            INVESTOR DECK</button>
                        </div>

                        <motion.div 
                            onHoverStart={() => thirdHandleHover(1)}
                            onHoverEnd={() => thirdHandleHoverEnd(1)}
                            className="cardcontainer relative w-1/2 h-[75vh]"
                        >
                            <div className='card w-full h-full rounded-xl overflow-hidden'>
                                <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] text-[#CFEB70] font-semibold leading-none tracking-tighter'>
                                    {"PREMIUM BLEND".split('').map((item, index) => (
                                        <motion.span
                                            initial={{ y: "100%" }}
                                            animate={cards3[1]}
                                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                            className="inline-block"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </h1> 
                                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                            </div>
                        </motion.div>
                        <div className='absolute top-[100%] right-[31.5vw] flex-btns flex gap-[1vw] pt-[15px]'>
                        <button
                            onMouseEnter={() => setHovered10(true)}
                            onMouseLeave={() => setHovered10(false)}
                             className={`px-2 py-[2px] text-[1vw] tracking-tight border-[1px] border-zinc-900 text-[#000] rounded-full duration-300 ${hovered10 ? 'bg-zinc-900 text-[#fff]' : ''}`} href="#">
                            RANDED TEMPLATE</button>
                        </div>
                    </div>
                </div>

                <div className="casestudies flex justify-center pt-[8vw]">
                    <button 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                     className='text-[#fff] text-zinc-200 font-semibold flex items-center justify-between bg-zinc-900 rounded-full w-[19vw] text-[1vw] p-[17px] px-[24px] tracking-tighter'>
                    VIEW ALL CASE STUDIES 
                    <span className={`w-2 h-2 bg-zinc-100 rounded-full duration-300 ${hover ? 'scale-150' : 'scale-100'}`}></span></button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
