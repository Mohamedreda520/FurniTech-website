
import Heading from '../componants/Shared/Heading'
import { Link } from 'react-router-dom'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
import { TbCategory } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { clearcart, deCrement, deleteFromCart, inCrement } from '../componants/rtk/slices/CartSlice';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
export default function Cart() {
    const cart = useSelector((state) => state.Cart);
    const dispatch = useDispatch()

    // const totalPrice = cart.reduce((acc, productnum) => {
    //     acc += productnum.price * productnum.quantity
    //     return acc
    // }, 0)

    // 



  



const totalPrice = cart.reduce((acc, productnum) => acc + productnum.price * productnum.quantity, 0);
const finalAmount = (parseFloat(totalPrice.toFixed(2)) + 10.40).toFixed(2);
return (
        <div className='py-10'>

            <div className='container'>
                <Heading
                    title={'Cart page'}
                    />

                {/* menu */}
                <ul className="menu menu-horizontal bg-base-200 rounded-box w-full gap-5">
                    <li>
                        <Link to={'/'}>
                            <FaHome className='size-7' />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/shop'}>
                            <TbCategory className='size-7' />
                        </Link>
                    </li>
                </ul>

                <div className='flex items-start gap-5 flex-wrap '>

                    {/* table */}
                    <div className="overflow-x-auto mt-4 flex-1 w-full dark:text-white">
                        <table className="table">
                            {/* head */}
                            <thead className='dark:text-white'>
                                <tr>
                                 
                                    <th>img</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {cart.map((pro, index) => {
                                    return (
                                        <tr key={pro.id} className='hover:bg-base-300 dark:hover:bg-gray-800'>
                                          
                                            <td>
                                                <img src={pro.image} alt='img' className=' max-w-full w-[100px] h-[100px] object-scale-down' />
                                            </td>
                                            <td>{pro.title}</td>
                                            <td>${pro.price}</td>
                                            <td>
                                                <button className="btn btn-square"
                                                    onClick={() => dispatch(inCrement(pro))}
                                                >
                                                    <IoMdAdd className='' />
                                                </button>
                                                <span className='btn '>{pro.quantity}</span>
                                                <button className="btn btn-square" onClick={() => {
                                                    if (pro.quantity > 1) {
                                                        dispatch(deCrement(pro))
                                                    } else {
                                                        dispatch(deleteFromCart(pro))
                                                    }
                                                }}>
                                                    <FaMinus />
                                                </button>

                                            </td>
                                        </tr>

                                    )
                                })}


                            </tbody>
                        </table>
                    </div>

                    {/* total */}
                    <div className='mt-10 bg-slate-50 py-5 px-5 w-full sm:w-[30%] rounded-md '>
                        <h1 className='font-semibold text-2xl mb-5'>Order summary</h1>
                        <ul>
                            <li className='flex items-center justify-between border-b border-gray-200 py-1 mb-2'>
                                <h3 className='font-semibold'>subtotal</h3>
                                <span className='font-semibold'>${totalPrice.toFixed(2)}</span>
                            </li>
                            <li className='flex items-center justify-between border-b border-gray-200 py-3 mb-2'>
                                <h3 className='font-semibold'>Shipping estimate</h3>
                                <span className='font-semibold'>$5.00</span>
                            </li>
                            <li className='flex items-center justify-between border-b border-gray-200 py-3 mb-2'>
                                <h3 className='font-semibold'>Tax estimate</h3>
                                <span className='font-semibold'>$5.40</span>
                            </li>
                        </ul>
                        {/* all total */}
                        <div className='flex items-center justify-between mb-6'>
                        <h1 className='font-semibold text-xl mt-4'>Total amount: </h1>
                        <span className='font-semibold'>$ {finalAmount}</span>
                        </div>
                                
                         {/* زر الدفع عبر PayPal */}
                         <PayPalScriptProvider options={{ "client-id": "AS_XJFHCX-1AJKKjeT2AaYmrAc_vD6mZkoPHkXgaWrdlQlTdGXciSyOIvUyDiVDtr4o9fllA_JVqbD44"
                          }}>
                            <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: finalAmount
                                            }
                                        }]
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        console.log('details',details);  // للتأكد من البيانات التي تم التقاطها
                                        Swal.fire({
                                            // position: "center",
                                            icon: "success",
                                            title: `Transaction completed by ${details.payer.name.given_name}`,
                                            showConfirmButton: false,
                                            timer: 1500,
                                        
                                          });
                                          dispatch(clearcart())
                                        
                                    })
                                    // .catch(error => {
                                    //     console.log('Error:', error);
                                    // });
                                }}
                                
                            />
                        </PayPalScriptProvider>
                                {/* ss */}
                                {/* <button className="btn btn-primary btn-block mt-5">Checkout</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
