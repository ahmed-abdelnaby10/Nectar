import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { bestSelling } from "../../utils/bestSelling"
import { exOffers } from "../../utils/exOffers"
import { groceries, legumes } from "../../utils/groceries"
import ProductDetails from "./ProductDetails"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"
import UpdateFavorite from "../favorites/UpdateFavorite"
import { products } from "../../utils/products"
import ProductQuantity from "./ProductQuantity"
import Footer from "../Footer"
import { IoIosArrowBack } from "react-icons/io"
import { BsCart3 } from "react-icons/bs"
import { GrShareOption } from "react-icons/gr"

export default function Product() {
    const cartProducts = useSelector((state)=> state.cart)
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
        products.map((prod)=>{
            if (prod.title === productTitle) {
                setProduct(products.filter((p)=>p.title === productTitle)[0])
            }
        })
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
            <div className="bg-sec-color dark:bg-slate-600 bottom-raduis w-full pt-5 h-72 pb-10 flex flex-col items-center relative">
            <div className="flex items-center justify-between px-5 dark:text-white text-txt-main text-2xl w-full">
                    <button onClick={()=>navigate(-1)} className="w-6 h-6 bg-white rounded-full border border-solid border-e2 flex items-center justify-center"><IoIosArrowBack className="w-4 pr-0.5"/></button>
                    <div className="flex items-center justify-end w-fit gap-2.5">
                        <button className="w-6 h-6 bg-white rounded-full border border-solid border-e2 flex items-center justify-center relative">
                            <BsCart3 className="w-4 pr-0.5"/>
                            <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-red-500 text-white text-10px flex items-center justify-center">+{cartProducts.length}</div>
                        </button>
                        <button className="w-6 h-6 bg-white rounded-full border border-solid border-e2 flex items-center justify-center"><GrShareOption className="w-4 pr-0.5"/></button>
                    </div>
                </div>
                <div className="h-52 w-44">
                    <img src={product.image} alt={product.title} className="w-full h-full" />
                </div>
                {
                    product.discount > 0 ?
                    <div className='bg-carrot dark:bg-main p-2 text-sm text-white absolute w-14 h-14 self-end right-8 -bottom-3 flex items-center justify-center text-center before:absolute before:content-[""] before:top-0 before:left-0 before:w-14 before:h-14 before:bg-carrot dark:before:bg-main before:rotate-30 after:absolute after:content-[""] after:top-0 after:left-0 after:w-14 after:h-14 after:bg-carrot dark:after:bg-main after:rotate-60'>
                        <p className="m-0 p-0 z-50">Offer <br /> - {product.discount}%</p>
                    </div>
                    : ""
                }
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
