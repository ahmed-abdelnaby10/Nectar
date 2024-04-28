import { useEffect, useState } from "react"
import { HiXMark } from "react-icons/hi2"
import { IoIosArrowBack } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer"
import { AiOutlineCheck } from "react-icons/ai";
import { getCountry } from "../../rtk/slices/country-slice"

export default function Country() {
    const dispatch = useDispatch()
    const countries = useSelector((state)=> state.countries)
    const userCountry = useSelector((state)=> state.country)
    const navigate = useNavigate()
    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState(false)
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
    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0 w-6 h-6 bg-white rounded-full border border-solid border-7c flex items-center justify-center'><IoIosArrowBack className="w-4 text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">Country</h1>
            </div>
            <div className="relative w-full h-fit mt-5 mb-5">
                <IoSearchOutline className="text-7c dark:text-white text-2xl absolute left-2.5 center-y" onClick={()=>{document.getElementById("search").focus()}}/>
                <input 
                    id="search"
                    name="search"
                    type="search" 
                    placeholder="Search Store" 
                    className="w-full rounded-2xl bg-sec-color focus:outline-none placeholder:text-sm placeholder:text-7c dark:placeholder:text-e2 placeholder:font-normal text-lg text-txt-main dark:text-white dark:bg-slate-400 font-medium h-input pl-12" 
                    onChange={(e)=>{
                        setInputText(e.target.value.toLowerCase())
                    }}
                />        
                <div className={`${search? "": "hidden"} bg-main dark:bg-purple-500 text-xl absolute right-2.5 center-y cursor-pointer flex items-center justify-center w-6 h-6 rounded-full`} onClick={()=>{
                    document.getElementById("search").value = ""
                    setSearch(false)
                }}>
                    <HiXMark className='text-white w-4'/>
                </div>
            </div>
            {
                search?
                    <div className="flex flex-col items-center justify-start gap-2.5 pb-2.5 border-b border-solid dark:border-slate-700 border-e2 w-full divide-y divide-solid divide-e2 dark:divide-slate-700">
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
                                            checked={userCountry.name === country.name}
                                            onChange={(e)=>{
                                                dispatch(getCountry(country))
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
                :
                <div className="flex items-center justify-between w-full py-2.5 border-b border-solid border-e2">
                    <div className="flex items-center justify-start w-fit gap-2.5">
                        <img src={userCountry.flag} alt={userCountry.name} width={24} height={24} />
                        <p className="text-7c text-base font-semibold">{userCountry.name}</p>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-main text-white text-xs">
                        <AiOutlineCheck/>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    )
}
