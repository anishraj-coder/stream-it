import {CiSearch} from "react-icons/ci";
import {type FormEvent, useEffect, useRef, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce.ts";
import {useQuery} from "@tanstack/react-query";
import {FetchSearchSuggestions} from "@/utils/HelperFunctions.ts";
const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText=useDebounce(searchText,200);
    const searchRef=useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(true);
    const submitHandler=(e:FormEvent)=>{
        e.preventDefault();
    }
    const {data:results}=useQuery<Array<string>>({
        queryKey:['search-text',debouncedSearchText],
        queryFn:()=>FetchSearchSuggestions(debouncedSearchText),
        gcTime: 60*1000,
        staleTime:4*60*1000,
        enabled: debouncedSearchText.length>0,
    });
    useEffect(() => {
        const handleClick=()=>{
            if (searchRef.current && !searchRef.current.contains(event?.target as Node)) {
                setIsFocused(false);
            }else{
                setIsFocused(true);
            }
        }
        document.addEventListener('mousedown',handleClick);
        return ()=>{
            document.removeEventListener("mousedown",handleClick);
        }
    }, []);
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsFocused(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div ref={searchRef} className={`w-48 lg:w-96 relative transition-colors duration-300 **:transition-colors **:duration-300`}>
            <form onSubmit={submitHandler} className={`search w-48 lg:w-96 pl-6 overflow-hidden grid grid-row-1 grid-cols-6 outline-none ring-[0.5px] ring-zinc-800 h-10 rounded-full dark:bg-zinc-800  dark:ring-zinc-300 relative z-10`}>
                <input className={`h-full col-span-4 lg:col-span-5 outline-none bg-transparent font-light font-poppins dark:placeholder:text-zinc-500 dark:text-white`} placeholder={`Search......`} type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
                <button className={`h-full bg-zinc-100 dark:bg-zinc-700 text-zinc-500 font-bold col-span-2 lg:col-span-1 flex items-center justify-center text-2xl`}><CiSearch/></button>
            </form>
            {isFocused&& results && results.length > 0 && (
                <div className={`w-full rounded-xl p-4 absolute left-1/2 top-full -translate-x-1/2 flex flex-col bg-white dark:bg-black shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800 mt-2 gap-2 font-[poppins] `} style={{zIndex: 9999}}>
                    {results.map(result=>(
                        <span key={result} className={`h-8 w-full shrink-0  border-zinc-800 dark:border-zinc-700 dark:text-white`}>
                            {result}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
export default SearchBar;