import {createBrowserRouter} from "react-router-dom";
import App from "@/App.tsx";
import Body from "@/pages/Body.tsx";
import Watch from "@/pages/Watch.tsx";

export const AppRoute=createBrowserRouter([{path:'/',element:<App/>,
    children:[
        {index:true,element:<Body/>},
        {path:'watch',element:<Watch/>}
    ]
}])