import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiXMark } from 'react-icons/hi2'
import { useDispatch, useSelector } from "react-redux"
import { reversePay } from '../../rtk/slices/payment-slice'
import { FaAngleRight } from 'react-icons/fa'
import ChooseMethode from './ChooseMethod'
import master from "../../assests/master.png"
import { addPoints } from '../../rtk/slices/clubPoints-slice'
import axios from "axios";
import { addToOrdersHistory } from '../../rtk/slices/transactionHistory-slice'
import { removePromoCode } from '../../rtk/slices/promoCodes-slice'

export default function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const show = useSelector((state)=> state.pay)
    const cartAmount = useSelector((state)=> state.cartAmount)
    const [toggle, setToggle] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const updateToggle = (id)=> {
        setToggle(id)
    }
    const [discount, setDiscount] = useState(0)
    const [delivery, setDelivery] = useState(20)

    const promoCodes = useSelector((state)=>state.promoCodes)
    const [code, setCode] = useState()
    
    const user = useSelector((state) => state.user);

    useEffect(()=>{
        const price = cartAmount.reduce((acc, curr)=>{
            return acc + (curr.discount > 0 ? (curr.price - (curr.price * curr.discount / 100)) : curr.price) * curr.quan
        },0)
        setSubTotal(price)
    },[cartAmount])

    // const postOrderOnClick = () => {
    //     axios.post(`${process.env.REACT_APP_SERVER}/orders`, {
    //         userEmail: user.email,
    //         orderDetails: cartAmount,
    //     })
    //     .then((res) => console.log(res.data))
    //     .catch((e) => console.log(e));
    // };
    // const postPointsOnClick = (points) => {
    //     axios.post(`${process.env.REACT_APP_SERVER}/users`, {
    //         userEmail: user.email,
    //         points: points,
    //     })
    //     .then((res) => console.log(res.data))
    //     .catch((e) => console.log(e));
    // };

    return (
        <div className={`flex flex-col w-full ${show? "bottom-0" : "-bottom-700px"} h-fit px-5 py-8 duration-300 absolute z-50 left-0 bg-gray-50 dark:bg-gray-500 top-raduis`}>
            <div className='w-full flex items-center justify-between pb-8'>
                <h1 className='font-semibold text-xl text-txt-main dark:text-white'>Checkout</h1>
                <HiXMark onClick={()=>{dispatch(reversePay(false))}} className='text-2xl text-txt-main dark:text-white cursor-pointer'/>
            </div>
            <ul className="w-full flex flex-col divide-y divide-solid divide-e2 dark:divide-slate-400">
                <li className="flex items-center justify-between w-full pb-5">
                    <div>
                        <p className='text-7c dark:text-e2 text-base font-semibold cursor-pointer' onClick={()=>{
                            if (toggle !== 1) {
                                updateToggle(1)
                            }else {
                                updateToggle(0)
                            }
                        }}>Delivery</p>
                    </div>
                    <div className='flex items-center w-fit h-full gap-2'>
                        <p className='text-txt-main dark:text-white text-base font-semibold'>Select Method</p>
                        <FaAngleRight className={`${toggle === 1 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300 cursor-pointer`} onClick={()=>{
                            if (toggle !== 1) {
                                updateToggle(1)
                            }else {
                                updateToggle(0)
                            }
                        }}/>
                    </div>
                </li>
                <li className={`${toggle === 1 ? "flex" : "hidden"} w-full py-5`}>
                    <div className="grid grid-cols-2 gap-5 w-full h-full">
                        <p className="text-txt-main dark:text-white text-sm capitalize cursor-pointer">home delivery</p>
                        <p className="text-txt-main dark:text-white text-sm capitalize cursor-pointer">mailbox delivery</p>
                        <p className="text-txt-main dark:text-white text-sm capitalize cursor-pointer">pick-up point</p>
                        <p className="text-txt-main dark:text-white text-sm capitalize cursor-pointer">instant delivery</p>
                    </div>
                </li>

                {/* ------------------------------------------ */}

                <li className="flex items-center justify-between w-full py-5">
                    <div>
                        <p className='text-7c dark:text-e2 text-base font-semibold cursor-pointer' onClick={()=>{
                            if (toggle !== 2) {
                                updateToggle(2)
                            }else {
                                updateToggle(0)
                            }
                        }}>Payment</p>
                    </div>
                    <div className="flex items-center w-fit gap-2">
                        <div className="w-fit h-fit px-2 bg-blue-500">
                            <img src={master} alt="Mastercard" className="w-5 h-5"/>
                        </div>
                        <FaAngleRight className={`${toggle === 2 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300 cursor-pointer`} onClick={()=>{
                            if (toggle !== 2) {
                                updateToggle(2)
                            }else {
                                updateToggle(0)
                            }
                        }}/>
                    </div>
                </li>
                <li className={`${toggle === 2 ? "flex" : "hidden"} w-full py-5`}>
                    <ChooseMethode/>
                </li>

                {/* ------------------------------------------ */}

                <li className="flex items-center justify-between w-full py-5">
                    <div>
                        <p className='text-7c dark:text-e2 text-base font-semibold cursor-pointer' onClick={()=>{
                            if (toggle !== 3) {
                                updateToggle(3)
                            }else {
                                updateToggle(0)
                            }
                        }}>Promo Code</p>
                    </div>
                    <div className="flex items-center w-fit gap-2">
                        <p className='text-txt-main dark:text-white text-base font-semibold'>Pick discount</p>
                        <FaAngleRight className={`${toggle === 3 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300 cursor-pointer`} onClick={()=>{
                            if (toggle !== 3) {
                                updateToggle(3)
                            }else {
                                updateToggle(0)
                            }
                        }}/>
                    </div>
                </li>
                <li className={`${toggle === 3 ? "flex" : "hidden"} w-full py-5`}>
                    <form className="flex items-center justify-between w-full gap-5" onSubmit={(e)=>{
                        e.preventDefault();
                        const data = new FormData(e.target);
                        if (promoCodes.includes(+[...data.entries()][0][1])) {
                            setDiscount(subTotal / 2)
                        }
                    }}>
                        <input 
                            type="text" 
                            name="promo-code" 
                            placeholder="Add Promo code" 
                            className="block h-8 pl-2.5 placeholder:text-7c placeholder:text-sm dark:placeholder:text-e2 placeholder:font-medium bg-transparent border-b border-solid border-main dark:border-purple-500 focus:outline-none text-base text-txt-main font-semibold caret-txt-main dark:text-white dark:caret-e2 w-full" 
                            id='coupon'
                            value={code}
                            onChange={(e)=>{setCode(e.target.value)}}
                        />
                        <button className="text-white bg-main dark:bg-purple-500 w-fit px-5 h-11 flex items-center text-center justify-center rounded-lg cursor-pointer">Apply</button>
                    </form>
                </li>

                {/* ------------------------------------------ */}

                <li className="flex items-center justify-between w-full py-5">
                    <div>
                        <p className='text-7c dark:text-e2 text-base font-semibold cursor-pointer' onClick={()=>{
                            if (toggle !== 4) {
                                updateToggle(4)
                            }else {
                                updateToggle(0)
                            }
                        }}>Total Cost</p>
                    </div>
                    <div className="flex items-center w-fit gap-2">
                        <p className='text-txt-main dark:text-white text-base font-semibold'>${(subTotal + delivery - discount).toFixed(2)}</p>
                        <FaAngleRight className={`${toggle === 4 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300 cursor-pointer`} onClick={()=>{
                            if (toggle !== 4) {
                                updateToggle(4)
                            }else {
                                updateToggle(0)
                            }
                        }}/>
                    </div>
                </li>
                <li className={`${toggle === 4 ? "flex" : "hidden"} w-full py-5`}>
                    <div className='flex items-center justify-between gap-2.5 w-full'>
                        <div>
                            <h1 className='text-sm text-txt-main dark:text-white mb-2.5 font-semibold'>Subtotal:</h1>
                            <span className='text-sm text-7c dark:text-e2 font-semibold'>${(+subTotal).toFixed(2)}</span>
                        </div>
                        <div>
                            <h1 className='text-sm text-txt-main dark:text-white mb-2.5 font-semibold'>Delivery fees:</h1>
                            <span className='text-sm text-7c dark:text-e2 font-semibold'>${delivery}</span>
                        </div>
                        <div>
                            <h1 className='text-sm text-txt-main dark:text-white mb-2.5 font-semibold'>Discount:</h1>
                            <span className='text-sm text-7c dark:text-e2 font-semibold'>${discount}</span>
                        </div>
                        <div>
                            <h1 className='text-sm text-txt-main dark:text-white mb-2.5 font-semibold'>Total:</h1>
                            <span className='text-sm text-7c dark:text-e2 font-semibold'>${(subTotal + delivery - discount).toFixed(2)}</span>
                        </div>
                    </div>
                </li>
                <p className='text-xs text-7c dark:text-e2 font-medium tracking-wider py-5'>By placing an order you agree to our <br /><span className='text-txt-main dark:text-white font-semibold'>Terms</span> And <span className='text-txt-main dark:text-white font-semibold'>Conditions</span></p>
            </ul>
            <button className='flex bg-main dark:bg-purple-500 relative rounded-3xl text-white w-100 mx-auto h-btn items-center justify-center tracking-widest cursor-pointer' onClick={()=>{
                    navigate('/home/cart/payment-success')
                    dispatch(reversePay(false))
                    const orderTime = new Date().toUTCString()
                    console.log(orderTime);
                    dispatch(addToOrdersHistory({price: (subTotal + delivery - discount).toFixed(2), time: orderTime}))
                    dispatch(addPoints(+subTotal / 20))
                    // postOrderOnClick()
                    // postPointsOnClick(+subTotal / 20)
                    dispatch(removePromoCode(code))
                }}>
                Place order
            </button>
        </div>
    )
}
