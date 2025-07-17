import {ReactLenis} from "lenis/react";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {nanoid} from "nanoid";
export const VideoCardWatchShimmer=()=>{
    return(
       <div className={`grid grid-cols-2 gap-2 w-full`}>
           <Skeleton className={`col-span-1 aspect-video`}/>
           <div className={`space-y-3 pt-2`}>
               <Skeleton className={`h-3 w-full`}/>
               <Skeleton className={`h-3 w-2/3`}/>
               <div className={` flex  items-center gap-4`}>
                   <Skeleton className={`aspect-square h-8 rounded-full`}/>
                    <span className={`w-full h-full flex flex-col gap-2`}>
                         <Skeleton className={`h-2 w-1/3  opacity-70`}/>
                   <Skeleton className={`h-2 w-1/4  opacity-70`}/>
                    </span>
               </div>
           </div>
       </div>
    );
};
const VideoShimmer = () => {
    return (
        <ReactLenis
            root
            options={{
                lerp:0.3,
                duration:1.2,
                smoothWheel:true,
            }}
        >
            <main className={`w-full min-h-[100vh-120px] p-5 lg:p-10 **:transition-colors **:duration-300  grid-cols-1 grid lg:grid-cols-3 gap-5 justify-center`}>
               <div className={`col-span-1 lg:col-span-2`}>
                   <Skeleton className={` aspect-video`}/>
                   <div className={`w-full flex justify-between  gap-3 mt-5`}>
                       <div className={`flex items-center gap-5`} >
                           <Skeleton className={`aspect-square h-12 rounded-full`}/>
                           <div className={`w-full overflow-hidden space-y-2`}>
                               <Skeleton className={`h-3 rounded-full w-[130px] lg:w-[300px]`}/>
                               <Skeleton className={`h-3 rounded-full w-[80px] lg:w-[250px]`}/>
                           </div>
                       </div>
                      <Skeleton className={`w-32 h-14 rounded-full`}/>
                   </div>
               </div>
                <div className={`space-y-2`}>
                    {Array.from({length:6}).map(()=>(<VideoCardWatchShimmer key={nanoid()}/>))}
                </div>
            </main>
        </ReactLenis>

    );
}
export default VideoShimmer;