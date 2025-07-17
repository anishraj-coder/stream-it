import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";
import {X} from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";
import {type ReactNode, useEffect} from "react";
import { IoIosMusicalNotes, IoMdHome} from "react-icons/io";
import {SiYoutubegaming, SiYoutubeshorts} from "react-icons/si";
import {BiSolidVideo} from "react-icons/bi";
import {RiLiveFill} from "react-icons/ri";
import {MdLocalMovies, MdOutlineSportsBasketball} from "react-icons/md";

interface GroupElement{
    icon: ReactNode,
    name: string,
}
interface MenuItem{
    groupLabel: string;
    elements: Array<GroupElement> ;
}

const items:Array<MenuItem>=[
    {groupLabel:'Your feed', elements:[{icon:<IoMdHome/>,name:'Home'},{icon:<SiYoutubeshorts/>,name:'Shots'},
            {icon:<BiSolidVideo/>,name:"Videos"},{icon:<RiLiveFill/>,name:'Live'}]},
    {groupLabel:'Subscriptions',elements:[{icon:<IoIosMusicalNotes/>,name:'Music'},{icon:<MdOutlineSportsBasketball/>,name:'Sports'},{icon:<SiYoutubegaming/>,name:'Gaming'},{icon:<MdLocalMovies/>,name:'Movies'}]},
    {groupLabel:'Watch Later',elements:[{icon:<IoIosMusicalNotes/>,name:'Music'},{icon:<MdOutlineSportsBasketball/>,name:'Sports'},{icon:<SiYoutubegaming/>,name:'Gaming'},{icon:<MdLocalMovies/>,name:'Movies'}]}
];

export function AppSidebar() {
    const {toggleSidebar,open} = useSidebar();
    useEffect(() => {
        if(open)toggleSidebar();
    }, []);
    return (
        <Sidebar className={`font-poppins  w-48`}>
            <SidebarHeader className={`flex items-center justify-between`}>
                <div className={`w-full h-full flex items-center justify-between`}><span>Hello, there</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                        className="h-8 w-8"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close sidebar</span>
                    </Button></div>
            </SidebarHeader>
            <SidebarContent>
                {items.map(item=>(
                    <SidebarGroup key={item.groupLabel}>
                        <SidebarGroupLabel className={`text-lg`}>{item.groupLabel}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.elements.map(element=>(
                                    <SidebarMenuItem  key={element.name}>
                                        <SidebarMenuButton className={`h-[42px] lg:h-9 my-0`}>
                                            <span className={`flex w-full h-full gap-3 text-xl lg:text-[16px] `}>
                                                <span>{element.icon}</span><span>{element.name}</span>
                                            </span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}

                <SidebarGroup/>
                <SidebarGroup/>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}