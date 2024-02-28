import { useParams } from "react-router-dom"
import ProductsCards from "../explore/ProductsCards"
import { useEffect, useState } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer"
import { TbColorFilter } from "react-icons/tb"
import { ourProducts } from "../../utils/ourProducts"
import { exOffers } from "../../utils/exOffers"
import { bestSelling } from "../../utils/bestSelling"
import { groceries } from "../../utils/groceries"
import { products } from "../../utils/products"
// import { useSelector } from "react-redux"

export default function AllProducts() {
    // data using response of api
    // const products = useSelector((state)=>state.products)
    // const groceries = products.filter((product)=> product.category === "Groceries")
    // const bestSelling = products.filter((product)=> product.bestSelling === true)
    // const exOffers = products.filter((product)=> product.excuOffer === true)
    const navigate = useNavigate()
    const {categoryTitle} = useParams()
    const [data, setData] = useState([])
    useEffect(()=>{
        if (categoryTitle === "Exclusive Offer") {
            setData(exOffers)
        }
        else if (categoryTitle === "Best Selling") {
            setData(bestSelling)
        }
        else if (categoryTitle === "Groceries") {
            setData(groceries)
        }
        else if (categoryTitle === "Nectar Products") {
            setData(ourProducts)
        }else {
            setData(products.filter((product)=>product.category === categoryTitle))
        }
    },[]) 
    return (
        <div className="flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen">
            <div className="flex items-center justify-between relative w-full">
                <button onClick={()=>navigate(-1)}><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">{categoryTitle}</h1>
                <TbColorFilter className="text-2xl text-txt-main dark:text-white"/>
            </div>
            <ProductsCards data={data}/>
            <Footer/>
        </div>
    )
}
