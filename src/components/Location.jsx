import { useNavigate } from "react-router-dom";
import locationImg from "../assests/location.png"
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react";
import { getCountry, removeCountry } from "../rtk/slices/country-slice";
import { AiOutlineCheck } from "react-icons/ai";

export default function Location() {
    const searchCountry = useRef()
    const dispatch = useDispatch()
    const countries = useSelector((state)=> state.countries)
    const navigate = useNavigate()
    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState(false)
    const [value, setValue] = useState("")
    const [dropDown, setDropDown] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)
    useEffect(()=>{
        if (inputText === '') {
            setSearch(false)
        }else { 
            setSearch(true)
            setShowDropDown(true)
            setDropDown(countries.data.filter((country) => country.name.toLowerCase().includes(inputText)))
        }
    },[inputText])

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        navigate('/login')
    };

    return (
        <div className="main-page px-5 flex flex-col items-center py-5 justify-start gap-5 min-h-screen">
            <button onClick={()=>{navigate(-1)}} className="self-start w-6 h-6 bg-white rounded-full border border-solid border-e2 flex items-center justify-center"><IoIosArrowBack className="text-txt-main w-4 pr-0.5"/></button>
            <div className={`${search? "hidden" : "flex"} flex-col items-center w-full gap-5`}>
                <img src={locationImg} alt="GPS-Module-Pic" />
                <h2 className="text-txt-main text-2xl font-semibold text-center">Select Your Location</h2>
                <p className="text-7c text-base font-medium text-center">Switch on your location to stay in tune with what’s happening in your area</p>
            </div>
            <div className="flex flex-col items-center gap-2.5 w-full">
                <form onSubmit={(e)=>{
                    handleFormOnSubmit(e)
                    }} className="w-full flex flex-col items-start gap-2.5">
                    <div className="flex flex-col items-start w-full">
                        <label htmlFor="zone" className="text-7c text-base font-semibold">Your Country</label>
                        <div className="w-full h-fit relative">
                            <input 
                                id="zone" 
                                name="zone" 
                                type="search" 
                                autoComplete="country-name" 
                                placeholder="Search your Country" 
                                className="placeholder:text-7c placeholder:text-sm focus:outline-none bg-transparent w-full h-10 
                                border-b border-solid border-e2 pb-1 text-txt-main text-lg"
                                value={value}
                                onChange={(e)=>{
                                    setInputText(e.target.value.toLowerCase())
                                    setValue(e.target.value.toLowerCase())
                                }}
                                ref={searchCountry}
                            />
                            <button 
                                type="button"
                                className="absolute center-y right-0 text-xs text-main" 
                                onClick={()=>{
                                    dispatch(removeCountry())
                                    setSearch(true)
                                    searchCountry.current.focus()
                                }}
                            >
                                change
                            </button>
                        </div>
                        {
                            search?
                                <div className="flex flex-col items-center justify-start gap-2.5 pb-2.5 border-b border-solid dark:border-slate-700 border-e2 w-full divide-y divide-solid divide-e2 dark:divide-slate-700 ">
                                    {
                                    showDropDown?
                                        dropDown.map((country)=>{
                                            return (
                                                <label htmlFor={country.name} key={country.iso3} className="flex items-center justify-between w-full pt-2.5">
                                                    <div className="flex items-center justify-start w-fit gap-2.5">
                                                        <img src={country.flag} alt={country.name} width={24} height={24} />
                                                        <p className="text-7c text-base font-semibold">{country.name}</p>
                                                    </div>
                                                    <input 
                                                        type="radio" 
                                                        name="country" 
                                                        className="hidden country-controll"
                                                        id={country.name}
                                                        onChange={(e)=>{
                                                            dispatch(getCountry(country))
                                                            setValue(country.name)
                                                            setSearch(false)
                                                        }}
                                                    />
                                                    <div className="h-full relative custom-radio">
                                                        <div><AiOutlineCheck/></div>
                                                    </div>
                                                </label>
                                            )
                                        })
                                    :""
                                    }
                                </div>
                            :""
                        }
                    </div>
                    <button 
                        type="submit" 
                        className="bg-main rounded-xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
