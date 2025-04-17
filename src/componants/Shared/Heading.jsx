import React from 'react'
import { motion } from 'framer-motion';

export default function Heading({title, subtitle}) {
    return (
        <motion.div
        initial={{opacity:0 ,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1, ease:"easeInOut"}}
        className='text-left mb-10 max-w[600px] mx-auto space-y-2'>
            <h1 className='text-2xl font-bold lg:text-3xl capitalize dark:text-white'>{title}</h1>
            <p className='text-xs text-gray-400'>{subtitle}</p>
        </motion.div>
      )
}
