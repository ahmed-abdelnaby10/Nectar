import { FaAngleLeft, FaBars, FaFileArchive } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { IoBarcodeSharp } from "react-icons/io5";
import { IoIosArrowBack } from 'react-icons/io';


export default function ScanGo() {
  const user = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-center justify-between gap-5 pt-5 min-h-screen'>
        <div className="flex items-center justify-between relative w-full px-5">
        <button onClick={()=>navigate(-1)} className='w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
            <Link to="/account/scan&go/user-guide" className="text-lg text-main font-semibold capitalize dark:text-white">How it works?</Link>
        </div>
        <div className='flex flex-col items-center justify-center grow w-full h-full gap-5 px-5'>
          <h1 className='text-txt-main text-lg font-semibold text-center dark:text-white'>Welcome, {user.userName}</h1>
          <p className='text-7c text-center dark:text-e2'>Welcome in Scan & Go ! <br /> The fastest way to shoping</p>
          <div className='border-2 border-dashed border-7c w-44 h-44 dark:border-slate-300'></div>
        </div>
        <div className='bg-main/70 dark:bg-purple-600 p-5 flex items-center justify-between w-full scan-footer'>
          <Link to="/account/transaction-history" className='flex items-center flex-col text-center text-white text-sm gap-1 basis-1/3'>
            <FaFileArchive className='text-2xl'/>
            My Order
          </Link>
          <div className='flex items-center justify-center border-4 border-solid border-e2 rounded-full w-24 h-24'>
            <button className='flex items-center flex-col justify-center text-center text-white gap-1 outline-main/35 w-20 h-20 rounded-full bg-red-500 dark:bg-main text-xs'>
              <IoBarcodeSharp className='text-4xl'/>
              scan
            </button>
          </div>
          <Link to="/account/scan&go/more" className='flex items-center flex-col text-center text-white text-sm gap-1 basis-1/3'>
            <FaBars className='text-2xl'/>
            More
          </Link>
        </div>
    </div>
  )
}
