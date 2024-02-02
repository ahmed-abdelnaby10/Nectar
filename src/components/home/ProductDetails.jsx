import { useState,useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import {  useParams } from "react-router-dom"
import { bestSelling } from "../../utils/bestSelling"
import { exOffers } from "../../utils/exOffers"
import { groceries, legumes } from "../../utils/groceries"
import { products } from "../../utils/products";

export default function ProductDetails() {
    const [toggle, setToggle] = useState(0)
    const updateToggle = (id)=> {
        setToggle(id)
    }
    const { productTitle } = useParams()
    const { searchedProductTitle } = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        products.map((prod)=>{
            if (prod.title === searchedProductTitle) {
                setProduct(products.filter((p)=>p.title === searchedProductTitle)[0])
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
    },[productTitle, searchedProductTitle])
    return (
        <ul className="w-full flex flex-col divide-y divide-solid divide-e2 dark:divide-slate-400">
            <li className="flex items-center justify-between w-full pb-5">
                <div>
                    <p className='text-base cursor-pointer font-semibold text-txt-main dark:text-white' onClick={()=>{
                        if (toggle !== 1) {
                            updateToggle(1)
                        }else {
                            updateToggle(0)
                        }
                    }}>Product Detail</p>
                </div>
                <FaAngleRight className={`${toggle === 1 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300`} onClick={()=>{
                    if (toggle !== 1) {
                        updateToggle(1)
                    }else {
                        updateToggle(0)
                    }
                }}/>
            </li>
            <li className={`${toggle === 1 ? "flex" : "hidden"} w-full py-5`}>
                <p className="text-7c dark:text-e2 text-sm">{product.description}</p>
            </li>

            {/* ------------------------------------------ */}

            <li className="flex items-center justify-between w-full py-5">
                <div>
                    <p className='text-base cursor-pointer font-semibold text-txt-main dark:text-white' onClick={()=>{
                        if (toggle !== 2) {
                            updateToggle(2)
                        }else {
                            updateToggle(0)
                        }
                    }}>Nutritions</p>
                </div>
                <div className="flex items-center w-fit gap-5">
                    <p className="text-7c text-sm flex items-center justify-center w-fit h-fit bg-e2 dark:bg-slate-500 dark:text-e2 rounded-md px-3 py-px">{product.nutritions}</p>
                    <FaAngleRight className={`${toggle === 2 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300`} onClick={()=>{
                        if (toggle !== 2) {
                            updateToggle(2)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </div>
            </li>
            {/* <li className={`${toggle === 1 ? "flex" : "hidden"} w-full pt-5`}>
            </li> */}

            {/* ------------------------------------------ */}

            <li className="flex items-center justify-between w-full pt-5">
                <div>
                    <p className='text-base cursor-pointer font-semibold text-txt-main dark:text-white' onClick={()=>{
                        if (toggle !== 3) {
                            updateToggle(3)
                        }else {
                            updateToggle(0)
                        }
                    }}>Review</p>
                </div>
                <div className="flex items-center w-fit gap-5">
                    <p className="text-carrot dark:text-orange-300 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <FaAngleRight className={`${toggle === 3 ? "rotate-90" : ""} text-xl text-txt-main dark:text-white duration-300`} onClick={()=>{
                        if (toggle !== 3) {
                            updateToggle(3)
                        }else {
                            updateToggle(0)
                        }
                    }}/>
                </div>
            </li>
            {/* <li className={`${toggle === 1 ? "flex" : "hidden"} w-full pt-5`}>
            </li> */}
        </ul>
    )
}