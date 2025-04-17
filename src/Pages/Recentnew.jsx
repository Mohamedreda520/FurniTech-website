import React from 'react'
import Heading from '../componants/Shared/Heading'
import watch4 from '../../public/images/watch-04.png'
import gaming from '../../public/images/gaming.png'
import laptop from '../../public/images/laptop.png'
import { motion } from 'framer-motion';
export default function Recentnew() {
  const RecentNews = [
    {
      id: 1,
      title: "Smart Watch",
      description: "Stay ahead with the latest smartwatch featuring cutting-edge technology.",
      date: "Jan 20, 2024 by Satya",
      image: watch4
    },
    {
      id: 2,
      title: "Gaming Console",
      description: "Experience next-level gaming with high-performance hardware.",
      date: "Jan 20, 2024 by Satya",
      image: gaming
    },
    {
      id: 3,
      title: "Powerful Laptop",
      description: "Boost your productivity with a high-speed and ultra-efficient laptop.",
      date: "Jan 20, 2024 by Satya",
      image: laptop
    },


  ]
  return (
    <div className='py-10'>
      <div className="container">
        <Heading
          title={'Recent News'}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden">
          {/*  recent div */}
          {
            RecentNews.map((item)=>{
              return(

                <motion.div 
                initial={{opacity:0 , scale:0,rotate:-360}}
                whileInView={{opacity:1, scale:1,rotate:0}}
                transition={{duration:2, ease:"easeInOut"}}
                className='bg-slate-50 py-4 px-4 rounded-2xl dark:bg-slate-800'>
                   {/* img */}
                <div className='overflow-hidden mb-4'>
                  <img src={item.image} alt="img" className='w-full h-72 hover:scale-90 duration-700' />
                </div>
                <div class="border-b-2 border-gray-200 my-4 w-[90%] dark:border-gray-600 mx-auto "></div>
                {/* info */}
                <div className='p-4 dark:text-white '>
                  <span className='font-semibold text-gray-600 dark:text-white'>{item.date}</span>
                  <h1 className='font-bold text-2xl mb-3 mt-3'>{item.title}</h1>
                  <p className='font-semibold text-gray-600 dark:text-white'>{item.description}</p>
                </div>
                </motion.div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
