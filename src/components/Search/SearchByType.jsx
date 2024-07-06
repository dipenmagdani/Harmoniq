import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import SongContext from "../../contexts/SongContext";
import NavBar from "../NavAndSideBar/SideBar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import useLoadingBar from "../../hooks/useLoadingBar";
import UpperBar from "../NavAndSideBar/NavBar";
// import SearchTypeCard from "./SearchTypeCard";
const SearchTypeCard = React.lazy(() => import("./SearchTypeCard"));

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
  // {searchTypeData?.results?.map((item, index) => (
  //   <SearchTypeCard key={index} items={item} />
  // ))}
  return (
    <>
      <div className="sm:ml-64 my-5" style={{ background: "#1c1c1c" }}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="p-3 text-4xl font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
            {type.slice(0, 1).toUpperCase() + type.slice(1)}
          </h1>
        </div>

        <div className="p-3 grid grid-cols-5 gap-8">
          {searchTypeData?.results?.map((item, index) => (
            <React.Suspense fallback={<LoadingBar />}>
              <SearchTypeCard key={index} items={item} />
            </React.Suspense>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchByType;
