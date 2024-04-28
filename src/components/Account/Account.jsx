import { FaRegUserCircle } from "react-icons/fa";
import { LuHeadphones, LuScanLine } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCreditCard, HiOutlineLogout } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineCardTravel, MdOutlineLock } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export default function Account() {
    const userCountry = useSelector((state)=>state.country)
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-start gap-5 pt-5 w-full pb-24 min-h-screen px-5">
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate("/home")} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Settings</h1>
            </div>
            <div className="flex flex-col items-center justify-start gap-2.5 pb-2.5 border-y border-solid dark:border-slate-700 border-e2 w-full divide-y divide-solid divide-e2 dark:divide-slate-700">
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/profile-information" className="flex items-center w-full justify-start gap-2.5">
                        <FaRegUserCircle className="text-lg"/>
                        <h2 className="font-semibold">Account</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="" className="flex items-center w-full justify-start gap-2.5">
                        <GoBell className="text-lg"/>
                        <h2 className="font-semibold">Notifications</h2>
                    </Link>
                    <label>
                        <input className="control appearance-none hidden" type="checkbox"/>
                        <div className="toggle relative"></div>
                    </label>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/country" className="flex items-center w-full justify-start gap-2.5">
                        <div 
                            className="w-5 h-5 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat" 
                            style={{backgroundImage:`url(${userCountry.flag})`}}
                        ></div>
                        <h2 className="font-semibold">Country</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/scan&go" className="flex items-center w-full justify-start gap-2.5">
                        <LuScanLine className="text-lg"/>
                        <h2 className="font-semibold">Scan & go</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/my-club" className="flex items-center w-full justify-start gap-2.5">
                        <MdOutlineCardTravel className="text-lg"/>
                        <h2 className="font-semibold">MyCLUB Card</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/orders" className="flex items-center w-full justify-start gap-2.5">
                        <RiShoppingBag3Line className="text-lg"/>
                        <h2 className="font-semibold">Orders</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/addresses" className="flex items-center w-full justify-start gap-2.5">
                        <GrLocation className="text-lg"/>
                        <h2 className="font-semibold">Delivery Address</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/account/coupons" className="flex items-center w-full justify-start gap-2.5">
                        <BiSolidDiscount className="text-lg rotate-45"/>
                        <h2 className="font-semibold">Promo Code</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/terms-of-service" className="flex items-center w-full justify-start gap-2.5">
                        <LuHeadphones className="text-lg"/>
                        <h2 className="font-semibold">Terms of Services</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/privacy-policy" className="flex items-center w-full justify-start gap-2.5">
                        <MdOutlineLock className="text-lg"/>
                        <h2 className="font-semibold">Privacy Policy</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
                <div className="flex items-center justify-center text-txt-main dark:text-white w-full pt-2.5">
                    <Link to="/about-nectar" className="flex items-center w-full justify-start gap-2.5">
                        <HiOutlineInformationCircle className="text-lg"/>
                        <h2 className="font-semibold">About</h2>
                    </Link>
                    <IoIosArrowForward className="text-lg"/>
                </div>
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
