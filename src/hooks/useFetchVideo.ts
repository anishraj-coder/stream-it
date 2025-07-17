import {useQuery} from "@tanstack/react-query";
import {FetchVideos} from "@/utils/VideoFetcher.ts";

export const useFetchVideo=()=>{
    return useQuery({
        queryKey:['videos'],
        queryFn: FetchVideos,
        gcTime:5*60*1000,
        staleTime:5*60*1000
    })
}