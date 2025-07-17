import {useFetchVideo} from "@/hooks/useFetchVideo.ts";
import ShimmerUI from "@/components/ShimmerUI.tsx";
import VideoCard from "@/components/VideoCard.tsx";
import {nanoid} from "nanoid";


const VideoContainer = () => {
    const {data,isLoading}=useFetchVideo();
    if(isLoading)return <ShimmerUI/>;
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-2 place-items-center gap-5 lg:gap-3  mt-5`}>
            {data&&data.map(item=>(<VideoCard key={nanoid()} data={item}/>))}
        </main>
    );
};

export default VideoContainer;