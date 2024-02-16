import { Link, useParams } from "react-router-dom"
import { products } from "../../utils/products"
import { FaAngleLeft } from "react-icons/fa"
import { IoFilterSharp } from "react-icons/io5";
import ProductsCards from "./ProductsCards"
import Footer from "../Footer"
// import { useSelector } from "react-redux"

export default function SearchedProducts() {
    // data using response of api
    // const products = useSelector((state)=>state.products)

    const { cateTitle } = useParams()
    const cateProducts = products.filter((product)=>product.category === cateTitle) //exchange products from utils here with api response products
    return (
        <div className="flex flex-col items-center justify-start pt-5 px-5 pb-24 min-h-screen">
            <div className="flex items-center justify-between w-full mb-7">
                <Link to="/home/search"><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></Link>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">{cateTitle}</h1>
                <IoFilterSharp className="text-2xl text-txt-main dark:text-white"/>
            </div>
            <ProductsCards data={cateProducts}/>
            <Footer/>
        </div>
    )
}
