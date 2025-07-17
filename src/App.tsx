import Layout from "@/layout/Layout.tsx";
import {Outlet} from "react-router-dom";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/utils/Constants.ts";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const App = () => {

    return (
       <QueryClientProvider client={queryClient}>
           <Layout>
               <Outlet/>
           </Layout>
           <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
    )
}
export default App;