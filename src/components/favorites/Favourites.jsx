import { FaAngleRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../../rtk/slices/cart-slice"
import { TbHeartPlus } from "react-icons/tb";
import Footer from "../Footer"

export default function Favourites() {
    const favProducts = useSelector((state)=> state.favorite)
    const dispatch = useDispatch()
    const pushFavToCart = (array) => {
        array.map((prod)=>{
            dispatch(addToCart({...prod, cartQuantity:1}))
        })
    }
    return (
        <div className="flex flex-col items-center justify-between gap-5 pt-5 pb-24 min-h-screen">
            <div className="w-full flex flex-col items-center justify-start grow gap-5 h-full">
                <h1 className="text-lg text-txt-main font-semibold dark:text-white">Favorurite</h1>
                {favProducts.length > 0 ?
                    <div className="flex flex-col items-center justify-start pt-5 gap-2.5 pb-5 border-y border-solid border-e2 dark:border-slate-700 w-full divide-y divide-solid divide-e2 px-5">
                    {
                        favProducts.map((product)=>{
                            return(
                                <div key={product.title} className="flex items-center justify-between w-full pt-2.5">
                                    <div className="flex items-center justify-start w-full">
                                        <div className="w-20 h-full flex justify-start mr-2.5">
                                            <img src={product.image} alt={product.title} className="h-full w-auto" />
                                        </div>
                                        <div>
                                            <h2 className="text-txt-main text-base font-semibold dark:text-white">{product.title}</h2>
                                            <p className="text-7c text-sm dark:text-e2">{product.amount}, price</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-2.5 w-fit">
                                        <p className="text-txt-main dark:text-white text-base font-semibold">${product.price}</p>
                                        <Link to={`/home/${product.title}`}><FaAngleRight className="text-xl text-txt-main dark:text-white"/></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                : 
                <div className="flex flex-col items-center justify-center h-full w-full grow gap-10">
                    <div className="text-main dark:text-purple-500 w-48 h-48 bg-sec-color dark:bg-slate-500 rounded-full flex items-center justify-center">
                        <TbHeartPlus className="w-40 h-40 animate-bounce"/>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start gap-5">
                        <div>
                            <h1 className="text-txt-main text-lg font-semibold text-center dark:text-white">Looking for something?</h1>
                            <p className="text-base text-7c dark:text-e2 font-medium text-center">Explore now latest products!</p>
                        </div>
                    </div>
                </div>
                }
            </div>
            {favProducts.length > 0 ?
                <button className="bg-main dark:bg-purple-500 mt-5 rounded-3xl text-white w-100 mx-auto h-btn flex items-center justify-center" onClick={()=>{
                    pushFavToCart(Array.from(favProducts))
                }}>Add All To Cart</button>
                :
                <Link to="/home" className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-fit h-btn flex items-center justify-center mt-5 text-sm tracking-wider px-5">Explore now</Link>
            }
            <Footer/>
        </div>
    )
}
