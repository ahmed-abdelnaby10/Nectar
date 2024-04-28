import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa6';

import slide1 from "../../assests/scan&go/Screenshot 2024-02-21 204724.png"
import slide2 from "../../assests/scan&go/slide2.png"
import slide3 from "../../assests/scan&go/slide3.png"
import { IoIosArrowBack } from 'react-icons/io';

export default function ScanGoGuide() {
    const navigate = useNavigate()
    return (
        <div className='h-screen flex flex-col items-center justify-start gap-10 pt-5'>
            <div className="flex items-center justify-between relative w-full px-5">
            <button onClick={()=>navigate(-1)} className='w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <Link to="/account/scan&go" className="text-lg text-main font-semibold capitalize dark:text-white">skip</Link>
            </div>
            <h1 className='text-5xl oleo-font text-main text-center border-b-4 border-solid border-red-500'>Scan&go</h1>
            <Swiper
                slidesPerView={1}
                pagination={true} 
                modules={[Pagination]} 
                className="mySwiper w-full grow"
            >
                <SwiperSlide className='w-full'>
                    <div className='grow flex flex-col items-center justify-start gap-10 w-full h-full'>
                        <div className='w-52 h-52'>
                            <img src={slide1} alt="scanning-barcode" className='w-full h-full' />
                        </div>
                        <div>
                            <h1 className='text-center text-txt-main text-xl font-semibold'>Scan as you shop</h1>
                            <p className='text-7c text-center mt-2.5'>Get products scanned as you pick <br /> them up</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full'>
                    <div className='grow flex flex-col items-center justify-start gap-10 w-full h-full'>
                        <div className='w-52 h-52'>
                            <img src={slide2} alt="shopping-cart" className='w-full h-full' />
                        </div>
                        <div>
                            <h1 className='text-center text-txt-main text-xl font-semibold'>Review your cart</h1>
                            <p className='text-7c text-center mt-2.5'>Keep track of your shopping list</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full'>
                    <div className='grow flex flex-col items-center justify-start gap-10 w-full h-full'>
                        <div className='w-52 h-52'>
                            <img src={slide3} alt="payment-process" className='w-full h-full' />
                        </div>
                        <div>
                            <h1 className='text-center text-txt-main text-xl font-semibold'>Play the counter</h1>
                            <p className='text-7c text-center mt-2.5'>Pay and exit within minutes!</p>
                        </div>
                        <Link to="/account/scan&go" className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-100 h-btn flex items-center justify-center text-sm tracking-wider relative bottom-0">Let's start</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
