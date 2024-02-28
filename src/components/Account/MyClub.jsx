import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import { useSelector } from "react-redux"
import clubImg from "../../assests/myclub.png"

export default function MyClub() {
    const navigate = useNavigate()
    const country = useSelector((state)=>state.country)
    const points = useSelector((state)=> state.points)
    const pointsValue = points === 0 ? 0 : points / 10 
    return (
        <div className="flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen">
            <div className="flex items-center justify-between relative w-full">
                <button onClick={()=>navigate(-1)}><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">MyCLUB Card</h1>
                <div className='rounded-full flex items-center justify-center w-10 h-10 overflow-hidden bg-center bg-cover' style={{backgroundImage:`url(${country})`}}>
                </div>
            </div>
            <div className='rounded-xl shadow-custom flex flex-col items-center justify-between bg-main/60 dark:bg-purple-500/60'>
                <div className='flex flex-col items-center justify-between w-full p-5 gap-2.5'>
                    <div className='flex items-center justify-between w-full text-white'>
                        <h1 className='text-2xl font-bold oleo-font whitespace-nowrap'><span className='text-carrot dark:text-main font-semibold oleo-font'>M</span>yCLUB</h1>
                        <p>earn more everyday</p>
                    </div>
                    <div className='flex items-center justify-between w-full text-white'>
                        <h1 className='text-lg font-bold whitespace-nowrap'>Points</h1>
                        <p>{Math.floor(+points)}</p>
                    </div>
                    <div className='flex items-center justify-between w-full text-white'>
                        <h1 className='text-lg font-bold whitespace-nowrap'>Dolar</h1>
                        <p>{pointsValue.toFixed(2)}</p>
                    </div>
                </div>
                <img src={clubImg} alt="myClub" />
            </div>
            <Link to="/account/transaction-history" className='text-main dark:text-white flex items-center justify-center h-btn w-full border-2 border-solid border-main dark:border-purple-500 rounded-lg dark:bg-slate-500 hover:bg-main dark:hover:bg-purple-500 hover:text-white duration-300 tracking-wide font-semibold uppercase mt-10'>Transaction history</Link>
            <Footer/>
        </div>
    )
}
