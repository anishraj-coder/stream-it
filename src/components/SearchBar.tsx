import {CiSearch} from "react-icons/ci";

const SearchBar = () => {
    return (

            <form className={`search w-48 lg:w-96 pl-6 overflow-hidden grid grid-row-1 grid-cols-6 outline-none ring-[0.5px] ring-zinc-800 h-10 rounded-full dark:bg-zinc-800  dark:ring-zinc-300 `}>
                <input className={`h-full col-span-4 lg:col-span-5 outline-none bg-transparent font-light dark:placeholder:text-zinc-500`} placeholder={`Search......`} type="text"/>
                <button className={`h-full bg-zinc-100 dark:bg-zinc-700 text-zinc-500 font-bold col-span-2 lg:col-span-1 flex items-center justify-center text-2xl`}><CiSearch/></button>
            </form>

    );
};

export default SearchBar;