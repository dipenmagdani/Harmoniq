import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongContext from "../../contexts/SongContext";
import NavBar from "../HomePage/NavBar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import useLoadingBar from "../../hooks/useLoadingBar";
import useApi from "../../hooks/useAPI";
import CardComponent from "../CardComponent/CardComponent";
export const PlaylistDetails = () => {
  const { id } = useParams();
  const { LoadingBar } = useLoadingBar();
  const { playlistDetails, setPlaylistDetails } = useContext(SongContext);

  const { isLoading } = useApi("/api/playlist", id, setPlaylistDetails);
  console.log(playlistDetails);
  return (
    <>
      <NavBar />
      <MusicPlayer />
      <div className="main-container flex items-center justify-center pt-2 ml-64 min-h-screen">
        {/* Adjusted for flex layout and added margin-left */}
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full flex-col">
            <LoadingBar />
          </div>
        ) : (
          <CardComponent data={playlistDetails} />
        )}
      </div>
    </>
  );
};

export default PlaylistDetails;
