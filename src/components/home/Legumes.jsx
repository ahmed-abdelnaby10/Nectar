import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'
import { legumes } from '../../utils/groceries';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useSelector } from "react-redux"

export default function Legumes() {
    // const products = useSelector((state)=>state.legumes)
    // const legumes = products.filter((product)=> product.category === "legumes")
    const [size, setSize] = useState(0)
    const [space, setSpace] = useState(0)
    useEffect(()=>{
        if (document.body.clientWidth > 600) {
            setSize(2.5)
            setSpace(80)
        }else if(document.body.clientWidth < 600 && document.body.clientWidth > 350) {
            setSize(1.5)
            setSpace(80)
        }else if(document.body.clientWidth < 350){
            setSize(1)
            setSpace(0)
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
                    legumes.map((offer)=>{
                        return(
                            <SwiperSlide key={offer.id}>
                                <div className='rounded-lg gap-5 p-2.5 h-fit flex items-center justify-start overflow-hidden dark:bg-white' style={{width:"248.19px", height:"105px", backgroundColor:offer.color}}>
                                    <img src={offer.image} alt={offer.title} style={{width:"72px", height:"72px"}}/>
                                    <Link to={`/home/${offer.title}`} className='text-xl font-semibold text-txt-main dark:text-white'>{offer.title}</Link>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
