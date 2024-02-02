import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { addToCart } from "../../rtk/slices/cart-slice"
import { useDispatch } from "react-redux"

export default function ProductsCards(props) {
    const dispatch = useDispatch()
    return (
        <div className="grid gap-5 grid-cols-2 w-full">
            {
                props.data.map((product)=>{
                    return (
                        <div key={product.id} className='rounded-lg gap-2.5 p-2.5 flex flex-col items-center justify-between overflow-hidden border-2 border-solid border-e2 dark:border-slate-400 w-full dark:bg-slate-600'>
                            <div className="w-full h-20 flex justify-center">
                                <img src={product.image} alt={product.title} className="h-full w-auto"/>
                            </div>
                            <Link to={`/home/search/${product.category}/${product.title}`} className='self-start'>
                                <h2 className='text-base font-semibold text-txt-main dark:text-white capitalize'>{product.title}</h2>
                                <p className='text-7c dark:text-e2 text-sm'>{product.amount}, priceg</p>
                            </Link>
                            <div className='flex items-center justify-between w-full h-fit'>
                                <span className='text-txt-main dark:text-white text-lg font-semibold'>${product.price}</span>
                                <button title='add product to cart' className='flex items-center justify-center w-12 h-12 rounded-md bg-main text-white dark:bg-purple-500 text-lg cursor-pointer' onClick={()=>{dispatch(addToCart(product))}}><FaPlus/></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
