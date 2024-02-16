import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import carrot from '../../assests/carrot.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Swal from 'sweetalert2'


export default function SignUp() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_SERVER}/auth/register`, {
                userName,
                email,
                password,
            })
            .then((res) => {
                console.log(res.data);
                const msg = res.data.message;
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1500,
                    background:"rgb(83 177 117)",
                    color: "#fff",
                    iconColor: "#fff",
                    width: "285px"
                });
                Toast.fire({
                    icon: "success",
                    title: `${msg}`,
                    confirmButtonText: "OK",
                    showCancelButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (msg.includes('exist')) {
                            navigate("/login")
                        } else {
                            navigate("/sign-in/enter-phone")
                        }
                    }
                });
            // window.location.href = "/sign-in";
            })
            .catch((e) => {
                console.log(e);
                console.log(e.response.data.message);
            });
        //alert here
    };
    return (
        <div className='main-page flex flex-col items-center pt-20 px-5 h-screen'>
            <img src={carrot} alt="carrot" className='w-12 h-14' />
            <form onSubmit={(e)=>{
                e.preventDefault()
                navigate("/sign-in/enter-phone")
                // handleFormOnSubmit(e)
            }} className='w-full flex flex-col items-start mt-5'>
                <h1 className='text-txt-main text-2xl font-semibold'>Sign Up</h1>
                <p className='text-7c text-base'>Enter your credentials to continue</p>
                <div className="flex flex-col items-start w-full mt-2.5">
                    <label htmlFor="name" className="text-7c text-base font-medium">Username</label>
                    <input 
                        type="text" 
                        id='name' 
                        autoComplete="name" 
                        placeholder="Enter your username" 
                        className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
                <div className="flex flex-col items-start w-full mt-5">
                    <label htmlFor="mail" className="text-7c text-base font-medium">Email</label>
                    <input 
                        type="email" 
                        id='mail' 
                        autoComplete="email" 
                        placeholder="Enter your mail" 
                        className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className='flex flex-col items-start w-full mt-5'>
                    <label htmlFor="password" className='text-7c text-base font-medium'>Password</label>
                    <div className='relative w-full h-fit'>
                        <input 
                            id='password' 
                            name='password' 
                            autoComplete="password" 
                            type={show? "text": "password"} 
                            placeholder='xxxxxxxx' 
                            maxLength={15} 
                            className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg" 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {show?
                        <FaEye onClick={()=>{setShow(false)}} className='absolute right-2.5 top-3 text-txt-main cursor-pointer'/>
                        :<FaEyeSlash onClick={()=>{setShow(true)}} className='absolute right-2.5 top-3 text-7c cursor-pointer'/>
                        }
                    </div>
                </div>
                <p className='text-7c text-sm mt-5'>By continuing you agree to our. <Link to="" className='text-main'>Terms of Service</Link> and <Link to="" className='text-main'>Privacy Policy</Link></p>
                <input type="submit" value="Sign up" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5 text-sm tracking-wider" />
            </form>
            <p className='text-txt-main text-sm font-semibold mt-5'>Already have an account? <Link to="/login" className='text-main'>Login</Link></p>
        </div>
    )
}