import { Link, useLocation } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import Checkout from "./payments/Checkout";


export default function Footer() {
    const currentRoute = useLocation().pathname
    
    return (
        <>
            <div className="flex items-center justify-between max-w-640 px-5 py-5 h-fit w-full text-xs font-semibold fixed bottom-0 left-1/2 -translate-x-1/2 z-30 bg-white dark:bg-slate-500 footer">
                <Link to="/home" className={`${currentRoute.startsWith("/home") && !currentRoute.includes("cart") && !currentRoute.includes("search") && !currentRoute.includes("favourites")? "text-main dark:text-purple-300" : "text-txt-main dark:text-white"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <CiShop className="text-2xl"/>
                    Shop
                </Link>
                <Link to="/home/search" className={`${currentRoute.includes("search")? "text-main dark:text-purple-300" : "text-txt-main dark:text-white"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <MdOutlineManageSearch className="text-2xl"/>
                    Explore
                </Link>
                <Link to="/home/cart" className={`${currentRoute.includes("cart")? "text-main dark:text-purple-300" : "text-txt-main dark:text-white"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <BsCart3 className="text-2xl"/>
                    Cart
                </Link>
                <Link to="/home/favourites" className={`${currentRoute.includes("favourites")? "text-main dark:text-purple-300" : "text-txt-main dark:text-white"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <IoMdHeartEmpty className="text-2xl"/>
                    Favourite
                </Link>
                <Link to="/account" className={`${currentRoute.includes("account")? "text-main dark:text-purple-300" : "text-txt-main dark:text-white"} flex flex-col items-center justify-center w-fit h-fit gap-1`}>
                    <FiUser className="text-2xl"/>
                    Account
                </Link>
            <Checkout/>
            </div>
        </>
    )
}
