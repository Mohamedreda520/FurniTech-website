import React from 'react'
import Image1 from "../../../public/images/single-sofa-03.png"
import Image2 from "../../../public/images/single-sofa-01.png"
import Image3 from "../../../public/images/double-sofa-01.png"
import Button from './../../componants/Shared/Button';
import { motion } from 'framer-motion';




function FirstCategory() {
    return (
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, ease:'easeInOut'}}
        className='py-8'>
            <div className='container '>
                <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>
                    {/* frist col */}
                    <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1, ease:'easeInOut'}}
                    className='py-10 pl-5 bg-gradient-to-br from-gray-800 to-gray-600
             text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'>
                        <div>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-gray-400'>Relax</p>
                                <p className='mb-[2px] text-2xl font-semibold'>In Style</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Earphone</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-primary'}
                                    textcolor={'text-white'}
                                />
                            </div>
                        </div>
                        <img src={Image1} alt="" className='w-[320px] absolute -right-10  lg:top-[40px]' />
                    </motion.div>
                    {/* second col */}
                    <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, ease:'easeInOut'}}
                    className='py-10 pl-5 bg-gradient-to-br from-gray-900 to-gray-700
             text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'>
                        <div className=' '>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-white'>Unwind</p>
                                <p className='mb-[2px] text-2xl font-semibold'>With Elegance</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Cozy Sofa</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-white'}
                                    textcolor={'text-DarkBlue'}
                                />
                            </div>
                        </div>
                        <img src={Image2} alt="" className='w-[320px]  absolute -right-10  lg:top-[40px]' />
                    </motion.div>
                    {/* third col */}
                    <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:3, ease:'easeInOut'}}
                    className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-950 to-gray-600
             text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'>
                        <div>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-white'>Experience</p>
                                <p className='mb-[2px] text-2xl font-semibold'>Ultimate Comfort</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Luxury Double Sofa</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-white'}
                                    textcolor={'text-primary'}
                                />
                            </div>
                        </div>
                        <img src={Image3} alt="" className='lg:w-[400px] sm:w-[320px] md:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0' />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default FirstCategory