import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function EnterPhone() {
    const navigate = useNavigate()
    return (
        <div className="main-page flex flex-col items-start px-5 relative h-screen py-5">
            <button onClick={()=>{navigate(-1)}}><FaAngleLeft className="text-txt-main text-2xl mb-16"/></button>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold">Mobile Number</p>
            <div className="flex flex-col items-start justify-between w-full grow">
                <input type="text" placeholder="- - - -" className="placeholder:text-lg placeholder:text-txt-main focus:outline-none caret-7c PhoneInput bg-transparent"/>
                <div className="flex items-center justify-between self-end w-full">
                    <Link className="text-main text-lg">Resend Code</Link>
                    <Link to="/sign-in/location" className="w-16 h-16 rounded-full bg-main flex items-center justify-center">
                        <FaAngleRight className="text-white text-2xl"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
