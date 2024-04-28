import offlinePic from "../../assests/offline.png"

export default function OfflinePage() {
    return (
        <div className="flex flex-col items-center justify-start gap-5 pt-14 w-full h-screen px-5">
            <div className="bg-cover bg-no-repeat bg-center w-full h-52" style={{backgroundImage:`url(${offlinePic})`}}></div>
            <h1 className="text-2xl text-txt-main font-semibold">No Internet Connection</h1>
            <h2 className="text-sm text-7c">Please check your WiFi</h2>
            <button 
                className="w-fit h-btn flex items-center justify-center text-white bg-main rounded-3xl text-base px-5"
                onClick={()=>{
                    window.location.reload()
                }}
            >
                Try again
            </button>
        </div>
    )
}
