import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";

export default function ForgetPass() {
    return (
        <div className='main-page flex flex-col items-center h-screen px-5'>
            <Link to="/login" className="self-start"><FaAngleLeft className="text-txt-main text-2xl mb-16 mt-10"/></Link>
            <FaLock className="text-8xl text-carrot"/>
            <div className="mt-10">
                <h1 className='text-txt-main text-2xl font-semibold my-3'>Reset Link</h1>
                <p className='text-sm text-7c'>Enter your email address and we will send you the reset link</p>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='w-full mt-10'>
                <label htmlFor="mail" className='text-7c text-base font-medium'>E-mail</label>
                <input id='mail' name='email' autoComplete="email" type="email" placeholder='Enter your email' className='placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg'/>
                <input type="submit" value="Reset Password" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-10" />
            </form>
        </div>
    )
}