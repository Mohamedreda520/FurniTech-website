import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import Img1 from '../../public/images/about.jpg'
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
        <Navbar/>
        <div className="container py-12">


          <motion.h1 
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1,ease:'easeInOut'}}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Us</motion.h1>
           
    
          {/* Introduction Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>

              <h2 className="capitalize font-semibold text-3xl dark:text-white text-gray-800 mb-4">Welcome to [<span className='text-primary'>Furni</span>Tech]</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a modern online store offering a wide range of high-quality products to suit your lifestyle — from
                comfortable <strong>sofas</strong> and <strong>chairs</strong> to the latest <strong>mobile phones</strong> and stylish <strong>watches</strong>.
                Our mission is to make online shopping simple, fast, and enjoyable for everyone.
              </p>
            </div>
            <img
              src={Img1}
              alt="Store overview"
              className="rounded-2xl shadow-md w-full"
            />
          </div>
    
        
       
        </div>
        <Footer/>
        </>
      );
}
