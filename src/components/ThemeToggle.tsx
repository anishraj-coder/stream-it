// DarkModeToggle.tsx
import React, {useContext} from 'react';
import {motion} from 'motion/react';
import {RiSunFill, RiMoonClearFill} from 'react-icons/ri';
import {ThemeContext} from "../utils/ThemeContext.ts";


const DarkModeToggle: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div
            onClick={toggleTheme}
            className={`
        flex items-center justify-between h-10 w-20 p-1 rounded-full
        bg-gray-200 dark:bg-gray-700 cursor-pointer
        ${(theme === 'dark') ? 'justify-end' : 'justify-start'}
        transition-colors duration-300
      `}
        >
            <motion.div
                className={`bg-white dark:bg-black p-1  rounded-full`}
                layout
                transition={{type: 'spring', stiffness: 700, damping: 30}}
            >
                <motion.div whileTap={{rotate: 360}} className={`text-xl outline-none`}>
                    {(theme === 'dark') ? (
                        <RiMoonClearFill className={`text-yellow-400`}/>
                    ) : (
                        <RiSunFill className={`text-yellow-400`}/>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DarkModeToggle;
