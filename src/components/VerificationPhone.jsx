import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EnterPhone() {
    return (
        <div className="main-page flex flex-col items-start px-5 relative h-850">
            <Link to="/sign-in/enter-phone"><FaAngleLeft className="text-txt-main text-2xl mb-16 mt-10"/></Link>
            <h1 className="text-txt-main text-2xl font-semibold mb-7">Enter your mobile number</h1>
            <p className="text-7c text-base font-semibold">Mobile Number</p>
            <input type="text" placeholder="- - - -" className="placeholder:text-lg placeholder:text-txt-main focus:outline-none caret-7c PhoneInput bg-transparent"/>
            <div className="absolute right-0 bottom-37% flex items-center justify-between px-5 w-full">
                <Link className="text-main text-lg">Resend Code</Link>
                <Link to="/sign-in/location" className="w-16 h-16 rounded-full bg-main flex items-center justify-center">
                    <FaAngleRight className="text-white text-2xl"/>
                </Link>
            </div>
        </div>
    )
}
