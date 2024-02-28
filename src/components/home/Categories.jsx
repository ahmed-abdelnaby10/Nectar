import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { cateogries } from '../../utils/products'

export default function Categories() {
    return (
        <div className='grid grid-cols-3 w-full justify-items-center gap-5'>
            {
                cateogries.map((cate)=>{
                    return (
                        <Link to={`/home/categories/${cate.title}`} key={cate._id} className='block w-20 h-20 rounded-full bg-82 overflow-hidden'>
                            <img src={cate.image} alt={cate.title} className='w-full h-full'/>
                        </Link>
                    )
                })
            }
        </div>
    )
}
