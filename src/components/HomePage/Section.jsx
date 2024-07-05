import React from "react";
const SongCard = React.lazy(() => import("./SongCard"));
import useLoadingBar from "../../hooks/useLoadingBar";
import { useContext } from "react";
import SongContext from "../../contexts/SongContext";
import SkeletonCard from "../CardComponent/SkeletonCard";
const Section = ({ title, data, isLoading }) => {
  const { isLoadingCard } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  return (
    <>
      <div className="p-4 sm:ml-64 ">
        <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoadingCard ? "" : title}
        </h1>
        <div className="flex flex-row gap-4 overflow-x-auto min-w-full no-scrollbar">
          <div className="flex-shrink-0 flex gap-5 ">
            {data.map((item, index) => (
              <React.Suspense fallback={<SkeletonCard />}>
                <SongCard key={index} items={item} isLoading={isLoading} />
              </React.Suspense>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-full relative top-2 bg-white/40 h-[1.3px]"></div>
    </>
  );
};

export default Section;
