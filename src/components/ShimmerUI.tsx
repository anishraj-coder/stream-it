import SkeletonCard from "@/components/SkeletonCard.tsx";
import {nanoid} from "nanoid";

const ShimmerUI=()=>{
    return(
        <main className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-2 place-items-center gap-5 lg:gap-3  `}>
            {Array.from({length:8}).map(()=>(
                <SkeletonCard key={nanoid()}/>
            ))}

        </main>
    );
};
export default  ShimmerUI;