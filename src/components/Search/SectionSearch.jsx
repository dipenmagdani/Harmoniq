import React from "react";
import { Link } from "react-router-dom";
import SearchSongCard from "./SearchSongCard";

const SectionSearch = ({ title, data, viewAllLink }) => {
  return (
    <div className="p-4 sm:ml-64 h-fit">
      <div className="flex items-center mb-4">
        <h1 className="p-3 text-3xl font-bold ">{title}</h1>
        <Link
          to={viewAllLink}
          className="text-zinc-300 transition-all duration-300 hover:scale-105 hover:bg-zinc-900 flex justify-center hover:underline relative left-4 bg-orange-700 w-20 h-5 rounded-lg"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto min-w-full">
        <div className="flex-shrink-0 flex gap-5">
          {data.map((item, index) => (
            <SearchSongCard key={index} items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSearch;
