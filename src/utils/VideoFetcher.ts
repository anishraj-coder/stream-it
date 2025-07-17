import axios from "axios";
import {VideoApi} from "@/utils/Constants.ts";

export const axiosApi= axios.create({
    baseURL: VideoApi
});
// Thumbnail types
interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail;
}

// Localized info
interface Localized {
    title: string;
    description: string;
}

// Snippet info
interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags?: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage?: string;
    defaultLanguage?: string;
}

// Content details
interface ContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: object;
    projection: string;
}

// Statistics
interface Statistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
}

// Video item
export interface VideoItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
    statistics: Statistics;
}

// Page info
interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

// Full response
export interface YouTubeVideoListResponse {
    kind: string;
    etag: string;
    items: VideoItem[];
    nextPageToken?: string;
    pageInfo: PageInfo;
}
export const FetchVideos = async (): Promise<VideoItem[]> => {
    const response = await axios.get<YouTubeVideoListResponse>(VideoApi);
    return response.data.items;
};
export const FetchChannelImage=async(chanelId:string)=>{
    const response =await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${chanelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
    return response.data.items[0].snippet.thumbnails.medium;
}