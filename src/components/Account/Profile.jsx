import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from '../../rtk/slices/user-slice'

export default function Profile() {
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("Egypt")
    
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState(user.email)
    
    const dispatch = useDispatch();

    useEffect(()=>{
        if (user.userName.includes(" ")) {
            setFirstName(user.userName.slice(0, user.userName.indexOf(" ")))
            setLastName(user.userName.slice(user.userName.indexOf(" ") + 1))
        }
        else {
            setFirstName(user.userName)
            setLastName("")
        }
        
    },[user.userName])

    const handleOnSubmit = (e)=> {
        e.preventDefault()
        // axios
        //     .put(`${process.env.REACT_APP_SERVER}/users/login`, {
        //         userName,
        //         email,
        //     })
        //     .then((res) => {
        //         console.log("res data message", res.data);
        //         dispatch(addUser(res.data))
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         console.log("changes doesnot saved");
        //     });
    }

    return (
        <div className='flex flex-col items-center justify-start gap-5 px-5 pt-5 pb-24 min-h-screen'>
            <div className="flex items-center justify-center relative w-full">
                <button onClick={()=>navigate(-1)} className='absolute left-0'><FaAngleLeft className="text-2xl text-txt-main dark:text-white"/></button>
                <h1 className="text-lg text-txt-main font-semibold capitalize dark:text-white">My Profile</h1>
            </div>
            <div className='mb-5'>
                <h1 className='text-txt-main text-lg font-semibold dark:text-white'>Your details</h1>
                <p className='text-7c dark:text-fc'>Here you can edit your personal details. When you're done, click save.</p>
            </div>
            <form
                action='PUT'
                onSubmit={
                    (e)=>{
                        handleOnSubmit(e)
                    }}
                className='flex flex-col items-start gap-5 w-full'
            >
                <div className='flex flex-col items-start gap-5 w-full'>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="firstName" className='text-sm text-7c dark:text-e2'>First name</label>
                        <input 
                            type="text" 
                            className='dark:bg-slate-500 pl-2.5 focus:outline-none border-b-2 border-main border-solid caret-main text-txt-main dark:text-white dark:caret-purple-500 dark:border-purple-500 text-lg font-semibold w-full py-2.5'
                            value={firstName}
                            onChange={(e)=>{setFirstName(e.currentTarget.value)}}
                            id='firstName'
                            name='firstName'
                        />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="lastName" className='text-sm text-7c dark:text-e2'>Last name</label>
                        <input 
                            type="text" 
                            className='dark:bg-slate-500 pl-2.5 focus:outline-none border-b-2 border-main border-solid caret-main text-txt-main text-lg font-semibold w-full py-2.5 dark:text-white dark:caret-purple-500 dark:border-purple-500'
                            value={lastName}
                            onChange={(e)=>{setLastName(e.currentTarget.value)}}
                            id='lastName'
                            name='lastName'
                        />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="email" className='text-sm text-7c dark:text-e2'>E-mail address</label>
                        <input 
                            type="email" 
                            className='dark:bg-slate-500 pl-2.5 focus:outline-none border-b-2 border-main border-solid caret-main text-txt-main text-lg font-semibold w-full py-2.5 dark:text-white dark:caret-purple-500 dark:border-purple-500'
                            value={email}
                            id='email'
                            name='email'
                            readOnly
                        />
                        <p className='text-xs text-7c mt-1 mb-0 mx-0 p-0'>Email address cannot be changed</p> 
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="country" className='text-sm text-7c dark:text-e2'>Nationality</label>
                        <input 
                            type="text" 
                            className='dark:bg-slate-500 pl-2.5 focus:outline-none border-b-2 border-main border-solid caret-main text-txt-main text-lg font-semibold w-full py-2.5 dark:text-white dark:caret-purple-500 dark:border-purple-500'
                            value={country}
                            onChange={(e)=>{setCountry(e.currentTarget.value)}}
                            id='country'
                            name='country'
                        />
                    </div>
                    <button type='submit' className="bg-main dark:bg-purple-500 rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center text-sm tracking-wider">Save</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}
