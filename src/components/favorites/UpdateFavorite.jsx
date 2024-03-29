import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToFav, removeFromFav } from "../../rtk/slices/fav-slice"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useParams } from "react-router-dom"
import { bestSelling } from "../../utils/bestSelling"
import { exOffers } from "../../utils/exOffers"
import { groceries, legumes } from "../../utils/groceries"

export default function UpdateFavorite() {
    // data using response of api
    // const products = useSelector((state)=>state.products)

    const dispatch = useDispatch()
    const favProducts = useSelector((state)=> state.favorite)
    const [fav, setFav] = useState(false)
    const { productTitle } = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        if (favProducts.find((product)=>product.title === productTitle)) {
            setFav(true)
        }
    },[favProducts, productTitle])
    useEffect(()=>{
        // products.map((prod)=>{
        //     if (prod.title === productTitle) {
        //         setProduct(products.filter((p)=>p.title === productTitle)[0])
        //     }
        // })

        // all conditions below doesnot matter when using api response products just the one above
        
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
    },[productTitle])
    if (!fav) {
        return(
            <IoMdHeartEmpty className="text-txt-main dark:text-white text-2xl cursor-pointer" onClick={()=>{
                setFav(!fav)
                dispatch(addToFav(product))
            }}/>
        )
    }else {
        return(
            <IoMdHeart className="text-2xl text-main dark:text-purple-500 cursor-pointer" onClick={()=>{
                setFav(!fav)
                dispatch(removeFromFav(product))
            }}/>
        )
    }
}
