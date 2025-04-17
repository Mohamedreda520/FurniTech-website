import React from 'react'
import Button from '../componants/Shared/Button'
import phone from '../../public/images/phone-06.png'
import { motion } from 'framer-motion';
export default function Advertisement() {
    return (
        <div className='py-10'>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='flex items-center justify-center  max-sm:flex-col-reverse bg-gradient-to-br from-blue-800 to-gray-800 px-10 py-10 rounded-3xl '>

                    {/* info */}
                    <div className=' w-1/2 text-white max-sm:w-full overflow-hidden '>
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='font-bold text-3xl capitalize mb-4'>Discover Our Best Collection </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className='font-semibold mb-4 text-lg'> Get <span className='font-bold text-4xl text-amber-500'>50% </span> OFF</motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className=' leading-8 text-lg mb-6'>
                            Don't miss out! Enjoy the latest technology with our top smartphones and get **50%** off for a limited time., Sleek design & powerful performance,Long-lasting battery,Ultra-clear display
                        </motion.p>
                        <Button
                            bgcolor={'bg-primary'}
                            text={'Shop Now'}
                            textcolor={'text-white'}
                        />
                    </div>
                    {/* img */}
                    <div className='w-1/2 '>
                        <motion.img
                            initial={{ opacity: 0, y: -200, scale: 0 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            src={phone} alt="phone" className='w-96 max-sm:w-full aspect-[4/3' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

