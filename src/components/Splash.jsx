import splash from "../assests/splash.png"

export default function SplashScreen() {
    return (
        <div className="w-full bg-main dark:bg-purple-500 flex items-center justify-center h-850">
            <div className="flex gap-5 items-center justify-center w-fit h-fit text-white">
                <img src={splash} alt='carrot' className="h-16 w-14" />
                <div className="h-16 w-fit">
                    <h1 className="text-6xl font-semibold -mt-3">nectar</h1>
                    <p className="text-sm tracking-4.5 ml-1">online groceriet</p>
                </div>
            </div>
        </div>
    )
}