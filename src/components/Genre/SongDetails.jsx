import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavAndSideBar/SideBar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SongContext from "../../contexts/SongContext";
import useApi from "../../hooks/useAPI";
import useLoadingBar from "../../hooks/useLoadingBar";
import CardComponent from "../CardComponent/CardComponent";

export const SongDetails = () => {
  const { id } = useParams();
  const { songData, setSongData } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  const { isLoading } = useApi("/api/song", id, setSongData);
  useEffect(() => {
    if (songData?.songs) {
      // Assuming 'results' is the key holding the actual song data
      setSongData(songData.songs[0]); // Adjust according to your API response structure
    }
  }, [songData, setSongData]);
  console.log(songData);
  return (
    <>
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full transition-all duration-300">
            <LoadingBar />
          </div>
        ) : (
          <CardComponent data={songData} />
        )}
      </div>
    </>
  );
};

export default SongDetails;
