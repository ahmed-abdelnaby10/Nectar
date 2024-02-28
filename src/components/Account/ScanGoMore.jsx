import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { PiGear } from "react-icons/pi";
import { PiCompass } from "react-icons/pi";
import Footer from "../Footer"

export default function ScanGoMore() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen bg-fc'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0'><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">More</h1>
            </div>
            <div className='w-full flex flex-col items-center justify-start gap-5'>
                <Link className='flex items-center justify-start gap-5 p-5 rounded-lg bg-white text-7c text-xs w-full'>
                    <PiGear className='text-3xl'/>
                    <div className='w-full whitespace-nowrap'>
                        <h1 className='text-main text-base font-semibold'>Settings</h1>
                        <p>Manage sound & scanning preferences</p>
                    </div>
                </Link>
                <Link className='flex items-center justify-start gap-5 p-5 rounded-lg bg-white text-7c text-xs w-full'>
                    <PiCompass className='text-3xl'/>
                    <div className='w-full whitespace-nowrap'>
                        <h1 className='text-main text-base font-semibold'>Discover</h1>
                        <p>Discover more with scan&go</p>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}
