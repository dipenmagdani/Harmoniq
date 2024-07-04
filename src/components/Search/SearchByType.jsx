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

  const genre = () => {
    switch (type) {
      case "playlists":
        return "/api/search/playlist";
      case "albums":
        return "/api/search/album";
      case "songs":
        return "/api/search/song";
      default:
        return "/api/search/song";
    }
  };

  const { isLoading } = useApi(genre(), name, setSearchTypeData);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow overflow-y-auto px-4 py-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <LoadingBar />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {searchTypeData?.results?.map((item, index) => (
              <SearchSongCard key={index} items={item} />
            ))}
          </div>
        )}
      </div>
      <MusicPlayer />
    </div>
  );
};

export default SearchByType;
