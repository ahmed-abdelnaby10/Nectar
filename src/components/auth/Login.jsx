import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import carrot from '../../assests/carrot.png'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from "react-redux";
// import { addUser } from '../../rtk/slices/user-slice';
// import axios from "axios";
export default function Login() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [login, setLogin] = useState(false);
    // const dispatch = useDispatch();
    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        navigate("/home")
        // axios
        //     .post(`${process.env.REACT_APP_SERVER}/users/login`, {
        //         email,
        //         password,
        //     })
        //     .then((res) => {
        //         console.log(res.data);
        //         dispatch(addUser(res.data))
        //         if (res.data.message === "Login Successful") {
        //             setLogin(true);
        //             navigate("/home")
        //         }
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         console.log(e.response.data.message);
        //     });
        };
    return (
        <div className='main-page flex flex-col items-center pt-20 px-5 h-screen'>
            <img src={carrot} alt="carrot" className='w-12 h-14' />
            <form
                action='POST'
                onSubmit={(e)=>{
                    handleFormOnSubmit(e)
                }} 
                className='w-full flex flex-col items-start mt-20'
            >
                <h1 className='text-txt-main text-2xl font-semibold mb-2.5'>Login</h1>
                <p className='text-7c text-base'>Enter your email and password</p>
                <div className="flex flex-col items-start w-full mt-10">
                    <label htmlFor="email" className="text-7c text-base font-medium">Email</label>
                    <input
                        type="email" 
                        id='email' 
                        autoComplete="email" 
                        placeholder="Enter your mail" 
                        className="placeholder:text-7c placeholder:text-xs focus:outline-none bg-transparent w-full h-10 border-b border-solid border-e2 pb-1 text-txt-main text-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        onInvalid={(e)=>{
                            e.preventDefault()
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
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onInvalid={(e)=>{
                                e.preventDefault()
                            }}
                        />
                        {show?
                        <FaEye onClick={()=>{setShow(false)}} className='absolute right-2.5 top-3 text-txt-main cursor-pointer'/>
                        :<FaEyeSlash onClick={()=>{setShow(true)}} className='absolute right-2.5 top-3 text-7c cursor-pointer'/>
                        }
                    </div>
                </div>
                <Link to="/sign-in/forgot-password" className='self-end text-txt-main text-sm mt-5'>Forgot Password?</Link>
                <input type="submit" value="Login" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5 text-sm tracking-wider" />
            </form>
            <p className='text-txt-main text-sm mt-5'>Don’t have an account? <Link to="/sign-up" className='text-main font-semibold'>Singup</Link></p>
        </div>
    )
}
