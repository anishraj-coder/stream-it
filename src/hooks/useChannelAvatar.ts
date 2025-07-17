import {useQuery} from "@tanstack/react-query";
import {FetchChannelImage} from "@/utils/VideoFetcher.ts";

export const useChannelAvatar=(channelId:string)=>{
    return useQuery({
        queryKey:['channelImage',channelId],
        queryFn:()=>FetchChannelImage(channelId),
        gcTime:5*60*1000,
        staleTime:5*60*1000,
    })
}