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
      <div className="p-4 sm:ml-64">
        <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoadingCard ? "" : title}
        </h1>
        <div className="overflow-x-auto no-scrollbar">
          <div className="grid grid-cols-12 gap-4 min-w-max ">
            {data.map((item, index) => (
              <React.Suspense fallback={<SkeletonCard />}>
                <SongCard key={index} items={item} isLoading={isLoading} />
              </React.Suspense>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-32 sm:ml-64 relative top-2 bg-white/40 h-[1.3px]"></div>
    </>
  );
};

export default Section;
