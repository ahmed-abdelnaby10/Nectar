import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function EnterPhone() {
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const firstInput = useRef()
    const handleOnChange = ()=>{
        const inputs = Array.from(document.getElementsByTagName("input"))
        if (current < inputs.length - 1) {
            inputs.forEach((input,index)=>{
                if (inputs[index].value.length === 1) {
                    inputs[index].blur()
                    inputs[index + 1].focus()
                    setCurrent(current + 1)
                }
            })
        }else {
            inputs[inputs.length - 1].form.requestSubmit()
        }   
    }
    useEffect(()=>{
        firstInput.current.focus()
    },[])
    return (
        <div className="main-page flex flex-col items-start px-5 relative h-screen py-5 gap-8">
            <button onClick={()=>{navigate(-1)}} className="w-6 h-6 bg-white rounded-full border border-solid border-e2 flex items-center justify-center"><IoIosArrowBack className="text-txt-main w-4 pr-0.5"/></button>
            <h1 className="text-txt-main text-xl pr-0.5 font-semibold">Enter your 4 digits code</h1>
            <form 
                className="digits-form flex flex-col items-start justify-start gap-5 w-full grow"
                onSubmit={(e)=>{
                    e.preventDefault()
                    navigate("/sign-in/location")
                }}
            >
                <div className="flex items-center justify-between gap-5 w-full h-fit">
                    <input 
                        type="number" 
                        name="digit-1" 
                        id="digit-1"
                        className="flex items-center justify-center w-16 h-16 rounded-md border-2 border-solid border-main caret-82 text-xl text-center font-semibold focus:outline-none placeholder:text-xl placeholder:text-7c"
                        placeholder="0"
                        onChange={(e)=>{
                            handleOnChange()
                        }} 
                        required
                        autoComplete="one-time-code"
                        ref={firstInput}
                    />
                    <input 
                        type="number" 
                        name="digit-2" 
                        id="digit-2"
                        className="flex items-center justify-center w-16 h-16 rounded-md border-2 border-solid border-main caret-82 text-xl text-center font-semibold focus:outline-none placeholder:text-xl placeholder:text-7c"
                        placeholder="0"
                        onChange={(e)=>{
                            handleOnChange()
                        }} 
                        required
                        autoComplete="one-time-code"
                    />
                    <input 
                        type="number" 
                        name="digit-3" 
                        id="digit-3"
                        className="flex items-center justify-center w-16 h-16 rounded-md border-2 border-solid border-main caret-82 text-xl text-center font-semibold focus:outline-none placeholder:text-xl placeholder:text-7c"
                        placeholder="0"
                        onChange={(e)=>{
                            handleOnChange()
                        }} 
                        required
                        autoComplete="one-time-code"
                    />
                    <input 
                        type="number" 
                        name="digit-4" 
                        id="digit-4"
                        className="flex items-center justify-center w-16 h-16 rounded-md border-2 border-solid border-main caret-82 text-xl text-center font-semibold focus:outline-none placeholder:text-xl placeholder:text-7c"
                        placeholder="0"
                        required
                        autoComplete="one-time-code"
                        onChange={(e)=>{
                            handleOnChange()
                        }}  
                    />
                </div>
                <div className="flex items-center justify-center gap-1 self-start w-full text-txt-main text-base">
                    Didn’t receive the code?
                    <button className="text-main">Resend</button>
                </div>
            </form>
        </div>
    )
}
