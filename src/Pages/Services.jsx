import { delay, motion } from 'framer-motion';
import React from 'react'
import { FaTruck, FaAward } from "react-icons/fa";
import { FaRotate } from 'react-icons/fa6';
import { RiSecurePaymentLine } from "react-icons/ri";
// import { FaRotate } from "react-icons/ri6";
export default function Services() {
  const Services = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Get your orders delivered for free with no extra charges.",
      icon: <FaTruck className=" text-3xl" />,
      delay:0.8
    },
    {
      id: 2,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days of purchase.",
      icon: <FaRotate className=" text-3xl" />,
      delay:1
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "Your transactions are protected with top-level security.",
      icon: <RiSecurePaymentLine className=" text-3xl" />,
      delay:1.5
    },
    {
      id: 4,
      title: "Money Back Guarantee",
      description: "100% money-back guarantee if you’re not satisfied.",
      icon: <FaAward className=" text-3xl" />,
      delay:2
    },
  ];

  return (
    <section className=' pt-12 pb-16 bg-gray-50 dark:bg-gray-950'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration:2 }}
        className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {
            Services.map((data) => {
              return (
                <motion.div 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                whileHover={{ y: -10, scale: 1.03,  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: data.delay, ease: "easeInOut" }}
                
                key={data.id} className={`flex gap-5 items-center bg-white p-3 rounded-lg cursor-pointer `} >
                  {/*services icon */}
                  <div className='bg-black p-2 rounded-full text-blue-600'>{data.icon}</div>
                  {/*services info */}
                  <div className=''>
                    <h1 className='font-bold mb-1 capitalize'>{data.title}</h1>
                    <p className='font-mono text-gray-500 w-full'>{data.description}</p>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </motion.div>


    </section>
  )
}
