import {QueryClient} from "@tanstack/react-query";

export  const VideoApi=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
export const youtubeSearchSuggestionsApi=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const queryClient=new QueryClient({});