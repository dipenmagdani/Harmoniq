import React from "react";
import SongCard from "./SongCard";
import { useContext } from "react";
import SongContext from "../../contexts/SongContext";
const Section = ({ title, data, isLoading }) => {
  const { isLoadingCard } = useContext(SongContext);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <h1 className="p-3 text-2xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoadingCard ? "" : title}
        </h1>
        <div className="flex flex-row gap-4 overflow-x-auto min-w-full">
          <div className="flex-shrink-0 flex gap-5">
            {data.map((item, index) => (
              <SongCard key={index} items={item} isLoading={isLoading} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
