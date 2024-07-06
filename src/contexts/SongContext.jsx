import { createContext, useState, useRef, useEffect } from "react";
import React from "react";
import { Toaster, toast } from "sonner";

export const SongContext = createContext(null);

export const SongProvider = (props) => {
  const [songDetails, setSongDetails] = useState([]);
  const [albumDetails, setAlbumDetails] = useState([]);
  const [playlistDetails, setPlaylistDetails] = useState([]);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [songData, setSongData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [searchTypeData, setSearchTypeData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  <Toaster richColors position="top-left" />;

  const audioRef = useRef(null);
  const playMusic = async (song, data) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    // else {
    //   toast("First Play a Song");
    // }
    // else {
    //   await audioRef.current.play();
    // }
    if (currentSong && currentSong?.id === song?.id) {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef.current.pause();
      } else {
        setIsPlaying(true);
        await audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const music = new Audio(song?.download_url?.[4]?.link);
      audioRef.current = music;
      setCurrentSong(song);
      setIsPlaying(true);
      await music.play();
    }
  };

  useEffect(() => {
    currentSong;
  }, [currentSong]);
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
        songData,
        setSongData,
        searchTypeData,
        setSearchTypeData,
        searchData,
        setSearchData,
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        playMusic,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContext;
