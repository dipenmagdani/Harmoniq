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
  const {
    isLoadingCard,
    setIsLoadingCard,
    searchData,
    setSearchData,
    searchQuery,
  } = useContext(SongContext);
  const {} = useApi("/api/search/", name, setSearchData);

  // const { albums, artists, playlists, songs, topQuery, shows, episodes } =
  //   searchData;
  console.log(searchQuery);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      {!searchQuery ? (
        <div className="flex min-h-screen flex-col items-center justify-center content-center ">
          <div className="text-7xl text-red-700 p-3">404 Not Found</div>
          <div className="text-xl text-white">Please Use Search Box...</div>
        </div>
      ) : (
        <div className="song_data h-72 ">
          {searchData?.topQuery?.data?.length > 0 && (
            <SectionSearch
              title={isLoadingCard ? "  " : "Top"}
              data={searchData?.topQuery?.data || []}
              viewAllLink={`/search/top/${name}`}
            />
          )}
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
      )}

      <MusicPlayer />
    </>
  );
};

export default SearchSong;
