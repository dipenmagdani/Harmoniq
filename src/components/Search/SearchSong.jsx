import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import SectionSearch from "./SectionSearch";
import SongContext from "../../contexts/SongContext";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SearchByType from "../Search/SearchByType";
const SearchSong = () => {
  const { name } = useParams();
  const { isLoadingCard, setIsLoadingCard } = useContext(SongContext);
  const API = import.meta.env.VITE_HARMONIQ_API_KEY;
  const [searchData, setSearchData] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoadingCard(true);
      const response = await fetch(`${API}/search?q=${name}`);
      const { data } = await response.json();
      let {
        albums,
        artists,
        playlists,
        songs,
        top_query: topQuery,
        shows,
        episodes,
      } = data;
      let dataFromApi = {
        albums,
        artists,
        playlists,
        songs,
        topQuery,
        shows,
        episodes,
      };
      setSearchData(dataFromApi);
      setIsLoadingCard(false);
    } catch (error) {
      console.log(error);
      setIsLoadingCard(false);
    }
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <>
      <NavBar />
      <div className="song_data h-72 ">
        {/* {searchData?.topQuery?.data?.length > 0 && (
          <SectionSearch
            title={"Top"}
            data={searchData?.topQuery?.data || []}
            viewAllLink={`/search/top/${name}`}
          />
        )} */}
        {searchData?.albums?.data?.length > 0 && (
          <SectionSearch
            title={"Albums"}
            data={searchData?.albums?.data || []}
            viewAllLink={`/search/${name}/albums`}
          />
        )}
        {searchData?.playlists?.data?.length > 0 && (
          <SectionSearch
            title={"Playlists"}
            data={searchData?.playlists?.data || []}
            viewAllLink={`/search/${name}/playlists`}
          />
        )}
        {searchData?.songs?.data?.length > 0 && (
          <SectionSearch
            title={"Songs"}
            data={searchData?.songs?.data || []}
            viewAllLink={`/search/${name}/songs`}
          />
        )}
        {/* {searchData?.artists?.data?.length > 0 && (
          <SectionSearch
            title={"Artists"}
            data={searchData?.artists?.data || []}
            viewAllLink={`/search/${name}/artists`}
          />
        )} */}
        {searchData?.episodes?.data?.length > 0 && (
          <SectionSearch
            title={"Episodes"}
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
