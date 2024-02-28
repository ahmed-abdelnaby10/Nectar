import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules'
import { useSelector } from "react-redux" 
import { FaArrowsRotate } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function QuickActions() {
    const points = useSelector((state)=> state.points)
    const pointsValue = points === 0 ? 0 : points / 10 
    useEffect(()=>{
        console.log(points);
    })
    return (
        <div className='w-full mt-10 overflow-hidden h-32'>
            <Swiper
                    slidesPerView={3}
                    spaceBetween={80}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper actions-swiper"
                    allowTouchMove={true}
                    loop={true}
                >
                    <SwiperSlide className='w-36 flex items-center justify-center'>
                        <Link to="/account/my-club" className='w-32 shadow-custom h-24 rounded-lg border-2 border-solid border-b3 dark:border-slate-400 dark:bg-slate-600 flex flex-col items-center justify-between p-3 text-center'>
                            <h1 className='text-main dark:text-purple-400 text-2xl font-bold oleo-font whitespace-nowrap'><span className='text-carrot dark:text-main'>M</span>yClub</h1>
                            <span className='text-txt-main dark:text-white text-sm whitespace-nowrap'><span className='text-main dark:text-purple-400 font-semibold'>{Math.floor(+points)}</span> points</span>
                            <p className='text-txt-main dark:text-e2 font-semibold text-base whitespace-nowrap'>{pointsValue.toFixed(2)} $</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='w-36 flex items-center justify-center'>
                        <Link to="/account/scan&go" className='w-32 shadow-custom h-24 rounded-lg border-2 border-solid border-b3 dark:border-slate-400 dark:bg-slate-600 flex flex-col items-center justify-between p-3 text-center'>
                            <h1 className='text-main dark:text-purple-400 text-2xl font-bold oleo-font whitespace-nowrap'>Scan&go</h1>
                            <span className='text-txt-main dark:text-white text-sm whitespace-nowrap'>Fast method</span>
                            <p className='text-txt-main dark:text-e2 font-semibold text-base whitespace-nowrap'>For shopping</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='w-36 flex items-center justify-center'>
                        <div className='w-32 shadow-custom h-24 rounded-lg border-2 border-solid border-b3 dark:border-slate-400 dark:bg-slate-600 flex flex-col items-center justify-between p-3 text-center'>
                            <h1 className='text-main dark:text-purple-400 text-2xl'><FaArrowsRotate/></h1>
                            <span className='text-txt-main dark:text-white text-sm whitespace-nowrap'>Urgant ?</span>
                            <p className='text-txt-main dark:text-e2 font-semibold text-base whitespace-nowrap'>Buy again</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-36 flex items-start justify-center'>
                        <Link to="/account/coupons" className='w-32 shadow-custom h-24 rounded-lg border-2 border-solid border-b3 dark:border-slate-400 dark:bg-slate-600 flex flex-col items-center justify-between p-3 text-center'>
                            <h1 className='text-main dark:text-purple-400 text-2xl'><BiSolidCoupon/></h1>
                            <span className='text-txt-main dark:text-white text-sm whitespace-nowrap'>Apply Discount</span>
                            <p className='text-txt-main dark:text-e2 font-semibold text-base whitespace-nowrap'>Coupons</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}
