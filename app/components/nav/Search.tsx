import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className=" w-full flex relative  group items-center gap-2 justify-between px-4 border border-input  rounded-xl md:w-[40%] bg-main">
      <input className="py-2  text-base   w-full bg-transparent text-gray-50  border-none   outline-none active:outline-none ring-0 placeholder:text-gray-400" />
      <div className=" flex items-center gap-2">
        <SearchIcon className="w-5 h-5 cursor-pointer  duration-150 group-hover:text-rose-400" />
      </div>
    </div>
  );
};

export default Search;
