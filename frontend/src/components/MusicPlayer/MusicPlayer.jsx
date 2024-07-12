import React, { useContext, useEffect } from 'react';
import {
  PiPlayLight,
  PiPauseLight,
  PiShuffle,
  PiShuffleSimpleBold,
} from 'react-icons/pi';
import { BiSolidVolumeFull, BiSolidVolumeMute } from 'react-icons/bi';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import SongContext from '../../contexts/SongContext';
import { useNavigate } from 'react-router-dom';

const MusicPlayer = () => {
  const {
    playMusic,
    currentSong,
    setCurrentSong,
    isPlaying,
    nextSong,
    prevSong,
    toggleMute,
    isMuted,
    repeatSong,
    shuffleSongs,
    isShuffled,
    currentTime,
    duration,
    audioRef,
    volume,
    handleVolumeChange,
    songs,
    isFullScreen,
    setIsFullScreen,
    setCurrentTime,
  } = useContext(SongContext);
  const navigate = useNavigate();

  const handleSeek = (event) => {
    const newTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // const toggleFullScreen = () => {
  //   if (isPlaying) {
  //     if (document.fullscreenElement) {
  //       document.exitFullscreen();
  //       setIsFullScreen(!isFullScreen);
  //     } else {
  //       document.documentElement.requestFullscreen();
  //       navigate(
  //         `${currentSong?.origin === 'none' ? 'song' : songs?.type}/${
  //           currentSong?.origin === 'none' ? currentSong?.id : songs?.id
  //         }`
  //       );
  //     }
  //   }
  //   setIsFullScreen(!isFullScreen);
  // };
  return (
    <>
      <div
        className={`fixed bottom-0 w-full z-50 flex items-center rounded-t-xl bg-[#121217] border-t-4 border-red-800 ${
          isPlaying ? '' : 'transition-all duration-500 ease-in-out'
        }`}
      >
        <div className="w-full h-[70px] transition-all duration-500 rounded-t-xl">
          <div className="playback-details flex justify-between items-center h-full px-4">
            <div className="song-details flex gap-3 items-center">
              <div className="bg-gray-50 w-16 max-sm:w-10 max-lg:w-10 rounded-full shadow-glow shadow-zinc-700 border border-zinc-500">
                <img
                  src={currentSong?.image?.[2]?.link}
                  alt={currentSong?.name}
                  className=" rounded-full"
                />
              </div>
              <div className="track-details space-y-1 lg:w-full">
                <h1 className="text-sm text-white/90 text-left">
                  {currentSong?.name}
                </h1>
                <div className="artist-name overflow-x-auto no-scrollbar w-40">
                  <p className="text-xs text-nowrap text-zinc-500/80">
                    {currentSong?.artist_map?.artists
                      .map((a_item) => a_item.name)
                      .join()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 relative max-sm:left-14 justify-center items-center">
              {/* <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60 hidden md:block">
                <PiRepeat onClick={repeatSong} />
              </div> */}
              <button onClick={() => prevSong()}>
                <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60">
                  <RxTrackPrevious />
                </div>
              </button>
              <button onClick={() => currentSong && playMusic(currentSong)}>
                <div className="text-2xl rounded-full bg-red-700 hover:bg-red-500/60 w-10 h-10 flex items-center justify-center cursor-pointer">
                  {isPlaying ? <PiPauseLight /> : <PiPlayLight />}
                </div>
              </button>
              <button onClick={() => nextSong()}>
                <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60 ">
                  <RxTrackNext />
                </div>
              </button>
              <button onClick={() => shuffleSongs()}>
                <div
                  className={`text-2xl cursor-pointer  hover:text-white/60 ${
                    isShuffled ? 'text-red-700 ' : 'text-white/20'
                  }`}
                >
                  {isShuffled ? <PiShuffleSimpleBold /> : <PiShuffle />}
                </div>
              </button>
            </div>
            <div className=" lg:flex gap-3 items-center ">
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm max-sm:hidden">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  className="lg:w-72 max-sm:hidden h-1 bg-red-800 rounded-lg appearance-none cursor-pointer accent-red-800 progress"
                  min={0}
                  max={100}
                  step="0.1"
                  value={((currentTime / duration) * 100).toString()}
                  onChange={handleSeek}
                />
                <span className="text-white text-sm max-sm:hidden">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
            {/* <button onClick={() => toggleFullScreen()}>
              <div className="full-screen cursor-pointer text-red-700 hover:text-white/50">
                {!isFullScreen ? (
                  <AiOutlineFullscreen size={25} />
                ) : (
                  <AiOutlineFullscreenExit size={25} />
                )}
              </div>
            </button> */}
            <div className="hidden lg:flex gap-3 items-center">
              <button onClick={() => toggleMute()}>
                <div className="text-2xl cursor-pointer text-red-700 hover:text-white/60 transition-all duration-400 ease-in-out">
                  {isMuted || volume == 0 ? (
                    <BiSolidVolumeFull />
                  ) : (
                    <BiSolidVolumeMute />
                  )}
                </div>
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
