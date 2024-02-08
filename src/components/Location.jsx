import { FaAngleLeft } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import locationImg from "../assests/location.png"

export default function Location() {
    const navigate = useNavigate()
    return (
        <div className="main-page px-5 flex flex-col items-center h-screen">
            <Link to="/sign-in/enter-phone" className="self-start"><FaAngleLeft className="text-txt-main text-2xl mt-5"/></Link>
            <img src={locationImg} alt="GPS-Module-Pic" />
            <div className="flex flex-col items-center gap-2.5 mt-2.5 mb-5">
                <h2 className="text-txt-main text-2xl font-semibold text-center">Select Your Location</h2>
                <p className="text-7c text-base font-medium text-center">Switch on your location to stay in tune with what’s happening in your area</p>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    navigate('/login')
                    }} className="w-full flex flex-col items-start gap-5 mt-5">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="zone" className="text-7c text-base font-semibold">Your Zone</label>
                        <div className="w-full h-fit relative">
                            <input type="text" id="zone" name="zone" autoComplete="country-name" placeholder="choose your zone" className="placeholder:text-7c placeholder:text-sm focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"/>
                            <TfiAngleDown className="absolute center-y right-0 text-xs"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="area" className="text-7c text-base font-semibold">Your Area</label>
                        <div className="w-full h-fit relative">
                            <input type="text" id="area" name="area" autoComplete="country-name" placeholder="Types of your area" className="placeholder:text-7c placeholder:text-sm focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"/>
                            <TfiAngleDown className="absolute center-y right-0 text-xs"/>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5" />
                </form>
            </div>
        </div>
    )
}
