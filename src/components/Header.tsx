import ThemeToggle from "@/components/ThemeToggle.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiMenuBurger } from "react-icons/ci";
import SearchBar from "@/components/SearchBar.tsx";
import {useSidebar} from "@/components/ui/sidebar.tsx";
import {useContext} from "react";
import {ThemeContext} from "@/utils/ThemeContext.ts";

const Header=()=>{
    const {toggleSidebar}=useSidebar();
    const {theme}=useContext(ThemeContext)
    return(
        <div className={`w-full h-20 bg-white drop-shadow-lg shadow-zinc-300 ring-zinc-400 ring-1 dark:bg-black dark:drop-shadow-black flex justify-between items-center px-2 lg:px-6 transition-colors duration-300 **:transition-colors **:duration-300 ${theme} `}>
            <div className={`logo-wrapper   h-1/2 flex items-center gap-1`}>

               <CiMenuBurger onClick={toggleSidebar} className={`text-3xl dark:text-zinc-200`}/>
                <img src={`/Assets/Images/logo.webp`} className={` h-full object-contain `}   alt="logo"/>
                <h2 className={`text-xl w-32 h-full text-center text-black dark:text-white  items-center font-black hidden lg:flex`}>STREAM-IT</h2>
            </div>
            <SearchBar/>
            <div className={`theme-toggler flex gap-4`}>
                <ThemeToggle/>
                <Avatar className={`hidden lg:flex`} >
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};
export default Header;