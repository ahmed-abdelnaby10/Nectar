import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getCountry } from "../rtk/slices/country-slice";
// import axios from "axios";
// import Swal from 'sweetalert2'

export default function EnterPhone() {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const handleFormOnSubmit = (e) => {
        // e.preventDefault();
        // axios
        //     .post(`${process.env.REACT_APP_SERVER}/users`, {
        //         value,
        //     })
        //     .then((res) => {
        //         console.log(res.data);
        //         const msg = res.data.message;
        //         const Toast = Swal.mixin({
        //             toast: true,
        //             position: "center",
        //             showConfirmButton: false,
        //             timer: 2000,
        //             background:"rgb(83 177 117)",
        //             color: "#fff",
        //             iconColor: "#fff",
        //             width: "285px"
        //         });
        //         Toast.fire({
        //             icon: "success",
        //             title: `${msg}`,
        //             showCancelButton: false,
        //         })
        //     window.location.href = "/sign-in/verify-phone";
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         console.log(e.response.data.message);
        //         const Toast = Swal.mixin({
        //             toast: true,
        //             position: "center",
        //             showConfirmButton: false,
        //             timer: 2000,
        //             background:"rgb(83 177 117)",
        //             color: "#fff",
        //             iconColor: "#fff",
        //             width: "285px"
        //         });
        //         Toast.fire({
        //             icon: "success",
        //             title: `${e.response.data.message}`,
        //         })
        //     });
            // dispatch(getCountry(`${e.currentTarget.innerHTML.slice(e.currentTarget.innerHTML.indexOf("https"), e.currentTarget.innerHTML.indexOf(".svg"))}.svg`));   
    // };

    return (
        <div className="flex flex-col items-start px-5 relative h-screen main-page py-5">
            <button onClick={()=>{navigate(-1)}}><FaAngleLeft className="text-txt-main text-2xl mb-16"/></button>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold mb-5">Mobile Number</p>
            <form 
                className="grow flex flex-col items-start justify-between w-full"
                onSubmit={(e)=>{
                    console.log(value);
                    // handleFormOnSubmit(e)
                    e.preventDefault()
                    navigate("/sign-in/verify-phone")
                    dispatch(getCountry(`${e.currentTarget.innerHTML.slice(e.currentTarget.innerHTML.indexOf("https"), e.currentTarget.innerHTML.indexOf(".svg"))}.svg`)); 
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
                    focusInputOnCountrySelection={true}
                />
                <button type="submit" className="w-16 h-16 self-end rounded-full cursor-pointer bg-main flex items-center justify-center">
                    <FaAngleRight className="text-white text-2xl"/>
                </button>
            </form>
        </div>
    )
}
