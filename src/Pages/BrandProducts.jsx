import React, { useEffect, useState } from 'react'
import Heading from '../componants/Shared/Heading'
import products from '../../public/data/products.json'
import { motion } from 'framer-motion';
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../componants/rtk/slices/CartSlice';
import { showToast } from '../componants/Shared/AlirtMassage';
export default function BrandProducts() {
    const AllData = products
    const dispatch = useDispatch()
    const [productList, setProductList] = useState([])
    useEffect(() => {
        const filterProducts = AllData.filter((item) => item.category.toLowerCase() === 'sofa')
        setProductList(filterProducts)
    }, [])


    return (
        <div className='py-10'>
            <div className="container">
                <Heading title={'Luxury Sofas for a Cozy Living Room'} />


                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-10'>
                    {
                        productList.map((item) => {

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 1 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.1, boxShadow: '0px 1px 4px 0px rgba(0 0 0 0.3)' }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    key={item.id} className='dark:bg-gradient-to-br from-gray-600 to-gray-900
                                py-5 px-5 rounded-3xl relative bg-slate-50' >
                                    {/* img */}
                                    <div>
                                        <img src={item.image} alt="img" className='sm:w-[250px] max-w-full w-full h-52 object-contain  items-center justify-center ' />
                                    </div>
                                    {/* info */}
                                    <div className='dark:text-white mt-4'>
                                        <h2 className=' font-semibold text-xl da'>{item.title}</h2>
                                        <p className='font-semibold '>{item.category}</p>
                                        <div className='flex items-center justify-between'>
                                            <span className='font-bold'>${item.price}</span>
                                            {/* <button className='bg-gradient-to-br from-blue-800 to-blue-500  rounded-full w-10 h-10 flex justify-center  items-center text-center font-extrabold text-2xl'>+</button> */}
                                            <IoMdAddCircle
                                                onClick={() => {
                                                    dispatch(addToCart(item))
                                                    showToast('Add to Cart ', 'success')
                                                }
                                                }
                                                className="text-white bg-gradient-to-br from-blue-800 to-blue-500 rounded-full p-1 text-3xl  cursor-pointer" />
                                        </div>
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
