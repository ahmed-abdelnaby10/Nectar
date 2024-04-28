import { FaAngleLeft } from 'react-icons/fa'
import { HiOutlineCreditCard } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import { clearOrdersHistory } from '../../rtk/slices/transactionHistory-slice'
import { IoIosArrowBack } from 'react-icons/io'

export default function TransactionHistory() {
    // const history = useSelector((state)=>state.history)
    const history = []
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
            <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">My Transactions</h1>
            </div>
            <div className="w-full flex flex-col items-center justify-start grow gap-5 h-full">
                {
                    history.length > 0 ? 
                        <div className="flex flex-col items-center justify-start gap-2 border-y border-solid border-e2 dark:border-slate-500 w-full divide-y divide-solid divide-e2 dark:divide-slate-500">
                        {
                            history.map((order, index)=>{
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
                            <div className='bg-main/20 w-52 dark:bg-purple-500/20 h-52 flex items-center justify-center rounded-full'>
                                <div className='bg-main/65 dark:bg-purple-500/45 w-32 h-32 flex items-center justify-center rounded-full'>
                                    <div className='bg-main dark:bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full'>
                                        <HiOutlineCreditCard className='text-white text-4xl'/>
                                    </div>
                                </div>
                            </div>
                            <h1 className='text-xl text-main dark:text-purple-300 font-bold text-center'>No My Transactions <br /> available</h1>
                        </div>
                }
            </div>
            {
                !history.length > 0?
                ""
                :
                <button className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-fit h-btn flex items-center justify-center mt-5 text-sm tracking-wider px-5" onClick={()=>{
                    dispatch(clearOrdersHistory())
                }}>
                    Clear history
                </button>
            }
            <Footer/>
        </div>
    )
}
