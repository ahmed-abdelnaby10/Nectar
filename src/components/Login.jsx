import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import carrot from '../assests/carrot.png'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='main-page flex flex-col items-center pt-20 px-5 h-screen'>
            <img src={carrot} alt="carrot" className='w-12 h-14' />
            <form onSubmit={(e)=>{
                e.preventDefault()
                navigate('/home')
            }} className='w-full flex flex-col items-start mt-20'>
                <h1 className='text-txt-main text-2xl font-semibold mb-2.5'>Loging</h1>
                <p className='text-7c text-base'>Enter your emails and password</p>
                <div className="flex flex-col items-start w-full mt-10">
                    <label htmlFor="mail" className="text-7c text-base font-medium">Email</label>
                    <input type="email" id='mail' autoComplete="country-name" placeholder="Enter your mail" className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"/>
                </div>
                <div className='flex flex-col items-start w-full mt-5'>
                    <label htmlFor="password" className='text-7c text-base font-medium'>Password</label>
                    <div className='relative w-full h-fit'>
                        <input id='password' name='password' autoComplete="password" type={show? "text": "password"} placeholder='******' maxLength={15} className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg" />
                        {show?
                        <FaEye onClick={()=>{setShow(false)}} className='absolute right-2.5 top-5 text-txt-main cursor-pointer'/>
                        :<FaEyeSlash onClick={()=>{setShow(true)}} className='absolute right-2.5 top-5 text-7c cursor-pointer'/>
                        }
                    </div>
                </div>
                <Link to="/sign-in/forgot-password" className='self-end text-txt-main text-sm mt-5'>Forgot Password?</Link>
                <input type="submit" value="Login" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5 text-sm tracking-wider" />
            </form>
            <p className='text-txt-main text-sm font-semibold mt-5'>Don’t have an account? <Link to="/sign-up" className='text-main'>Singup</Link></p>
        </div>
    )
}
