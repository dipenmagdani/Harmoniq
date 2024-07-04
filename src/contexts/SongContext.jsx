import { createContext, useState, useRef } from "react";
import React from "react";

export const SongContext = createContext(null);

export const SongProvider = (props) => {
  const [songDetails, setSongDetails] = useState([]);
  const [albumDetails, setAlbumDetails] = useState([]);
  const [playlistDetails, setPlaylistDetails] = useState([]);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [songData, setSongData] = useState(null);
  const [searchTypeData, setSearchTypeData] = useState(null);
  const audioRef = useRef(new Audio());

  return (
    <SongContext.Provider
      value={{
        songDetails,
        setSongDetails,
        albumDetails,
        setAlbumDetails,
        playlistDetails,
        setPlaylistDetails,
        isLoadingCard,
        setIsLoadingCard,
        searchQuery,
        setSearchQuery,
        currentPlaying,
        setCurrentPlaying,
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioRef,
        songData,
        setSongData,
        searchTypeData,
        setSearchTypeData,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContext;
