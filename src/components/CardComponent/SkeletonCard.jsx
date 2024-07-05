import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <div className="relative max-w-sm rounded-tl-3xl rounded-br-3xl w-52 h-52 animate-pulse bg-zinc-800 border-2 border-gray-400 ">
        <img
          className="rounded-tl-3xl rounded-br-3xl opacity-80 bg-slate-300 animate-pulse"
          src=""
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r rounded-tl-3xl rounded-br-3xl text-white p-4 ">
          <div className="w-36 h-7 bg-zinc-500/70 border-2 border-gray-400 animate-pulse">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-rose-200 bg-clip-text text-transparent"></h1>
          </div>
          <div className="w-28 h-7 relative top-2 bg-zinc-500/50 border-2 border-gray-400 animate-pulse">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-rose-200 bg-clip-text text-transparent"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
