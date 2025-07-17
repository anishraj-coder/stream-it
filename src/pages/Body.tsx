import {useContext, } from "react";
import {ThemeContext} from "@/utils/ThemeContext.ts";
import NavButtons from "@/components/NavButtons.tsx";
import VideoContainer from "@/components/VideoContainer.tsx";


const Body = () => {
   const {theme}=useContext(ThemeContext);

    return (
        <div>
            <div
                className={`font-[poppins] font-medium  bg-white ${theme} transition-all duration-300 dark:bg-black w-full min-h-screen `}>
                <NavButtons/>
                <VideoContainer/>
            </div>
        </div>
    );
};

export default Body;