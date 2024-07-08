import React from 'react';

const SkeletonCard = () => {
  return (
    <>
      <div className="border-2 p-2 rounded-md w-48 h-48 border-zinc-700/35 hover:border-white/60 transition-all duration-1000 ease-in-out animate-pulse">
        <div className="relative max-w-sm rounded-tl-3xl rounded-br-3xl w-auto h-52 cursor-pointer group">
          <div className="w-full h-full rounded-tl-3xl rounded-br-3xl animate-pulse overflow-hidden">
            <div className="w-full animate-wave"></div>
          </div>
          <div className="absolute bottom-5 left-0 right-0 p-4 rounded-tl-3xl rounded-br-3xl">
            <div className="w-36 h-6 bg-zinc-700/70 rounded animate-pulse overflow-hidden mb-2">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
            <div className="w-28 h-4 bg-zinc-700/50 rounded animate-pulse overflow-hidden mb-2">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
            <div className="w-24 h-3 bg-zinc-700/30 rounded animate-pulse overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
