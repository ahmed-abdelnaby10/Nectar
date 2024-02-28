import { IoSearchOutline } from "react-icons/io5";
import { cateogries, products } from "../../utils/products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";
import { TbColorFilter } from "react-icons/tb";
import Footer from "../Footer"
// import { useSelector } from "react-redux"

export default function Explore() {
    // data using response of api
    // const products = useSelector((state)=>state.products)

    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState(false)
    const [data, setData] = useState([])
    const [dropDown, setDropDown] = useState([])
    const [dropDownCates, setDropDownCates] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const [filter, setFilter] = useState(true)
    const [showProducts, setShowProducts] = useState(false)
    const [cate, setCate] = useState("")
    const [filterByCost, setFilterByCost] = useState("all")
    useEffect(()=>{
        if (inputText === '') {
            setSearch(false)
            setShowProducts(false)
        }else {
            setSearch(true)
            setShowDropDown(true)
            setDropDown(products.filter((el) => el.title.toLowerCase().includes(inputText))) //exchange products from utils here with api response products
            setDropDownCates(cateogries.filter((cate) => cate.title.toLowerCase().includes(inputText)))
        }
    },[inputText])
    useEffect(()=>{
        if (inputText !== '') {
            setData(products.filter((el) => el.category === cate)) //exchange products from utils here with api response products
        }
    },[cate, inputText])
    const handleFilter = ()=>{
        document.getElementById("p").checked ? setFilter(true) : setFilter(false)
        document.getElementById("c").checked ? setFilter(false) : setFilter(true)
    }
    const handleCostFilter = ()=>{
        if (document.getElementById("l").checked) {
            setFilterByCost("low")
        }
        if (document.getElementById("h").checked) {
            setFilterByCost("high")
        }
        if (document.getElementById("all").checked) {
            setFilterByCost("all")
        }
    }
    return (
        <div className="flex flex-col items-center justify-start pt-5 px-5 pb-24 min-h-screen">
            <h1 className="text-lg text-txt-main dark:text-white font-semibold">Find Products</h1>
            <div className="relative w-full h-fit mt-5 mb-5">
                <IoSearchOutline className="text-txt-main dark:text-white text-2xl absolute left-2.5 center-y" onClick={()=>{document.getElementById("search").focus()}}/>
                <input type="search" id="search" className="w-full rounded-2xl bg-sec-color focus:outline-none placeholder:text-sm placeholder:text-7c dark:placeholder:text-e2 placeholder:font-normal text-lg text-txt-main dark:text-white dark:bg-slate-400 font-medium h-input pl-12" placeholder="Search Store" onChange={(e)=>{
                    setInputText(e.target.value.toLowerCase())
                    setCate("")
                }}/>        
                <TbColorFilter className="text-main dark:text-purple-500 text-xl absolute right-2.5 center-y cursor-pointer" onClick={()=>{
                    setShowFilter(!showFilter)
                    setShowProducts(false)
                }}/>
            </div>
            {
                showFilter ?
                    <div className={`flex flex-col items-start gap-5 divide-y divide-solid divide-e2 dark:divide-slate-500 w-full`}>
                        <div className="flex flex-col items-start gap-5 divide-y divide-solid divide-e2 dark:divide-slate-500 px-5 w-full">
                            <div className="flex gap-5 items-center justify-start w-full">
                                <input id="c" type="radio" name="search" className="filter-check" onChange={handleFilter} checked={filter ? false : true}/>
                                <label htmlFor="c" className="text-base font-semibold text-txt-main dark:text-white">Search by category</label>
                            </div>
                            <div className="flex gap-5 items-center justify-start w-full pt-5">
                                <input id="p" type="radio" name="search" className="filter-check" onChange={handleFilter} checked={filter ? true : false}/>
                                <label htmlFor="p" className="text-base font-semibold text-txt-main dark:text-white">Search by product</label>
                            </div>
                        </div>
                        <div className="flex flex-col items-start px-5 w-full">
                            <h1 className="text-lg font-semibold text-txt-main dark:text-white pt-5 mb-2.5">Filter products by:</h1>
                            <div className="flex gap-5 items-center justify-start w-full pb-5 pt-2.5 border-b border-solid border-e2 dark:border-slate-500">
                                <input id="all" type="radio" name="cost" className="filter-check" disabled={filter ? false : true} 
                                onChange={handleCostFilter} checked={filterByCost === "all" ? true : false}/>
                                <label htmlFor="all" className="text-base font-semibold text-txt-main dark:text-white">Show all products</label>
                            </div>
                            <div className="flex gap-5 items-center justify-start w-full pb-5 pt-2.5 border-b border-solid border-e2 dark:border-slate-500">
                                <input id="l" type="radio" name="cost" className="filter-check" disabled={filter ? false : true} 
                                onChange={handleCostFilter} checked={filterByCost === "low" ? true : false}/>
                                <label htmlFor="l" className="text-base font-semibold text-txt-main dark:text-white">Filter by lowest cost</label>
                            </div>
                            <div className="flex gap-5 items-center justify-start w-full pt-5">
                                <input id="h" type="radio" name="cost" className="filter-check" disabled={filter ? false : true} 
                                onChange={handleCostFilter} checked={filterByCost === "high" ? true : false}/>
                                <label htmlFor="h" className="text-base font-semibold text-txt-main dark:text-white">Filter by highest cost</label>
                            </div>
                        </div>
                        <button className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center text-sm tracking-wider" onClick={()=>{
                            setShowFilter(false)
                            
                        }}>Apply filter</button>
                    </div>
                :
                !search?
                    <div className="grid grid-cols-2 gap-5 w-full">
                        {
                            cateogries.map((cate)=>{
                                return (
                                    <Link to={`/home/search/${cate.title}`} key={cate.id} className={`w-full h-48 tab:h-60 rounded-2xl border-2 border-solid flex flex-col items-center gap-5 justify-center`} style={{backgroundColor:`rgba(${cate.color},0.2)`, borderColor:`rgba(${cate.color},0.7)`}}>
                                        <img src={cate.image} alt={cate.title} />
                                        <h2 className="text-txt-main dark:text-white text-base font-semibold text-center capitalize">{cate.title}</h2>
                                    </Link>
                                )
                            })
                        }
                    </div>
                :
                    showDropDown?
                    <div className={`flex w-full flex-col items-center gap-3 divide-y divide-solid divide-e2 dark:divide-slate-500`}>
                        {
                            filter?
                                dropDown.map((prod)=>{
                                    return(
                                        <Link to={`/home/search/${prod.category}/${prod.title}`} key={prod.id} className="text-txt-main w-full text-center pt-3 text-base font-semibold dark:text-white">{prod.title}</Link>
                                    )
                                })
                            :   
                                dropDownCates.map((prod)=>{
                                    return(
                                        <div key={prod.id} className="text-txt-main dark:text-white w-full text-center pt-3 text-base font-semibold" 
                                        onClick={(e)=>{
                                            setShowDropDown(false)
                                            setCate(e.currentTarget.innerText)
                                            setShowProducts(true)
                                        }}>{prod.title}</div>
                                    )
                                })
                        }
                    </div>:""
            }
            {
                showProducts?
                <ProductsCards data={data}/>
                :
                ""
            }
            <Footer/>
        </div>
    )
}