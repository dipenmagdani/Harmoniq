import React from 'react';
import SongCard from './SongCard';
import useApi from '../../hooks/useAPI';

const Section = ({ title, data }) => {
  const { isLoading } = useApi();

  return (
    <>
      <div className="p-4 min-[1024px]:ml-64 mb-5">
        <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoading ? (
            <div className="w-32 h-5 bg-zinc-700/30 rounded animate-pulse overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
          ) : (
            title
          )}
        </h1>
        <div className="overflow-x-auto no-scrollbar flex">
          <div
            className={`grid min-[1024px]:grid-rows-2  grid-flow-col-dense gap-4 min-w-max transition-all ease-in-out duration-1000 `}
          >
            {data.map((item, index) => (
              <SongCard key={index} items={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-32 min-[1024px]:ml-64 relative bottom-2 bg-white/40 h-[1.3px]"></div>
    </>
  );
};

export default Section;
