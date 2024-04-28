import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function EnterPhone() {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        navigate("/sign-in/verify-phone");
    };

    return (
        <div className="flex flex-col items-start px-5 relative h-screen main-page py-5">
            <button onClick={()=>{navigate(-1)}} className="w-6 h-6 mb-5 bg-white rounded-full border border-solid border-e2 flex items-center justify-center"><IoIosArrowBack className="text-txt-main w-4 pr-0.5"/></button>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold mb-5">Mobile Number</p>
            <form 
                className="grow flex flex-col items-start justify-between w-full"
                onSubmit={(e)=>{
                    console.log(value);
                    handleFormOnSubmit(e)
                }}
            >
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="EG"
                    onCountryChange={()=>{
                        setValue("")
                    }}
                    focusInputOnCountrySelection={true}
                />
                <button type="submit" className="w-16 h-16 self-end rounded-full cursor-pointer bg-main flex items-center justify-center">
                    <FaAngleRight className="text-white text-2xl"/>
                </button>
            </form>
        </div>
    )
}
