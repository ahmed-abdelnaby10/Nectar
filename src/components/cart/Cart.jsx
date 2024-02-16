import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { reversePay } from "../../rtk/slices/payment-slice";
import shoppingCart from "../../assests/shoppingcart.png"
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "../Footer"

export default function Cart() {
    const cartProducts = useSelector((state)=> state.cart)
    const cartAmount = useSelector((state)=> state.cartAmount)
    const [subTotal, setSubTotal]= useState(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        const price = cartAmount.reduce((acc, curr)=>{
            return acc + curr.price * curr.quan
        },0)
        setSubTotal(price)
    },[cartAmount])
    return (
        <div className="flex flex-col items-center justify-between gap-5 pt-5 pb-24 min-h-screen">
            <div className="w-full flex flex-col items-center justify-start grow gap-5 h-full">
                <h1 className="text-lg text-txt-main dark:text-white font-semibold">My Cart</h1>
                {
                    cartProducts.length > 0 ? 
                        <div className="flex flex-col items-center justify-start gap-2 border-y border-solid border-e2 dark:border-slate-500 w-full divide-y divide-solid divide-e2 dark:divide-slate-500">
                        {
                            cartProducts.map((product)=>{
                                return(
                                    <ProductCard key={product.title} product={product}/>
                                )
                            })
                        }
                        </div>
                    :
                        <div className="h-full w-full grow flex flex-col items-center justify-center gap-10">
                            <div className="w-40 h-40 bg-sec-color dark:bg-slate-500 rounded-full">
                                <div className="animate-leftRight">
                                    <img src={shoppingCart} alt="shoppingCart" />
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center justify-start gap-5">
                                <div>
                                    <h1 className="text-txt-main dark:text-white text-lg font-semibold text-center">Looking for something?</h1>
                                    <p className="text-base text-7c dark:text-e2 font-medium text-center">Add your favourite items to your cart</p>
                                </div>
                                <Link to="/home" className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-fit h-btn flex items-center justify-center mt-5 text-sm tracking-wider px-5">Start shopping</Link>
                            </div>
                        </div>
                }
            </div>
            <button className={`${cartProducts.length > 0 ? "flex" : "hidden"} bg-main mb-20 dark:bg-purple-500 relative rounded-3xl text-white w-100 mx-auto h-btn items-center justify-center`} onClick={()=>{
                dispatch(reversePay(true))
                console.log(subTotal);
                }}>
                Go to Checkout
                <div className="absolute center-y right-5 w-fit h-fit px-2 py-1 rounded-md text-white text-xs font-semibold bg-green-700 dark:bg-purple-700">${(subTotal).toFixed(2)}</div>
            </button>
            <Footer/>
        </div>
    )
}
