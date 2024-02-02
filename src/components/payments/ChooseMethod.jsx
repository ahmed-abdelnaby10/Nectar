import paypal from "../../assests/paypal.png"
import master from "../../assests/master.png"
import visa from "../../assests/visa.png"
import gpay from "../../assests/gpay.png"

export default function ChooseMethode() {
    return (
        <div className="flex items-center justify-between w-full px-2.5 h-full">
            <div className="w-fit h-fit p-1 rounded-md border-2 border-solid border-e2 dark:border-slate-400 dark:bg-e2">
                <img src={paypal} alt="Paypal" className="w-8 h-5"/>
            </div>
            <div className="w-fit h-fit p-1 rounded-md border-2 border-solid border-e2 dark:border-slate-400 dark:bg-e2">
                <img src={master} alt="Mastercard" className="w-8 h-5"/>
            </div>
            <div className="w-fit h-fit p-1 rounded-md border-2 border-solid border-e2 dark:border-slate-400 dark:bg-e2">
                <img src={visa} alt="Visa" className="w-8 h-5"/>
            </div>
            <div className="w-fit h-fit p-1 rounded-md border-2 border-solid border-e2 dark:border-slate-400 dark:bg-e2">
                <img src={gpay} alt="googlepay" className="w-8 h-5"/>
            </div>
        </div>
    )
}