import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useAPI';
import SongContext from '../../contexts/SongContext';
import SearchTypeCard from './SearchTypeCard';

const SearchByType = () => {
  const { name, type } = useParams();
  const { searchTypeData, setSearchTypeData } = useContext(SongContext);

  const genre = () => {
    switch (type) {
      case 'playlists':
        return '/api/search/playlist';
      case 'albums':
        return '/api/search/album';
      case 'songs':
        return '/api/search/song';
      default:
        return '/api/search/song';
    }
  };

  const { isLoading } = useApi(genre(), name, setSearchTypeData);

  return (
    <>
      <div className="p-4 min-[1024px]:ml-64 mb-10">
        <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
          {isLoading ? (
            <div className="w-32 h-5 bg-zinc-700/30 rounded animate-pulse overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-zinc-700 to-zinc-600 animate-wave"></div>
            </div>
          ) : (
            type.charAt(0).toUpperCase() + type.slice(1)
          )}
        </h1>
        <div className="overflow-y-auto no-scrollbar flex h-fit ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all ease-in-out duration-1000">
            {searchTypeData?.results?.map((item, index) => (
              <SearchTypeCard key={index} items={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByType;
