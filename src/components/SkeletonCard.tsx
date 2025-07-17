import {Skeleton} from "@/components/ui/skeleton.tsx";

const SkeletonCard = () => {
    return (
        <div className="flex flex-col space-y-3  **:transition-colors **:duration-300">
            <Skeleton className="h-[200px] w-[330px] lg:h-[150px] lg:w-[250px] rounded-xl  **:transition-colors **:duration-300"/>
            <div className={`flex gap-4`}>
                <Skeleton className={`rounded-full h-8 w-8`}/>
               <div className={`space-y-2`}>
                   <Skeleton className="h-4 w-[180px]"/>
                   <Skeleton className="h-4 w-[120px]"/>
               </div>
            </div>
        </div>
    );
}
export default SkeletonCard;