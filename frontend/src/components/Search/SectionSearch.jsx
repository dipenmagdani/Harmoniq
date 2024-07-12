import React from 'react';
import { Link } from 'react-router-dom';
import SearchSongCard from './SearchSongCard';
import { MdArrowForwardIos } from 'react-icons/md';
import useLoadingBar from '../../hooks/useLoadingBar';
import useApi from '../../hooks/useAPI';
const SectionSearch = ({ title, data, viewAllLink }) => {
  const { isLoading } = useApi(null, null, null);

  return (
    <>
      <div className="p-4 min-[1024px]:ml-64 h-fit ">
        <div className="top-text flex justify-between">
          <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
            {isLoading ? (
              <div className="w-44 h-5 bg-zinc-700/30  relative rounded animate-pulse overflow-hidden">
                <div className="w-44 h-full  bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
              </div>
            ) : (
              title
            )}
          </h1>
          {isLoading ? (
            <div className="w-32 h-5 bg-zinc-700/30 rounded animate-pulse overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
          ) : (
            <Link to={viewAllLink}>
              <div className="relative top-[1px] transition-all hover:underline duration-300 hover:scale-105 flex  w-24 h-10 gap-1 rounded-full text-sm ">
                <span className="bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent font-bold">
                  Show More
                </span>
                <MdArrowForwardIos />
              </div>
            </Link>
          )}
        </div>
        <div className="overflow-x-auto no-scrollbar flex">
          <div
            className={`grid grid-flow-col-dense gap-4 min-w-max transition-all ease-in-out duration-1000 `}
          >
            {data.slice(0, 5).map((item, index) => (
              <SearchSongCard items={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-32 min-[1024px]:ml-64 relative top-2 bg-white/40 h-[1.3px]"></div>
    </>
  );
};

export default SectionSearch;
