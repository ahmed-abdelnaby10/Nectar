import { FaAngleRight } from "react-icons/fa";
import avatar from "../../assests/avatar.png";
import { LuPencil } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCreditCard } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../rtk/slices/user-slice";

export default function Account() {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col items-center justify-start gap-5 pt-5 w-full pb-24 min-h-screen">
            <div className="flex items-center justify-start gap-5 w-full px-5">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={avatar} alt="avatar" />
                </div>
                <div>
                    <h2 className="flex items-center gap-2.5 text-txt-main dark:text-white text-lg font-semibold">Ahmed Mohamed <LuPencil className="text-main dark:text-white"/></h2>
                    <p className="text-base text-7c dark:text-e2">Imshuvo97@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-5 pb-5 border-y border-solid dark:border-slate-700 border-e2 w-full divide-y divide-solid divide-e2 dark:divide-slate-700">
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/profile-information" className="flex items-center w-full justify-start gap-5">
                        <FaRegAddressCard className="text-2xl"/>
                        <h2 className="font-semibold">Profile Information</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/scan&go" className="flex items-center w-full justify-start gap-5">
                        <RiShoppingBag3Line className="text-2xl"/>
                        <h2 className="font-semibold">Scan & go</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/my-club" className="flex items-center w-full justify-start gap-5">
                        <RiShoppingBag3Line className="text-2xl"/>
                        <h2 className="font-semibold">MyCLUB Card</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/orders" className="flex items-center w-full justify-start gap-5">
                        <RiShoppingBag3Line className="text-2xl"/>
                        <h2 className="font-semibold">Orders</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/addresses" className="flex items-center w-full justify-start gap-5">
                        <GrLocation className="text-2xl"/>
                        <h2 className="font-semibold">Delivery Address</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="" className="flex items-center w-full justify-start gap-5">
                        <HiOutlineCreditCard className="text-2xl"/>
                        <h2 className="font-semibold">Payment Methods</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="/account/coupons" className="flex items-center w-full justify-start gap-5">
                        <BiSolidDiscount className="text-2xl rotate-45"/>
                        <h2 className="font-semibold">Promo Code</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="" className="flex items-center w-full justify-start gap-5">
                        <GoBell className="text-2xl"/>
                        <h2 className="font-semibold">Notifications</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="" className="flex items-center w-full justify-start gap-5">
                        <FaRegQuestionCircle className="text-2xl"/>
                        <h2 className="font-semibold">Help</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
                <div className="flex items-center justify-center px-5 text-txt-main dark:text-white w-full pt-5">
                    <Link to="" className="flex items-center w-full justify-start gap-5">
                        <BsExclamationCircle className="text-2xl"/>
                        <h2 className="font-semibold">About</h2>
                    </Link>
                    <FaAngleRight className="text-xl"/>
                </div>
            </div>
            <button 
                className="bg-sec-color dark:bg-purple-500 text-lg font-semibold mt-5 relative rounded-3xl text-main dark:text-white w-100 mx-auto h-btn flex items-center justify-center"
                onClick={()=>{
                    dispatch(clearUser())
                    window.location.href = "/login"
                }}
            >
                Log out
                <FiLogOut className="absolute text-2xl center-y left-5"/>
            </button>
            <Footer/>
        </div>
    )
}
