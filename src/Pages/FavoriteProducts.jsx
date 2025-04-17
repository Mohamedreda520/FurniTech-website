
import Navbar from './navbar/Navbar'
import Footer from './Footer'
import Heading from '../componants/Shared/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { addToFavorites, removeFromFavorites } from '../componants/rtk/slices/LikeSlice'
export default function FavoriteProducts() {
    const favoriteproduct = useSelector((state) => state.Favorite || [])
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <>
            <Navbar />
            <div className="container py-12">
                <Heading title={'WishList Page'} />
                {/* favorite products */}
                <section>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 py-16'>

                        {favoriteproduct.length > 0 ? favoriteproduct.map((pro) => (
                            <motion.div
                                key={pro.id}
                                initial={{ opacity: 0, y: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05, boxShadow: '0px 1px 4px 0px rgba(0 0 0 0.3)' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className='group dark:bg-gradient-to-br from-gray-600 to-gray-900 py-5 px-5 rounded-3xl relative bg-slate-50'
                            >
                                {/* Icons at the Hover */}
                                <div className="absolute top-5 right-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                                        <FaHeart
                                            onClick={() => dispatch(removeFromFavorites(pro))}
                                            className="text-red-600"
                                        />
                                    </button>
                                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                                        <FaEye className="text-blue-500" onClick={() => navigate(`/product/${pro.id}`)} />
                                    </button>
                                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                                        <FaShoppingCart className="text-gray-700" onClick={() => dispatch(addToCart(pro))} />
                                    </button>
                                </div>

                                {/* img */}
                                <div className='flex justify-center'>
                                    <img src={pro.image} alt="img" className='max-w-full w-full sm:w-full h-52 object-contain' />
                                </div>

                                {/* info */}
                                <div className='dark:text-white mt-4'>
                                    <h2 className='font-semibold text-xl'>{pro.title}</h2>
                                    <span className='font-bold mt-5 block'>${pro.price}</span>
                                </div>
                            </motion.div>
                        )) : (
                            <p className="text-center text-gray-500">Not Found Products Here ??</p>
                        )}

                    </div>
                    <motion.div></motion.div>
                </section>

            </div>

            <Footer />

        </>
    )
}
