import { Link } from "react-router-dom"
import failed from "../../assests/failed.png"

export default function Failed() {
    return (
        <div className='min-h-555 z-50 h-screen absolute top-0 left-0 w-full bg-main-page dark:bg-main-page-dark flex flex-col items-center justify-center gap-5'>
            <img src={failed} alt="success" width={222}/>
            <div className='flex flex-col items-center text-center px-10 gap-2.5 mt-10'>
                <h2 className='text-txt-main dark:text-white text-2xl font-bold'>Oops! Order Failed</h2>
                <p className='text-7c dark:text-e2 text-sm'>Something went tembly wrong.</p>
            </div>
            <div className='flex flex-col items-center gap-2.5 w-full mt-10'>
                <Link to="" className='flex bg-main dark:bg-purple-500 relative rounded-3xl text-white w-100 mx-auto h-btn items-center justify-center tracking-widest'>Pleases try again</Link>
                <Link to="/home" className='text-txt-main dark:text-white text-base font-semibold'>Back to home</Link>
            </div>
        </div>
    )
}
