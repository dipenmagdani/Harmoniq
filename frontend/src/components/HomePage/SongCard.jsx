import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useAPI';
import SkeletonCard from '../CardComponent/SkeletonCard';
import useLoadingBar from '../../hooks/useLoadingBar';
import { useEffect } from 'react';
const SongCard = ({ items }) => {
  const { isLoading, setIsLoading } = useApi();
  const { LoadingBar } = useLoadingBar();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    window.scroll(0, 0);
    return () => clearTimeout(timer);
  }, []);
  const generateLink = () => {
    switch (items?.type) {
      case 'playlist':
        return `/playlist/${items.id}`;
      case 'album':
      case 'show':
        return `/album/${items.id}`;
      case 'song':
        return `/song/${items.id}`;
      default:
        return '/';
    }
  };

  if (isLoading) {
    return (
      <div className="main-card w-40 h-40 relative max-sm:w-52  max-sm:h-52 max-sm:m overflow-hidden border-2 p-2 rounded-md border-white/35">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <Link className="nav-link" to={generateLink()}>
      <div className="w-full aspect-square border-2 p-1 sm:p-2 rounded-md border-white/35 hover:border-white/60 transition-all duration-300 bg-stone-700/20 ease-in-out">
        <div className="relative w-full h-full cursor-pointer group">
          <img
            src={Array.isArray(items.image) ? items.image[2].link : items.image}
            className="w-full h-full object-cover rounded-md"
            alt={items.name}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-rose-900/35 text-white p-2 sm:p-3 rounded-md">
            <h1 className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r underline from-red-700 to-rose-200 bg-clip-text text-transparent truncate">
              {items.name}
            </h1>
            <div className="text-nowrap overflow-x-auto no-scrollbar">
              <h5 className="text-[8px] sm:text-[10px] md:text-[11px] font-medium text-zinc-200">
                {items.subtitle}
              </h5>
            </div>
            <h5 className="text-start text-[8px] sm:text-[10px] md:text-[11px] font-medium text-zinc-500 relative top-1">
              {items.type.charAt(0).toUpperCase() + items.type.slice(1) + '*'}
            </h5>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-1 sm:gap-2 items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md text-center p-1 sm:p-2">
            <h1 className="text-[10px] sm:text-xs md:text-sm text-emerald-200">
              {items.name.replace(/&quot;/g, '')}
            </h1>
            <h5 className="text-[8px] sm:text-[10px] md:text-xs text-zinc-400">
              {items.subtitle}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
