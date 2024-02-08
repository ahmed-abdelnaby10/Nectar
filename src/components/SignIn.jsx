import signin from '../assests/sign.png'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const [value, setValue] = useState()
    return (
        <div className='h-screen flex flex-col items-center justify-between w-full main-page'>
            <img src={signin} alt="veg" className='w-full h-5/12' />
            <form onSubmit={(e)=> e.preventDefault()} className='flex flex-col items-center px-5 w-full h-7/12 gap-5'>
                <label htmlFor="phone" className='text-txt-main font-semibold text-2xl self-start mb-1.5'>Get your groceries <br />with nectar</label>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    international
                    countryCallingCodeEditable={false}
                    onFocus={()=>{
                        navigate('/sign-in/enter-phone')
                    }}
                    defaultCountry="JO"
                />
                <p className='text-82 text-sm font-semibold'>Or connect with social media</p>
                <button className='flex items-center justify-center cursor-pointer rounded-3xl h-btn w-full text-fc gap-10 text-sm tracking-wider font-semibold bg-btn'>
                    <FaGoogle className='text-2xl'/>
                    Continue with Google
                </button>
                <button className='flex items-center justify-center cursor-pointer rounded-3xl h-btn w-full text-fc gap-10 text-sm tracking-wider font-semibold bg-facebook'>
                    <FaFacebookF className='text-2xl'/>
                    Continue with Facebook
                </button>
            </form>
        </div>
    )
}
