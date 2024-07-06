import React, { useContext } from "react";
import {
  PiPlayLight,
  PiPauseLight,
  PiShuffle,
  PiRepeat,
  PiPlayPause,
} from "react-icons/pi";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { BiVolumeFull } from "react-icons/bi";
import SongContext from "../../contexts/SongContext";

const MusicPlayer = () => {
  const { playMusic, currentSong, isPlaying } = useContext(SongContext);

  // console.log(currentSong);

  return (
    <div
      className="fixed bottom-0  flex items-center md:w-full rounded-t-xl"
      style={{ background: "#121217" }}
    >
      <div className="w-full h-[70px] transition-all duration-500 rounded-t-xl border-t-4 border-red-700/70">
        <div className="playback-details flex justify-between items-center h-full px-4 ">
          <div className="song-details flex gap-3 justify-start ">
            <div className="bg-gray-50 rounded-full w-9 h-9 shadow-glow shadow-zinc-700 border border-zinc-500">
              <img
                src={currentSong?.image?.[2]?.link}
                alt=""
                className="rounded-full w-9 h-9"
              />
            </div>
            <div className="track-details space-y-1">
              <h1 className="text-sm text-white/90 text-left">
                {currentSong?.name}
              </h1>
              <div className="artist-name overflow-x-auto no-scrollbar w-40">
                <p className="text-xs text-nowrap text-zinc-500/80 ">
                  {currentSong?.artist_map?.artists
                    .map((a_item) => a_item.name)
                    .join()}
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-10 justify-center items-center">
            <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60">
              <PiRepeat />
            </div>
            <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60">
              <RxTrackPrevious />
            </div>
            <button onClick={() => playMusic(currentSong)}>
              <div className="text-2xl rounded-full bg-red-700 hover:bg-red-500/60 w-10 h-10 flex items-center justify-center cursor-pointer">
                {isPlaying && currentSong ? <PiPauseLight /> : <PiPlayLight />}
              </div>
            </button>
            <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60">
              <RxTrackNext />
            </div>
            <div className="text-2xl cursor-pointer text-white/20 hover:text-white/60">
              <PiShuffle />
            </div>
          </div>

          <div className="mx-4 flex items-center ">
            <span className="text-xs text-white/60 mr-2">0:00</span>
            <div className="seekbar flex-grow h-1 bg-red-800/80 rounded w-72">
              <div className="h-full w-1/3 bg-red-600 rounded-full "></div>
            </div>
            <span className="text-xs text-white/60 ml-2">3:45</span>
          </div>

          <div className="flex gap-3 items-center">
            <div className="text-2xl cursor-pointer text-white/80 hover:text-white/60">
              <BiVolumeFull />
            </div>
            <div className="text-2xl cursor-pointer text-white/80 hover:text-white/60">
              <input
                type="range"
                className="text-red-700 appearance-auto"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
