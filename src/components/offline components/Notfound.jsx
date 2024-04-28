import { Link } from "react-router-dom";
import notFound from "../../assests/convertio-maintenance-1536x1062.webp";


export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white gap-5 p-5">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold text-main">404</h1>
                <p className="text-base text-7c font-semibold">Page not found</p>
            </div>
            <div className="w-full h-1/2 overflow-hidden">
                <img src={notFound} alt="not-found" className="w-full h-full" />
            </div>
            <Link to="/home" className="bg-main rounded-3xl cursor-pointer text-white w-full h-btn flex items-center justify-center mt-5 text-sm tracking-wider">Back to home</Link>
        </div>
    )
}
