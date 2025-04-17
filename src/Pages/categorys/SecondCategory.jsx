import React from 'react'
import Image1 from "../../../public/images/phone-06.png"
import Image2 from "../../../public/images/speaker.png"
import Image3 from "../../../public/images/wireless-02.png"
import Button from './../../componants/Shared/Button';
import { motion } from 'framer-motion';

function SecondCategory() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            className='py-8'
        >
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {/* First Column - Wireless Headphones */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-red-700 to-red-600 
                        text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'
                    >
                        <div>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-white'>Unleash Sound</p>
                                <p className='mb-[2px] text-2xl font-semibold'>Wireless Freedom</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Wireless Headphones</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-white'}
                                    textcolor={'text-primary'}
                                />
                            </div>
                        </div>
                        <img src={Image3} alt="Wireless Headphones" className='lg:w-[400px] sm:w-[320px] md:w-[350px] absolute top-1/2 -translate-y-1/2 -right-0' />
                    </motion.div>

                    {/* Second Column - Smartphone */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-gray-800 
                        text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'
                    >
                        <div>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-gray-400'>Stay Connected</p>
                                <p className='mb-[2px] text-2xl font-semibold'>Innovation in Your Hands</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Smartphone</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-primary'}
                                    textcolor={'text-white'}
                                />
                            </div>
                        </div>
                        <img src={Image1} alt="Smartphone" className='w-[250px] absolute right-0 lg:top-[40px]' />
                    </motion.div>

                    {/* Third Column - Speaker */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
                        className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandBlue 
                        text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden'
                    >
                        <div>
                            <div className='mb-4 bottom-0 absolute z-10'>
                                <p className='mb-[2px] text-white'>Feel the Beat</p>
                                <p className='mb-[2px] text-2xl font-semibold'>Powerful Sound</p>
                                <p className='text-4xl font-bold xl:text-5xl opacity-50 mb-2'>Bluetooth Speaker</p>
                                <Button
                                    text={'Browse'}
                                    bgcolor={'bg-white'}
                                    textcolor={'text-DarkBlue'}
                                />
                            </div>
                        </div>
                        <img src={Image2} alt="Bluetooth Speaker" className='w-[250px] absolute -right-0 lg:top-[40px]' />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default SecondCategory;
