import {useParams} from "react-router-dom"
import ProductsCards from "../explore/ProductsCards"
import { useEffect, useState } from "react"
import { exOffers } from "../../utils/exOffers"
import { bestSelling } from "../../utils/bestSelling"
import { groceries } from "../../utils/groceries"
import { FaAngleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer"
// import { useSelector } from "react-redux"

export default function Offers() {
    // data using response of api
    // const products = useSelector((state)=>state.products)
    // const bestSelling = useSelector((state)=>state.bestSelling)
    // const exOffers = useSelector((state)=>state.exclusiveOffers)
    // const groceries = products.filter((product)=> product.category === "groceries")
    const navigate = useNavigate()
    const {offerTitle} = useParams()
    const [data, setData] = useState([])
    useEffect(()=>{
        if (offerTitle === "Exclusive Offer") {
            setData(exOffers)
        }
        if (offerTitle === "Best Selling") {
            setData(bestSelling)
        }
        if (offerTitle === "Groceries") {
            setData(groceries)
        }
    },[])
    return (
        <div className="flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen">
            <div className="flex items-center justify-center relative w-full">
                <button className="absolute center-y left-0 text-2xl" onClick={()=>navigate(-1)}><FaAngleLeft/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">{offerTitle}</h1>
            </div>
            <ProductsCards data={data}/>
            <Footer/>
        </div>
    )
}
