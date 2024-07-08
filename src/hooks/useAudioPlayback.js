import { useCallback, useContext } from 'react';
import SongContext from '../contexts/SongContext';
const useAudioPlayback = () => {
  const { currentPlaying, setCurrentPlaying, setIsPlaying, audioRef } =
    useContext(SongContext);
  const handlePlayback = useCallback(
    (song) => {
      if (currentPlaying === song) {
        audioRef.current.pause();
        setCurrentPlaying(null);
        setIsPlaying(song);
      } else {
        if (currentPlaying) {
          audioRef.current.pause();
        }
        audioRef.current.src = song.download_url[4].link;
        audioRef.current.play();
        setCurrentPlaying(song);
        setIsPlaying(song);
      }
    },
    [currentPlaying, setCurrentPlaying, setIsPlaying]
  );

  return {
    currentPlaying,
    handlePlayback,
  };
};

export default useAudioPlayback;
