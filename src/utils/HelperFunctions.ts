import axios from "axios";
import {youtubeSearchSuggestionsApi} from "@/utils/Constants.ts";

export const parseISODuration =(duration:string)=>{
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

    const matches = duration.match(regex);

    if (!matches) return "0:00";

    const hours = parseInt(matches[1] || "0", 10);
    const minutes = parseInt(matches[2] || "0", 10);
    const seconds = parseInt(matches[3] || "0", 10);

    const paddedMinutes = hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
    const paddedSeconds = String(seconds).padStart(2, '0');

    return hours > 0
        ? `${hours}:${paddedMinutes}:${paddedSeconds}`
        : `${paddedMinutes}:${paddedSeconds}`;
}
export const formatViewCount =(views: number)=>{
    if (views >= 1_000_000_000) {
        return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (views >= 1_000) {
        return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return views.toString();
}
export const FetchSearchSuggestions=async (searchText:string)=>{
    const response=await axios.get(youtubeSearchSuggestionsApi+searchText);
    return response.data[1] as Array<string>;
}