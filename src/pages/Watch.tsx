import {useSearchParams} from "react-router-dom";

const Watch=()=>{
    const [searchParam]=useSearchParams();
    const videoid=searchParam.get('v');
    return(
        <main>{videoid}</main>
    );
};
export default Watch;