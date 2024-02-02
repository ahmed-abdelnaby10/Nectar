import { HiXMark } from "react-icons/hi2"
import { useDispatch, } from "react-redux"
import { removeFromCart } from "../../rtk/slices/cart-slice"
import { FaMinus, FaPlus } from "react-icons/fa"
import { useEffect, useState } from "react"
import { clearProdAmount, updateCardAmount } from "../../rtk/slices/cartAmount-slice"

export default function ProductCard(props) {
    const [quantity, setQuantity] = useState(props.product.cartQuantity)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(updateCardAmount({...props.product, quan: quantity}))
    },[dispatch, props.product, quantity])
    return (
        <div className="flex items-center justify-between w-full pt-2 dark:bg-slate-600 p-5">
            <div className="w-28 h-full flex justify-center mr-2.5">
                <img src={props.product.image} alt={props.product.title} className="h-full w-auto" />
            </div>
            <div className="flex flex-col w-full gap-2.5">
                <div className="flex items-center justify-between w-full gap-2.5">
                    <div className="flex flex-col items-start">
                        <h2 className="text-txt-main dark:text-white text-base font-semibold">{props.product.title}</h2>
                        <p className="text-7c dark:text-e2 text-sm">{props.product.amount}, price</p>
                    </div>
                    <HiXMark className="text-b3 dark:text-e2 text-xl" onClick={()=>{
                        dispatch(removeFromCart(props.product))
                        dispatch(clearProdAmount(props.product))
                        }}/>
                </div>
                <div className="flex items-center justify-between gap-2.5 w-full">
                    <div className="flex items-center justify-center w-fit h-fit gap-5">
                        <FaMinus className="text-7c dark:text-e2" onClick={()=>{
                            if (quantity > 1) {
                                setQuantity(quantity - 1)
                            }else{
                                return false
                            }
                        }}/>
                        <div className="rounded-md text-txt-main dark:text-white dark:border-slate-500 text-lg font-semibold border border-solid border-e2 w-11 h-11 flex items-center justify-center">{quantity}</div>
                        <FaPlus className="text-main dark:text-purple-500" onClick={()=>{
                            setQuantity(quantity + 1)
                            
                        }}/>
                    </div>
                    <p className="text-txt-main dark:text-white text-base font-semibold" id={props.product.id}>${(props.product.price * quantity).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
