import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { bestSelling } from "../../utils/bestSelling"
import { exOffers } from "../../utils/exOffers"
import { groceries, legumes } from "../../utils/groceries"
import { FaAngleLeft } from "react-icons/fa"
import { IoShareOutline } from "react-icons/io5";
import ProductDetails from "./ProductDetails"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"
import UpdateFavorite from "../favorites/UpdateFavorite"
import { products } from "../../utils/products"
import ProductQuantity from "./ProductQuantity"
import Footer from "../Footer"

export default function Product() {
    // products data from api response
    // const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const { productTitle } = useParams()
    const { searchedProductTitle } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        products.map((prod)=>{
            if (prod.title === searchedProductTitle) {
                setProduct(products.filter((p)=>p.title === searchedProductTitle)[0])
            }
        })
        // all conditions below doesnot matter when use api response products just the one above
        bestSelling.map((prod)=>{
            if (prod.title === productTitle) {
                setProduct(bestSelling.filter((p)=>p.title === productTitle)[0])
            }
        })
        exOffers.map((prod)=>{
            if (prod.title === productTitle) {
                setProduct(exOffers.filter((p)=>p.title === productTitle)[0])
            }
        })
        groceries.map((prod)=>{
            if (prod.title === productTitle) {
                setProduct(groceries.filter((p)=>p.title === productTitle)[0])
            }
        })
        legumes.map((prod)=>{
            if (prod.title === productTitle) {
                setProduct(legumes.filter((p)=>p.title === productTitle)[0])
            }
        })
    },[product, productTitle, searchedProductTitle])
    return (
        <div className="flex items-center justify-start flex-col min-h-screen pb-24">
            <div className="bg-sec-color dark:bg-slate-600 bottom-raduis w-full pt-5 h-72 pb-10 flex flex-col items-center">
                <div className="flex items-center justify-between px-5 dark:text-white text-txt-main text-2xl w-full">
                    <button onClick={()=>navigate(-1)}><FaAngleLeft/></button>
                    <Link><IoShareOutline/></Link>
                </div>
                <div className="h-52 w-44">
                    <img src={product.image} alt={product.title} className="w-full h-full" />
                </div>
            </div>
            <div className="px-5 py-7 flex flex-col items-start justify-start w-full">
                <div className="flex items-center justify-between w-full text-txt-main dark:text-white text-2xl">
                    <h1 className="font-semibold">{product.title}</h1>
                    <UpdateFavorite/>
                </div>
                <p className="text-7c dark:text-e2 font-medium text-base">{product.amount}, price</p>
                <ProductQuantity product={product}/>
                <ProductDetails/>
                <button className="bg-main dark:bg-purple-500 mt-5 rounded-3xl text-white w-full h-btn flex items-center justify-center" onClick={()=>{
                    dispatch(addToCart(product))
                }}>Add To Basket</button>
            </div>
            <Footer/>
        </div>
    )
}
