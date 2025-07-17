import { createContext } from "react";
import type {Theme} from "./ThemeContextProvider.tsx";


interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme:()=>void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {},
    toggleTheme:()=>{}
});
