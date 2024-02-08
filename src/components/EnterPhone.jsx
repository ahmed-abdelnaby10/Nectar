import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";

export default function EnterPhone() {
    const [value, setValue] = useState()
    return (
        <div className="flex flex-col items-start px-5 relative h-screen main-page">
            <Link to="/sign-in"><FaAngleLeft className="text-txt-main text-2xl mb-16 mt-10"/></Link>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold mb-5">Mobile Number</p>
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                international
                countryCallingCodeEditable={false}
                defaultCountry="JO"
            />
            <Link to="/sign-in/verify-phone" className="w-16 h-16 rounded-full cursor-pointer bg-main flex items-center justify-center absolute right-5 bottom-37%">
                <FaAngleRight className="text-white text-2xl"/>
            </Link>
        </div>
    )
}
