import {type ReactNode, useContext} from "react";
import {SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/AppSidebar"
import Header from "@/components/Header.tsx";
import {ThemeContext} from "@/utils/ThemeContext.ts";

const Layout = ({children}: { children: ReactNode }) => {
    const {theme}= useContext(ThemeContext);
    return (
        <SidebarProvider className={`${theme} dark:bg-black`}>
            <main className={`w-full min-h-screen ${theme} `}>
                <Header/>
                <AppSidebar/>
                {children}
            </main>
        </SidebarProvider>
    );
};

export default Layout;