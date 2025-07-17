import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import ThemeContextProvider from "./utils/ThemeContextProvider.tsx";
import { RouterProvider} from "react-router-dom";
import {AppRoute} from "@/routes/AppRoute.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeContextProvider>
            <RouterProvider router={AppRoute}/>
            </ThemeContextProvider>
    </StrictMode>,
)
