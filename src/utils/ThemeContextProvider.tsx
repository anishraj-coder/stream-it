import {ThemeContext} from "./ThemeContext.ts";
import {type ReactNode, useState} from "react";

export type Theme='light'|'dark';
const ThemeContextProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme=()=>{
        console.log('hello');
        setTheme(prev=>prev==='light'?'dark':'light');
    }
    return (
        <ThemeContext.Provider value={{theme:theme,setTheme:setTheme,toggleTheme:toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;