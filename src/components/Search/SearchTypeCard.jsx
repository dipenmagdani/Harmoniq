import React from 'react';
import { Link } from 'react-router-dom';
import SkeletonCard from '../CardComponent/SkeletonCard';
import useApi from '../../hooks/useAPI';

const SearchTypeCard = ({ items }) => {
  const { isLoading } = useApi(null, null, null);

  const type = items.type;

  const generateLink = () => {
    switch (type) {
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
      <div className="main-card w-40 h-40 sm:w-52 sm:h-52 overflow-hidden border-2 p-2 rounded-md border-white/35">
        <SkeletonCard />
      </div>
    );
  }
  return (
    <Link to={generateLink()} className="block w-full">
      <div className="border-2 p-2 rounded-md border-white/35 hover:border-white/60 transition-all duration-500 bg-stone-700/20">
        <div className="relative w-full  h-52 sm:h-64 cursor-pointer group">
          <img
            src={Array.isArray(items.image) ? items.image[2].link : items.image}
            className="w-full h-full object-cover rounded-md bg-black opacity-55 hover:opacity-75"
            alt={items.name}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-rose-900/35 text-white p-4 rounded-md text-pretty">
            <h1 className="text-sm sm:text-xl truncate font-bold bg-gradient-to-r underline from-red-700 to-rose-200 bg-clip-text text-transparent w-full">
              {items.name.replace(/&quot;/g, '')}
            </h1>
            <div className="type-heading text-nowrap no-scrollbar overflow-x-scroll">
              <h5 className="text-[9px] sm:text-[11px] font-medium text-zinc-200">
                {items.subtitle}
              </h5>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-2 items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md text-center">
            <h1 className="text-xs sm:text-emerald-200">
              {items.name.replace(/&quot;/g, '')}
            </h1>
            <h5 className="text-[9px] sm:text-xs text-zinc-400">
              {items.subtitle}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchTypeCard;
