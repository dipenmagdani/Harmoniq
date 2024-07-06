import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SearchSongCard from "./SearchSongCard";
import SongContext from "../../contexts/SongContext";
import { MdArrowForwardIos } from "react-icons/md";
import useLoadingBar from "../../hooks/useLoadingBar";

const SectionSearch = ({ title, data, viewAllLink }) => {
  const { isLoadingCard, isLoading } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold flex items-center justify-center bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
            {isLoadingCard ? "" : title}
          </h1>
          {!isLoadingCard && (
            <Link to={viewAllLink}>
              <div className="flex items-center relative top-[1px] hover:bg-zinc-900 transition-all hover:underline duration-300 hover:scale-105 justify-center w-24 h-10 gap-1 rounded-full text-sm ">
                <span className="bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent font-bold">
                  Show More
                </span>
                <MdArrowForwardIos />
              </div>
            </Link>
          )}
        </div>

        {isLoadingCard ? (
          <LoadingBar />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.slice(0, 5).map((item, index) => (
              <div key={index} className="w-full">
                <SearchSongCard items={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="min-w-32 sm:ml-64 relative top-2 bg-white/40 h-[1.3px]"></div>
    </>
  );
};

export default SectionSearch;
