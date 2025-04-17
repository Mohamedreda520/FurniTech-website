import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-gray-950 text-white  border-t-2 border-gray-800'>
      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div class="py-8 px-4">
            <a href="#" class="text-white font-semibold tracking-widest text-2xl capitalize sm:text-3xl"><span className='text-primary'>Furni</span>Tech	</a>
            <p class="text-white/70  lg:pr-24 pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
            <p class="text-gray-500 mt-4">Developed with 💖 by Mohamed Reda
            </p>
           
          </div>
          {/* footer links */}
          <div class="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:pl-10">
            <div class="py-8 px-4">
              <h1 class="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul class="space-y-3"><li><a href="/#" class="text-gray-400 hover:dark:text-white hover:text-black duration-300">Home</a></li><li><a href="/#about" class="text-gray-400 hover:dark:text-white hover:text-black duration-300">About</a></li>
                <li><a href="/#contact" class="text-gray-400 hover:dark:text-white hover:text-black duration-300">Contact</a></li>
                <li><a href="/#blog" class="text-gray-400 hover:dark:text-white hover:text-black duration-300">Blog</a></li>
              </ul>
            </div>

            <div class="py-8 px-4 sm:col-auto">
              <h1 class="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div class="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida , Uttar Pradesh</p>
                </div>
                <div class="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>
                {/* sochal links */}
                <div class="flex items-center gap-3 mt-6">
                  <a href="#">
                  <FaInstagram />
                  </a>
                  <a href="#">
                  <FaFacebook />
                  </a>
                  <a href="#">
                  <FaLinkedin />

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
