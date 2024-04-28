import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { HiOutlineLogout } from 'react-icons/hi'
import { LuHeadphones, LuUser } from 'react-icons/lu'
import avatar from "../../assests/avatar.png"

export default function Profile() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Account</h1>
            </div>
            <div className='flex flex-col items-center justify-start gap-2.5'>
                <div className='rounded-full overflow-hidden w-20 h-20'>
                    <img src={avatar} alt="avatar" className='w-full h-full'/>
                </div>
                <h1 className='text-xl text-txt-main font-semibold'>Ahmed Mohamed</h1>
                <p className='text-sm text-7c -mt-2'>ahmed@yahoo.com</p>
            </div>
            <div className="flex flex-col items-center justify-start gap-2.5 pb-2.5 border-b border-solid dark:border-slate-700 border-e2 w-full divide-y divide-solid divide-e2 dark:divide-slate-700">
                <Link to="/account/profile-information/change-email" className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <div className="flex items-center w-full justify-start gap-2.5">
                        <LuUser className="text-lg"/>
                        <h2 className="font-medium text-base">Change Email</h2>
                    </div>
                    <IoIosArrowForward className="text-lg"/>
                </Link>
                <Link to="/account/help&support" className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <div className="flex items-center w-full justify-start gap-2.5">
                        <LuHeadphones className="text-lg"/>
                        <h2 className="font-medium text-base">Help & Support</h2>
                    </div>
                    <IoIosArrowForward className="text-lg"/>
                </Link>
            </div>
            <button 
                className="dark:bg-purple-500 text-lg font-medium mt-5 relative rounded-2xl text-main dark:text-white w-full h-btn flex items-center justify-center gap-2.5 border border-solid border-main"
                onClick={()=>{
                    window.location.href = "/login"
                }}
            >
                <HiOutlineLogout className="text-xl"/>
                Sign out
            </button>
            <Footer/>
        </div>
    )
}
