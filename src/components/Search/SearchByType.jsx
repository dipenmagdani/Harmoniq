import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import SongContext from "../../contexts/SongContext";
import NavBar from "../HomePage/NavBar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import useLoadingBar from "../../hooks/useLoadingBar";
import SearchSongCard from "./SearchSongCard";

const SearchByType = () => {
  const { name, type } = useParams();
  const { searchTypeData, setSearchTypeData } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();
  const { isLoading } = useApi(
    `${import.meta.env.VITE_HARMONIQ_API_KEY}/search/${type}?q=${name}&n=100`,
    null,
    setSearchTypeData
  );

  return (
    <>
      <NavBar />
      <MusicPlayer />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-auto min-w-full">
        {/* <div className="flex flex-row gap-4 ">
        <div className="flex-shrink-0 flex gap-5">
          {data.map((item, index) => (
            <SearchSongCard key={index} items={item} />
          ))}
        </div>
      </div> */}
        {isLoading ? (
          <LoadingBar />
        ) : (
          searchTypeData?.results?.map((item, index) => (
            <SearchSongCard key={index} items={item} />
          ))
        )}
      </div>
    </>
  );
};

export default SearchByType;
