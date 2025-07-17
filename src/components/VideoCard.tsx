import type {VideoItem} from "@/utils/VideoFetcher.ts";
import {Avatar, AvatarImage} from "@radix-ui/react-avatar";
import {formatViewCount, parseISODuration} from "@/utils/HelperFunctions.ts";
import {useChannelAvatar} from "@/hooks/useChannelAvatar.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {AvatarFallback} from "@/components/ui/avatar.tsx";
import {NavLink} from "react-router-dom";

const VideoCard=({data}:{data:VideoItem})=>{
    const{data:channel,isLoading}=useChannelAvatar(data.snippet.channelId);

    return(
        <NavLink to={`watch?v=${data.id}`} className="flex flex-col space-y-3  **:transition-colors **:duration-300 cursor-pointer">
            <div className="h-[200px] w-[330px] lg:h-[150px] lg:w-[250px] rounded-xl  **:transition-colors **:duration-300 overflow-hidden shadow-zinc-400 shadow-md dark:shadow-zinc-900 relative">
                <img className={`w-full h-full object-center object-cover absolute inset-0 z-1`} src={data.snippet.thumbnails.high.url} alt=""/>
                <span className={` absolute top-2 right-[6%] text-white px-[5px] py-[3px] text-xs font-light bg-zinc-500/60 rounded-sm z-5`}>{formatViewCount(Number(data.statistics.viewCount))}</span>
                <span className={` absolute bottom-2 right-[6%] text-white px-[5px] py-[3px] text-xs font-light bg-zinc-500/60 rounded-sm z-5`}>{parseISODuration(data.contentDetails.duration)}</span>
                {data.contentDetails.definition==='hd'&& <span className={` absolute top-2 left-[6%] text-white/80 px-[5px] py-[3px] text-xs font-bold bg-zinc-500/80 rounded-sm z-5`}>{data.contentDetails.definition}</span>}
            </div>
            <div className={`flex gap-4`}>
                <Avatar className={`h-10 w-10 rounded-full overflow-hidden `}>
                    {!isLoading&&<AvatarImage src={`${channel.url}`}/>}
                    <AvatarFallback><Skeleton className={`h-8 w-8 rounded-full`}/></AvatarFallback>
                </Avatar>
                <div className={`**:dark:text-white `}>
                    <h1 className={`text-sm font-medium w-[180px] truncate`}>{data.snippet.title.slice(0,40)}</h1>
                    <h5 className={`text-sm font-light `}>{data.snippet.channelTitle}</h5>
                </div>
            </div>
        </NavLink>
    );
};
export default  VideoCard;