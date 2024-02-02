import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    // const mode = useSelector((state)=> state.theme)
    // const dispatch = useDispatch()
    const {setTheme, resolvedTheme} = useTheme()
    
    if (resolvedTheme === 'dark') {
        return <MdSunny onClick={()=>{
            setTheme("light")
            // dispatch(changeTheme('light'))
        }} className="cursor-pointer text-white"/>
    }
    if (resolvedTheme === 'light') {
        return <FaMoon onClick={()=>{
            setTheme('dark')
            // dispatch(changeTheme('dark'))
        }} className="cursor-pointer text-gray-600"/>
    }
}
