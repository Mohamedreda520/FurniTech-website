import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../componants/rtk/slices/ProductSlice'
import Navbar from '../Pages/navbar/Navbar'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FaBars, FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { GiSofa } from "react-icons/gi";
import { GiRockingChair } from "react-icons/gi";
import { GiWatch } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { addToCart } from '../componants/rtk/slices/CartSlice'
import { addToFavorites, removeFromFavorites } from '../componants/rtk/slices/LikeSlice'
import { showToast } from '../componants/Shared/AlirtMassage'

const categoryIcons = {
  "sofa": <GiSofa className="inline-block size-5 mr-2" />,
  "chair": <GiRockingChair className="inline-block size-5 mr-2" />,
  "watch": <GiWatch className="inline-block size-5 mr-2" />,
  "mobile": <FaMobileScreen className="inline-block size-5 mr-2" />,
  "wireless": <FaHeadset className="inline-block size-5 mr-2" />,

};
export default function ShopPage() {
  const [open, setOpen] = useState(true)
  const products = useSelector((state) => state.Products)
  const favorites = useSelector((state) => state.Favorite || [])



  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectcategory, setSelectCategory] = useState(null)
  const [filterproducts, setFilterProducts] = useState([])
  const [searchproduct, setSearchProduct] = useState()




  useEffect(() => {
    dispatch(fetchproducts())
  }, [dispatch])

  useEffect(() => {
    if (!products.length) return;
    let filtered = products
    if (selectcategory) {
      filtered = products.filter((item) => item.category === selectcategory);
      // setFilterProducts(filtered);
    }
    // else {
    //   setFilterProducts(products);

    // }
    if (searchproduct) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchproduct.toLowerCase())
      );
    }
    setFilterProducts(filtered);
  }, [selectcategory, products, searchproduct]);

  const uniqueCategories = [...new Set(products.map(item => item.category))];

  return (

    <>
      <Navbar />

      <div className='flex gap-5 flex-row'>
        {/* siedbar */}
        <div
          style={{ width: open && 'fit-content' }}
          className="flex-none z-30 sticky  top-1 bg-gray-100 shadow-sm h-[100vh] w-[250px] py-6 px-2 flex flex-col items-center gap-5 dark:bg-gray-600 ">
          <div className='flex items-center justify-between w-full px-4 mb-4'>
            <h1 className='text-3xl font-semibold text-DarkBlue dark:text-white' style={{ display: open && 'none' }}>Filter</h1>
            <FaBars className='size-7 cursor-pointer dark:text-white'
              onClick={() => setOpen(prev => !prev)}
            />

          </div>
          {/* category */}
          <NavLink className=' block bg-white/80 rounded-lg w-full text-center p-3 font-semibold text-lg' onClick={() => setSelectCategory(null)}>All</NavLink>
          {uniqueCategories.map((category) => {
            return (



              <div key={category} className="tooltip max-sm:tooltip-right  block bg-white/80 rounded-lg w-full text-center p-3 font-semibold text-lg" data-tip={category}>
                <NavLink className="block"
                  onClick={() => setSelectCategory(category)}
                >
                  {categoryIcons[category]}
                  {open === false ? category : ''}
                </NavLink>
              </div>

            )
          })}
        </div>
        {/* productsList */}
        {/* search products */}
        <div className='flex-1 justify-center px-8'>
          <div className='py-10 flex justify-center '>
            <label className="input  w-[80%] focus:outline-none focus:ring-0 ">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" className="grow   " placeholder="Search" onChange={(e) => setSearchProduct(e.target.value)} />
            </label>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 '>
            {filterproducts.length > 0 ? (
              filterproducts.map((pro) => {

                const isFavorite = favorites.some((item) => item.id === pro.id)
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, boxShadow: '0px 1px 4px 0px rgba(0 0 0 0.3)' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    key={pro.id}
                    className='group dark:bg-gradient-to-br from-gray-600 to-gray-900 py-5 px-5 rounded-3xl relative bg-slate-50'
                  >
                    {/* Icons at the Hover */}
                    <div className="absolute top-5 right-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                       onClick={() => {
                        if (isFavorite) {
                          dispatch(removeFromFavorites(pro))
                          showToast('Delete From Favorite', 'error')
                        }else{
                          dispatch(addToFavorites(pro))
                          showToast(' Add to Favorite', 'success')
                        }
                      }
                      }
                      className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                        <FaHeart className={isFavorite ? 'text-red-600' : 'text-red-200'} />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" onClick={() => navigate(`/product/${pro.id}`)}>
                        <FaEye className="text-blue-500" />
                      </button>
                      <button 
                       onClick={() => {
                       
                          dispatch(addToCart(pro))
                          showToast('Add to Cart ', 'success')
                        }
                      
                      }
                      className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                        <FaShoppingCart className="text-gray-700" />
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className='flex justify-center'>
                      <img src={pro.image} alt="img" className='max-w-full w-full sm:w-full h-52 object-contain' />
                    </div>

                    {/* Product Info */}
                    <div className='dark:text-white mt-4'>
                      <h2 className='font-semibold text-xl'>{pro.title}</h2>
                      <span className='font-bold mt-5 block'>${pro.price}</span>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <p className="text-center text-gray-500">Not Found Products Here ??</p>



            )}

          </div>
        </div>
      </div>
    </>
  )
}
