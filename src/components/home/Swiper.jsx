import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from "react-redux"
import { addToCart } from "../../rtk/slices/cart-slice"
import { useEffect, useState } from 'react';

export default function ProductsSwiper(props) {
    const dispatch = useDispatch()
    const [size, setSize] = useState(0)
    const [space, setSpace] = useState(0)
    useEffect(()=>{
        if (document.body.clientWidth > 600) {
            setSize(3)
            setSpace(0)
        }else if(document.body.clientWidth < 600 && document.body.clientWidth > 350) {
            setSize(2)
            setSpace(50)
        }else if(document.body.clientWidth < 350){
            setSize(1)
            setSpace(50)
        }
    },[])
    window.onresize = ()=>{
        if (document.body.clientWidth > 600) {
            setSize(3)
            setSpace(0)
        }else if(document.body.clientWidth < 600 && document.body.clientWidth > 350) {
            setSize(2)
            setSpace(50)
        }else if(document.body.clientWidth < 350){
            setSize(1)
            setSpace(50)
        }
    }
    return (
        <div className='w-full mt-10'>
            <div className='w-full flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-semibold text-txt-main dark:text-white'>{props.title}</h1>
                <Link to={`/home/offers/${props.title}`} className='text-main dark:text-purple-300 text-base font-semibold'>See all</Link>
            </div>
            <Swiper
                slidesPerView={size}
                spaceBetween={space}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                loop={true}
                allowTouchMove={true}
                direction='horizontal'
            >
                {
                    props.data.map((offer)=>{
                        return(
                            <SwiperSlide key={offer.id}>
                                <div className='rounded-lg gap-2.5 p-2.5 flex flex-col items-center justify-between overflow-hidden border-2 border-solid border-e2 dark:border-slate-400 dark:bg-slate-600 relative' style={{width:"173.32px", height:"248.51px"}}>
                                    <img src={offer.image} alt={offer.title} className='w-24 h-16'/>
                                    <Link to={`/home/${offer.title}`} className='self-start'>
                                        <h2 className='text-base font-meduim text-txt-main dark:text-white'>{offer.title}</h2>
                                        <p className='text-7c text-sm dark:text-e2'>{offer.amount}, priceg</p>
                                    </Link>
                                    <div className='flex items-center justify-between w-full h-fit'>
                                        <div className='flex flex-col items-center justify-center h-fit'>
                                            <span className={`${offer.discount > 0 ? "line-through text-7c dark:text-7c" : "text-txt-main dark:text-white"} text-lg font-semibold`}>${offer.price}</span>
                                            {
                                            offer.discount > 0 ?
                                                <span className='text-txt-main dark:text-white text-lg font-semibold'>
                                                    ${(offer.price - (offer.price * offer.discount / 100)).toFixed(2)}
                                                </span>
                                            :""
                                            }
                                        </div>
                                        <div className='flex items-center justify-center w-12 h-12 rounded-md bg-main dark:bg-purple-500 text-white text-lg cursor-pointer' onClick={()=>{
                                            dispatch(addToCart(offer))
                                        }}>
                                            <FaPlus/>
                                        </div>
                                    </div>
                                    {
                                        offer.discount > 0 ?
                                        <div className='absolute bg-carrot dark:bg-main p-2 text-xs text-white rounded-lg -top-0.5 -right-0.5'>
                                            - {offer.discount}%
                                        </div>
                                        :""
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    </div>
    )
}
