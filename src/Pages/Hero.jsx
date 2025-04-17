import React, { useState } from 'react'
import Image1 from '../../public/images/hero-img.png';
import Image2 from '../../public/images/wireless-03.png';
import Image3 from '../../public/images/phone-03.png';
import { motion } from 'framer-motion';


const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Elegant Comfort",
        title1: "Luxury Furniture",
        description: "Experience the ultimate comfort and exquisite design with our carefully crafted furniture, adding a touch of elegance to your home.",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Seamless Connectivity",
        title1: "Wireless Audio",
        description: "Enjoy an exceptional audio experience with no restrictions. Move freely and immerse yourself in high-quality wireless sound.",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Next-Gen Performance",
        title1: "Smartphone",
        description: "Stay ahead with a smartphone that combines cutting-edge technology, stunning design, and powerful performance for an unmatched experience.",
    }
];

export default function Hero() {
    const [data, setData] = useState(HeroData[0])
    const handelChangeData = (changedata) => {
        setData(changedata)
    }
    return (
        <>
            <section className='dark:bg-gray-900 dark:text-white '>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}

                    className='container min-h-[700px] grid grid-cols-1 md:grid-cols-2'>

                    {/* hero Info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w[500px]'>
                        <div className=' space-y-3 text-center md:text-left'>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className='text-2xl font-bold'
                            >
                                {data.subtitle}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className='text-4xl lg:text-6xl font-bold'
                            >
                                {data.title1}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: 200 }}
                                animate={{ opacity: 1, x: 0 }}

                                transition={{ duration: 2, ease: "easeInOut" }}
                                className='text-sm leading-loose dark:text-white/80'
                            >
                                {data.description}
                            </motion.p>

                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 font-semibold capitalize bg-red-800 text-white w-fit'>
                                Buy Now
                            </button>
                            {/* start image for you */}
                            <div className='flex items-center justify-center
                            md:justify-start gap-4 !mt-24'>
                                <span className='w-20 h-[1px] dark:bg-white bg-black'></span>
                                <p className=' uppercase text-sm'>Images For You</p>
                                <span className='w-20 h-[1px] dark:bg-white bg-black'></span>
                            </div>

                            {/* start image chouse */}
                            <div className='grid grid-cols-3 gap-5'>
                                {HeroData.map((item) => {
                                    return (
                                        <div key={item.id} onClick={() => handelChangeData(item)}
                                            className='  flex items-center '>
                                            <img src={item.img} alt="img" className='rounded-full hover:scale-95 duration-500 cursor-pointer' />
                                        </div>
                                    )
                                })}
                            </div>
                            {/* end image chouse */}
                        </div>

                    </div>
                    {/* hero Image */}
                    <div className='flex items-center flex-col justify-center'>
                        <motion.img
                            src={data.img}
                            alt="Hero"
                            className="hero-img w-[300px] md:w-[400px] xl:w-[500px]"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, ease: "easeOut", repeat: Infinity }}
                        />
                        {/* <img src={data.img} alt="" className="w-[300px] md:w-[400px] xl:w-[500px]" /> */}
                    </div>

                </motion.div>

            </section>
        </>
    )
}
