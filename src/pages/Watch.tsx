import {useSearchParams} from "react-router-dom";

const Watch=()=>{
    const [searchParam]=useSearchParams();
    const videoId=searchParam.get('v');
    return(
        <main className={`w-full grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-10`}>
            <div className={`col-span-1 lg:col-span-2`}>
                <div className={`aspect-video relative rounded-lg overflow-hidden`}>
                    <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className={`absolute inset-0 w-full h-full`}
                            allowFullScreen></iframe>
                </div>
            </div>
        </main>
    );
};
export default Watch;