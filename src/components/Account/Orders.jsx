import { FaAngleLeft } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import bag from "../../assests/sad-bag.png"
import { IoIosArrowBack } from 'react-icons/io'

export default function Orders() {
    const orders = useSelector((state)=>state.orders) || []
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Orders</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-start grow gap-5 h-full">
                {
                    orders.length > 0 ? 
                        <div className="flex flex-col items-center justify-start gap-2 border-y border-solid border-e2 dark:border-slate-500 w-full divide-y divide-solid divide-e2 dark:divide-slate-500">
                        {
                            orders.map((order, index)=>{
                                return(
                                    <div key={index} className='w-full py-2.5 flex flex-col items-start justify-start gap-2.5'>
                                        <p className='text-txt-main font-semibold dark:text-white'>Order: {index + 1}</p>
                                        <p className='text-txt-main font-semibold dark:text-white'>Total price: {order.price}$</p>
                                        <p className='text-main dark:text-purple-300'>at {order.time}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    :   
                        <div className="h-full w-full grow flex flex-col items-center justify-center gap-10">
                            <div className='rounded-full bg-land h-40 w-40 relative before:content-[" "] before:absolute before:w-28 before:h-0.5 before:bg-black before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:rounded-lg'>
                                <div className='w-3/5 h-4/5 absolute bottom-0 left-1/2 -translate-x-1/2'>
                                    <img src={bag} alt="sad-bag" className='w-full h-full' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-lg text-txt-main dark:text-purple-300 font-bold text-center mb-5'>You do not have any orders yet</h1>
                                <p className='text-sm text-7c text-center'>If you have any issue with your past orders, you can request return item, through My Orders &gt; Item Details of concerned item</p>
                            </div>
                            <Link to="/home" className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center text-sm tracking-wider px-5">Start shopping</Link>
                        </div>
                }
            </div>
            <Footer/>
        </div>
    )
}
