import React, { createContext, useState, useRef, useEffect } from 'react';

export const SongContext = createContext(null);

export const SongProvider = (props) => {
  const [songDetails, setSongDetails] = useState([]);
  const [albumDetails, setAlbumDetails] = useState([]);
  const [playlistDetails, setPlaylistDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [songData, setSongData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [searchTypeData, setSearchTypeData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [localMusic, setLocalMusic] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const audioRef = useRef(new Audio());

  if (isPlaying) {
    document.title = ` ${currentSong?.name}`;
  } else {
    document.title = 'Harmoniq - Discover The Beat';
  }

  // console.log(localMusic);
  useEffect(() => {
    const audio = audioRef.current;
    const savedSong = JSON.parse(localStorage.getItem('currentSong'));
    if (savedSong) {
      setCurrentSong(savedSong);
      audio.src = savedSong.download_url[4].link;
      if (isPlaying) {
        audio.pause();
        setIsPlaying(!isPlaying);
      }
    }
  }, []);
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      nextSong();
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
    };
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playMusic = async (song) => {
    const audio = audioRef.current;

    if (currentSong && currentSong.id === song.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
        setIsPlaying(true);
      }
    } else {
      audio.pause();
      audio.src = song.download_url[4].link;
      setCurrentSong(song);
      setIsPlaying(true);
      localStorage.setItem('currentSong', JSON.stringify(song));

      await audio.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  };

  const nextSong = () => {
    if (currentSong && songs) {
      const currentIndex = songs.songs.findIndex(
        (song) => song.id === currentSong.id
      );
      let nextIndex;

      if (isShuffled && shuffledSongs.length > 0) {
        const shuffledIndex = shuffledSongs.findIndex(
          (song) => song.id === currentSong.id
        );
        nextIndex = (shuffledIndex + 1) % shuffledSongs.length;
        playMusic(shuffledSongs[nextIndex]);
      } else {
        nextIndex = (currentIndex + 1) % songs.songs.length;
        playMusic(songs.songs[nextIndex]);
      }
    }
  };

  const prevSong = () => {
    if (currentSong && songs) {
      const currentIndex = songs.songs.findIndex(
        (song) => song.id === currentSong.id
      );
      let prevIndex;

      if (isShuffled && shuffledSongs.length > 0) {
        const shuffledIndex = shuffledSongs.findIndex(
          (song) => song.id === currentSong.id
        );
        prevIndex =
          (shuffledIndex - 1 + shuffledSongs.length) % shuffledSongs.length;
        playMusic(shuffledSongs[prevIndex]);
      } else {
        prevIndex =
          (currentIndex - 1 + songs.songs.length) % songs.songs.length;
        playMusic(songs.songs[prevIndex]);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      setIsMuted(!isMuted);
    }
  };

  const repeatSong = () => {
    if (currentSong) {
      playMusic(currentSong);
    } else if (songs?.songs.length > 0) {
      playMusic(songs.songs[0]);
    }
  };

  const shuffleSongs = () => {
    if (!isShuffled) {
      // Shuffle the songs
      const shuffled = [...songs.songs].sort(() => Math.random() - 0.5);
      setShuffledSongs(shuffled);
      setIsShuffled(true);
    } else {
      // Unshuffle the songs
      setShuffledSongs([]);
      setIsShuffled(false);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <SongContext.Provider
      value={{
        songDetails,
        setSongDetails,
        albumDetails,
        setAlbumDetails,
        playlistDetails,
        setPlaylistDetails,
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
        songs,
        isMuted,
        setIsMuted,
        toggleMute,
        setSongs,
        playMusic,
        nextSong,
        prevSong,
        repeatSong,
        shuffleSongs,
        isShuffled,
        setIsShuffled,
        shuffledSongs,
        currentTime,
        duration,
        audioRef,
        volume,
        setVolume,
        handleVolumeChange,
        isFullScreen,
        setIsFullScreen,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContext;
