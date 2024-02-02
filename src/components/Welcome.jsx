import welcome from "../assests/welcome.png"
import carrot from "../assests/splash.png"
import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className="flex items-end justify-center bg-center bg-cover px-5 pb-20 h-850 tab:bg-top" style={{backgroundImage: `url(${welcome})`}}>
            <div className="flex flex-col items-center gap-5 text-white">
                <img src={carrot} alt="carrot" className="w-12 h-14" />
                <h1 className="text-center text-5xl font-medium">Welcome <br />to our store</h1>
                <p className="text-fc/70 text-base font-medium">Ger your groceries in as fast as one hour</p>
                <Link to="/sign-in" className="bg-main dark:bg-purple-500 text-sm rounded-3xl text-white w-full h-btn flex items-center justify-center">Get Started</Link>
            </div>
        </div>
    )
}
