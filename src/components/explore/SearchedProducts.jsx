import { Link, useParams } from "react-router-dom"
import { products } from "../../utils/products"
import { FaAngleLeft } from "react-icons/fa"
import { IoFilterSharp } from "react-icons/io5";
import ProductsCards from "./ProductsCards"
export default function SearchedProducts() {
    const { cateTitle } = useParams()
    const cateProducts = products.filter((product)=>product.category === cateTitle)
    return (
        <div className="flex flex-col items-center justify-start pt-7 px-5 pb-10">
            <div className="flex items-center justify-between w-full mb-7">
                <Link to="/home/search"><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></Link>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">{cateTitle}</h1>
                <IoFilterSharp className="text-2xl text-txt-main dark:text-white"/>
            </div>
            <ProductsCards data={cateProducts}/>
        </div>
    )
}
