import {useContext,} from "react";
import {ThemeContext} from "@/utils/ThemeContext.ts";
import NavButtons from "@/components/NavButtons.tsx";
import VideoContainer from "@/components/VideoContainer.tsx";
import {ReactLenis} from 'lenis/react';

const Body = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <ReactLenis
            root                // scroll the <html> element
            options={{
                duration: 1.2,
                lerp:0.1,
                smoothWheel:true,
            }}>
            <div
                className={`font-[poppins] font-medium  bg-white ${theme} transition-all duration-300 dark:bg-black w-full min-h-screen `}>
                <NavButtons/>
                <VideoContainer/>
            </div>
        </ReactLenis>

    );
};

export default Body;