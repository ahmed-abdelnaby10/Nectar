import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import carrot from "../../assests/carrot.png"

export default function About() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-start gap-10 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">About</h1>
            </div>
            <div className='flex flex-col items-start justify-start w-full text-start gap-2'>
                <div className='relative w-fit h-fit'>
                    <h1 className='text-2xl font-semibold text-txt-main'>Who is Nectar ?</h1>
                    <img src={carrot} alt="carrot" width={15} className='absolute center-x bottom-full' />
                </div>
                <p className='text-7c text-base'>Nectar is a versatile and user-friendly app designed to streamline your shopping experience. With its intuitive interface, users can effortlessly browse a vast array of products, ranging from groceries to electronics, and add items to their virtual cart with just a few taps The app provides detailed product descriptions and images, ensuring that customers can make informed decisions while shopping. Additionally, Carrefour offers convenient features such as personalized recommendations based on past purchases, digital coupons for discounts, and a user-friendly checkout process. Whether you're stocking up on household essentials or searching for the latest gadgets, Carrefour's app delivers convenience and efficiency right to your fingertips, making it the ultimate companion for modern shoppers.</p>
            </div>
            <Footer/>
        </div>
    )
}
