import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"

export default function Privacy() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-start gap-10 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Privacy & Security</h1>
            </div>
            <div className='flex flex-col items-start justify-start text-start w-full'>
                <p className='text-base text-7c'>At nectar, we take your privacy and security seriously. We are committed to safeguarding your personal information and ensuring that your data remains protected at all times. Our app employs industry-standard encryption protocols to secure your data transmission and storage, providing you with peace of mind knowing that your information is safe from unauthorized access. We adhere to strict privacy policies and do not share your personal data with third parties without your consent. Additionally, we continuously monitor and update our security measures to mitigate any potential risks and keep your information secure. Your trust is paramount to us, and we are dedicated to maintaining the highest standards of privacy and security for our users."</p>
            </div>
            <Footer/>
        </div>
    )
}
