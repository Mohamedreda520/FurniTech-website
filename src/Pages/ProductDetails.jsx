import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AllData from '../../public/data/products.json'
import Navbar from './navbar/Navbar';
import Footer from '../Pages/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../componants/rtk/slices/CartSlice';
import { fetchproducts } from '../componants/rtk/slices/ProductSlice';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { addToFavorites, removeFromFavorites } from '../componants/rtk/slices/LikeSlice';

export default function ProductDetails() {
  const products = useSelector((state) => state.Products)
  const favorites = useSelector((state) => state.Favorite || [])
  const dispatch = useDispatch()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // البحث عن المنتج بناءً على ID
    const foundProduct = AllData.find((item) => item.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
      // تصفية المنتجات المشابهة واستبعاد المنتج الحالي
      const filtproduct = AllData.filter((item) => item.category === foundProduct.category && item.id !== foundProduct.id).slice(0, 4);
      setData(filtproduct);
    }

    dispatch(fetchproducts());

  }, [id, dispatch]);

  if (!product) return <h1 className="text-center mt-10">Product not found</h1>;

  return (
    <>
      <Navbar />
      <div className='container py-12'>
        <div className='flex items-center justify-center gap-5 dark:text-white max-lg:flex-wrap'>
          {/* img */}

          <img src={product.image} alt={product.title} className="w-[500px] h-[400px] max-w-full  rounded-md" />

          {/* info */}
          <div className='w-full'>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg mt-4">{product.description}</p>
            <span className="text-xl font-semibold mt-10 block">${product.price}</span>

            <button className='btn btn-primary mt-5' onClick={() => dispatch(addToCart(product))}>add to card</button>
          </div>
        </div>

        {/* Similar products */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='mt-10 mb-5 font-bold text-2xl dark:text-white'> Similar products</motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-5 py-16'>
          {data.map((pro) => {
            const isFavorite = favorites.some((item) => item.id === pro.id)
            return (
              <motion.div
                initial={{ opacity: 0, y: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: '0px 1px 4px 0px rgba(0 0 0 0.3)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                key={pro.id}
                className='group dark:bg-gradient-to-br from-gray-600 to-gray-900
                               py-5 px-5 rounded-3xl relative bg-slate-50' >
                {/* Icons at the Hover */}
                <div className="absolute top-5 right-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                    <FaHeart
                      onClick={() => {
                        if (isFavorite) {
                          dispatch(removeFromFavorites(pro))
                        } else {
                          dispatch(addToFavorites(pro))
                        }
                      }
                      }
                      className={isFavorite ? 'text-red-600' : 'text-red-200'}/>
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                    <FaEye className="text-blue-500"
                      onClick={() => navigate(`/product/${pro.id}`)}
                    />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                    <FaShoppingCart className="text-gray-700"
                      onClick={() => dispatch(addToCart(pro))}
                    />
                  </button>
                </div>

                {/* img */}
                <div className=' flex justify-center'>
                  <img src={pro.image} alt="img" className=' max-w-full w-full sm:w-full h-52 object-contain  items-center justify-center ' />
                </div>
                {/* info */}
                <div className='dark:text-white mt-4'>
                  <h2 className=' font-semibold text-xl da'>{pro.title}</h2>

                  <span className='font-bold mt-5 block'>${pro.price}</span>

                </div>
              </motion.div>

            )
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
