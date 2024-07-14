import React from 'react';
import SongCard from './SongCard';
import useApi from '../../hooks/useAPI';

const Section = ({ title, data }) => {
  const { isLoading } = useApi();

  return (
    <>
      <div className="p-2 sm:p-4 md:ml-16 lg:ml-64 mb-3 sm:mb-5">
        <h1 className="pb-2 text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoading ? (
            <div className="w-24 sm:w-32 h-4 sm:h-5 bg-zinc-700/30 rounded animate-pulse overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
          ) : (
            title
          )}
        </h1>
        <div className="overflow-x-auto no-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 transition-all ease-in-out duration-1000">
            {data.map((item, index) => (
              <SongCard key={index} items={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-32 md:ml-16 lg:ml-64 relative bottom-2 bg-white/40 h-[1px]"></div>
    </>
  );
};

export default Section;
