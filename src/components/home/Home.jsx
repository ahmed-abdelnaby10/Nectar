import carrot from "../../assests/carrot.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import OffersSlider from "./OfferSlider";
import ProductsSwiper from "./Swiper";
import { bestSelling } from '../../utils/bestSelling';
import { exOffers } from '../../utils/exOffers';
import Legumes from "./Legumes";
import { groceries } from "../../utils/groceries";
import { useNavigate } from 'react-router-dom';
import ThemeSwitcher from "../ThemeSwitcher";
import Footer from "../Footer"
// import { useSelector } from "react-redux"


export default function Home() {
    // data using response of api
    // const products = useSelector((state)=>state.products)
    // const bestSelling = useSelector((state)=>state.bestSelling)
    // const exOffers = useSelector((state)=>state.exclusiveOffers)
    // const groceries = products.filter((product)=> product.category === "groceries")
    
    const navigate = useNavigate();
    return (
        <div className="px-5 flex flex-col items-center pt-5 pb-24 min-h-screen">
            <img src={carrot} alt="carrot" className="w-5 tab:w-10 tab:mb-2.5"/>
            <div className="flex gap-1.5 mt-1 items-center justify-center w-fit h-fit text-txt-main/70 dark:text-white text-lg font-medium">
                <FaLocationDot/> Dhaka, Banassre <ThemeSwitcher/>
            </div>
            <div className="relative w-full h-fit my-5">
                <IoSearchOutline className="text-txt-main dark:text-white text-2xl absolute left-2.5 center-y"/>
                <input type="search" className="w-full rounded-2xl tracking-wider bg-sec-color dark:bg-slate-400 focus:outline-none placeholder:text-sm placeholder:text-7c dark:placeholder:text-e2 placeholder:font-normal text-lg text-txt-main font-medium h-input pl-12" placeholder="Search Store" onFocus={()=>{
                    navigate('/home/search')
                }}/>
            </div>
            <OffersSlider/>
            <ProductsSwiper title="Exclusive Offer" data={exOffers}/>
            <ProductsSwiper title="Best Selling" data={bestSelling}/>
            <Legumes/>
            <ProductsSwiper title="Groceries" data={groceries}/>
            <Footer/>
        </div>
    )
}
