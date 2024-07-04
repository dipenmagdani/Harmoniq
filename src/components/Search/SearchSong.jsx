import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import SectionSearch from "./SectionSearch";
import SongContext from "../../contexts/SongContext";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SearchByType from "../Search/SearchByType";
import useApi from "../../hooks/useAPI";
const SearchSong = () => {
  const { name } = useParams();
  const { isLoadingCard, setIsLoadingCard } = useContext(SongContext);
  const [searchData, setSearchData] = useState(null);
  const {} = useApi("/api/search/", name, setSearchData);

  // const { albums, artists, playlists, songs, topQuery, shows, episodes } =
  //   searchData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="song_data h-72 ">
        {/* {searchData?.topQuery?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " :"Top"}
            data={searchData?.topQuery?.data || []}
            viewAllLink={`/search/top/${name}`}
          />
        )} */}
        {searchData?.albums?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " : "Albums"}
            data={searchData?.albums?.data || []}
            viewAllLink={`/search/${name}/albums`}
          />
        )}
        {searchData?.playlists?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " : "Playlists"}
            data={searchData?.playlists?.data || []}
            viewAllLink={`/search/${name}/playlists`}
          />
        )}
        {searchData?.songs?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " : "Songs"}
            data={searchData?.songs?.data || []}
            viewAllLink={`/search/${name}/songs`}
          />
        )}
        {/* {searchData?.artists?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " :"Artists"}
            data={searchData?.artists?.data || []}
            viewAllLink={`/search/${name}/artists`}
          />
        )} */}
        {searchData?.episodes?.data?.length > 0 && (
          <SectionSearch
            title={isLoadingCard ? "  " : "Episodes"}
            data={searchData?.episodes?.data || []}
            viewAllLink={`/search/${name}/episodes`}
          />
        )}
      </div>
      <MusicPlayer />
    </>
  );
};

export default SearchSong;
