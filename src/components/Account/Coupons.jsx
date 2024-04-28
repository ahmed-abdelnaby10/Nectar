import { FaAngleLeft } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import { BiSolidDiscount } from "react-icons/bi";
import { useState } from 'react';
import { addPromoCode } from '../../rtk/slices/promoCodes-slice';
import { IoIosArrowBack } from 'react-icons/io';

export default function Coupons() {
    const [show, setShow] = useState(false)
    const coupons = [
        {
            title: "Eid al-Fitr",
            value: 50,
            code: 8989,
        }
    ]
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen bg-fc'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Coupons</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-start grow gap-5 h-full">
                {
                    coupons.length > 0 ? 
                        <div className="w-full flex flex-col items-center justify-start gap-5">
                        {
                            coupons.map((coupon, index)=>{
                                return(
                                    <>
                                        <div key={index + 1} className='flex flex-col items-start justify-start gap-5 p-5 rounded-lg bg-main text-7c text-xs w-full'>
                                            <h1 className='text-lg font-semibold text-txt-main'><span className='text-white mr-1'>{coupon.title}</span> Promo code!</h1>
                                            <p className='text-sm text-fc'><span className='text-white font-semibold'>Congratulations!</span> <br /> You have earned {coupon.title} promo code, which give you a {coupon.value}% discount for first order.</p>
                                            <button 
                                                className='text-white bg-carrot w-fit h-fit py-3 px-5 rounded-md'
                                                onClick={()=>{
                                                    setShow(true)
                                                }}
                                            >
                                                Claim now!
                                            </button>
                                        </div>
                                        {
                                            show ? 
                                                <div className='w-full flex flex-col items-center gap-5'>
                                                    <div className='text-white text-3xl font-bold bg-carrot rounded-lg w-full h-fit py-8 text-center'>
                                                        {coupon.code}
                                                    </div>
                                                    <button className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-fit h-btn flex items-center justify-center text-sm tracking-wider px-8" onClick={()=>{
                                                        setShow(false)
                                                        dispatch(addPromoCode(coupon.code))
                                                    }}>
                                                        OK
                                                    </button>
                                                </div>
                                            : ""
                                        }
                                    </>
                                )
                            })
                        }
                        </div>
                    :   
                        <div className="h-full w-full grow flex flex-col items-center justify-center gap-10">
                            <div className='bg-main/20 w-52 dark:bg-purple-500/20 h-52 flex items-center justify-center rounded-full'>
                                <div className='bg-main/65 dark:bg-purple-500/45 w-32 h-32 flex items-center justify-center rounded-full'>
                                    <div className='bg-main dark:bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full'>
                                        <BiSolidDiscount className='text-white text-4xl'/>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-lg text-txt-main dark:text-purple-300 font-bold text-center mb-5'>There are no Promo Codes available right now</h1>
                            </div>
                        </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

