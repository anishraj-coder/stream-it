import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "@/utils/ThemeContext.ts";
import {nanoid} from "nanoid";

const items = ['All', 'Music', 'Rhymes', 'Mixes', 'Movie ', 'pop']
const NavButtons = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`w-full  overflow-x-auto pt-4 bg-white dark:bg-black flex gap-5 transition-colors duration-300 **:transition-colors **:duration-300  px-3 items-center`}>
            {items.map(item => (
                <NavLink to={``}
                         className={`text-sm dark:text-white bg-zinc-300 dark:bg-zinc-600 px-3 py-1 rounded-sm ${theme}`}
                         key={nanoid()}
                >{item}</NavLink>
            ))}
        </div>
    );
};

export default NavButtons;