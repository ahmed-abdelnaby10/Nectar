import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function ProductQuantity(props) {
    const [quantity, setQuantity] = useState(+props.product.cartQuantity)
    return (
        <div className="flex items-center justify-between my-5 w-full">
            <div className="flex items-center justify-center w-fit h-fit gap-5">
                <FaMinus className="text-7c dark:text-e2 cursor-pointer" onClick={()=>{
                    if (+props.product.cartQuantity > 1) {
                        props.product.cartQuantity -= 1
                        setQuantity(+props.product.cartQuantity - 1)
                        console.log(quantity);
                    }else{
                        return false
                    }
                }}/>
                <div className="rounded-md text-txt-main dark:text-white text-lg font-semibold border border-solid border-e2 dark:border-slate-400 w-11 h-11 flex items-center justify-center">{props.product.cartQuantity}</div>
                <FaPlus className="text-main dark:text-purple-500 cursor-pointer" onClick={()=>{
                    props.product.cartQuantity += 1
                    setQuantity(+props.product.cartQuantity + 1)
                    console.log(quantity);
                }}/>
            </div>
            <div className="flex flex-col items-center w-fit">
                {
                    props.product.discount > 0 ?
                    <span className='text-txt-main dark:text-white text-lg font-semibold'>
                        ${((props.product.price - (props.product.price * props.product.discount / 100)) * +props.product.cartQuantity).toFixed(2)}
                    </span>
                :""
                }
                <span className={`${props.product.discount > 0 ? "line-through text-7c dark:text-7c" : "text-txt-main dark:text-white"} text-lg font-semibold`}>${(+props.product.price).toFixed(2)}</span>
            </div>
        </div>
    )
}
