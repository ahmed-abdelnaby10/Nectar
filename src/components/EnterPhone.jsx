import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";

export default function EnterPhone() {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-start px-5 relative h-screen main-page py-5">
            <button onClick={()=>{navigate(-1)}}><FaAngleLeft className="text-txt-main text-2xl mb-16"/></button>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold mb-5">Mobile Number</p>
            <form 
                className="grow flex flex-col items-start justify-between w-full"
                onSubmit={(e)=>{
                    e.preventDefault()
                    navigate("/sign-in/verify-phone")
                    console.log(value);
                }}
            >
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="JO"
                    onCountryChange={()=>{
                        setValue("")
                    }}
                />
                <button type="submit" className="w-16 h-16 self-end rounded-full cursor-pointer bg-main flex items-center justify-center">
                    <FaAngleRight className="text-white text-2xl"/>
                </button>
            </form>
        </div>
    )
}
