import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion';
import Img1 from '../../public/images/contact-1.gif'
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiMapPinAddFill } from "react-icons/ri";
export default function ContactUs() {
    return (
        <>

            <Navbar />
            <div className="container py-12">
                <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Contact Us
                </motion.h1>

                {/* Introduction Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                    <img
                        src={Img1}
                        alt="contact us"
                        className="rounded-2xl w-full"
                    />
                    <div>
                        <div className="bg-white p-8 shadow-xl rounded-xl">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Send Us a Message</h2>
                            <p className='font-semibold mb-6 text-gray-500'>Have a question or need help? Reach out to us anytime — we’d love to hear from you!</p>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-600 mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-slate-700"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-slate-700"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-1">Message</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-slate-700"
                                        rows="5"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap justify-center gap-6 py-8 border-gray-200 border-2 rounded-md">
  {/* Address */}
  <div className="card bg-base-100 w-full sm:w-80  shadow-md">
    <div className="card-body flex items-center justify-center text-center">
      <div className="bg-orange-50 p-3 rounded-md mb-3">
        <IoLocationSharp className="size-7 text-orange-600" />
      </div>
      <h2 className="card-title">Address</h2>
      <p>Noida , Uttar Pradesh</p>
    </div>
  </div>

  {/* Contact */}
  <div className="card bg-base-100 w-full sm:w-80  shadow-md">
    <div className="card-body flex items-center justify-center text-center">
      <div className="bg-blue-50 p-3 rounded-md mb-3">
        <MdCall className="size-7 text-blue-600" />
      </div>
      <h2 className="card-title">Contact</h2>
      <p>+91 1234567890</p>
    </div>
  </div>

  {/* Email */}
  <div className="card bg-base-100 w-full sm:w-80  shadow-md">
    <div className="card-body flex items-center justify-center text-center">
      <div className="bg-green-50 p-3 rounded-md mb-3">
        <MdEmail className="size-7 text-green-400" />
      </div>
      <h2 className="card-title">Email</h2>
      <p>support@furnitech.com</p>
    </div>
  </div>

  {/* Google Map */}
  <div className="card bg-base-100 w-full sm:w-80  shadow-md">
    <div className="card-body flex items-center justify-center text-center">
      <div className="bg-pink-50 p-3 rounded-md mb-3">
        <RiMapPinAddFill className="size-7 text-pink-400" />
      </div>
      <h2 className="card-title">Google Map</h2>
      <p>
        Discover our prime location <br />
        <a
          href="#"
          className="text-pink-500 font-medium underline hover:text-pink-700"
        >
          View More
        </a>
      </p>
    </div>
  </div>
</div>

                {/* ////////////////////////////// */}

              
            </div>
            <Footer />
        </>
    )
}
