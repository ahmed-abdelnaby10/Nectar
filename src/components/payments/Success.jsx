import { Link } from 'react-router-dom'
import success from '../../assests/success.png'

export default function Success() {
    return (
        <div className='min-h-555 z-50 h-screen absolute top-0 left-0 w-full bg-main-page dark:bg-main-page-dark flex flex-col items-center justify-center gap-5'>
            <div className='relative w-full h-64'>
                <img src={success} alt="success" width={250} className='absolute top-0 left-8' />
            </div>
            <div className='flex flex-col items-center text-center px-10 gap-2.5'>
                <h2 className='text-txt-main dark:text-white text-2xl font-bold'>Your Order has been <br /> accepted</h2>
                <p className='text-7c dark:text-e2 text-sm'>Your items has been placed and is on <br /> it’s way to being processed</p>
            </div>
            <div className='flex flex-col items-center gap-2.5 w-full mt-10'>
                <Link to="" className='flex bg-main dark:bg-purple-500 relative rounded-3xl text-white w-100 mx-auto h-btn items-center justify-center tracking-widest'>Track order</Link>
                <Link to="/home" className='text-txt-main dark:text-white text-base font-semibold'>Back to home</Link>
            </div>
        </div>
    )
}
