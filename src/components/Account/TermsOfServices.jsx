import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import { TbPhone } from "react-icons/tb";

export default function TermsOfServices() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-start gap-10 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Terms of Services</h1>
            </div>
            <div className='flex flex-col items-start justify-start gap-5 text-start w-full'>
                <p className='text-base text-7c'>Welcome to our Terms of Services section! We understand that navigating technology can sometimes be challenging, which is why we're here to assist you every step of the way. Whether you have questions about how to use our app, encounter any issues, or simply need guidance, our dedicated support team is ready to help. Browse through our comprehensive FAQs for quick answers, or reach out to us directly for personalized assistance.</p>
                <h2 className='text-txt-main text-base font-semibold'>Customers Service</h2>
                <div className='flex items-center justify-start w-fit gap-5 text-phone font-semibold'>
                    <div className='flex items-center justify-start w-fit gap-2'>
                        <TbPhone className='text-base'/>
                        <span>394054</span>
                    </div>
                    <div className='flex items-center justify-start w-fit gap-2'>
                        <TbPhone className='text-base'/>
                        <span>394054</span>
                    </div>
                </div>
                <h2 className='text-base text-phone font-semibold -mt-4'>ahmed@yahoo.com</h2>
            </div>
            <Footer/>
        </div>
    )
}
