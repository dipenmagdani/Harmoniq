import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SongContext from "../../contexts/SongContext";
import useApi from "../../hooks/useAPI";
import useLoadingBar from "../../hooks/useLoadingBar";
import CardComponent from "../CardComponent/CardComponent";

export const SongDetails = () => {
  const { id } = useParams();
  const { songData, setSongData } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  const { isLoading } = useApi("song", id, setSongData);

  return (
    <>
      <NavBar />
      <MusicPlayer />
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full transition-all duration-300">
            <LoadingBar />
          </div>
        ) : (
          <CardComponent data={songData?.songs[0]} />
        )}
      </div>
    </>
  );
};

export default SongDetails;
