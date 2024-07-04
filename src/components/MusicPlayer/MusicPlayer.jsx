import React, { useContext } from "react";
import {
  PiPlayFill,
  PiPauseFill,
  PiSkipBackFill,
  PiSkipForwardFill,
} from "react-icons/pi";
import SongContext from "../../contexts/SongContext";

const MusicPlayer = () => {
  const { isPlaying, currentPlaying, handlePlayback } = useContext(SongContext);
  return (
    <div
      className={`main-div fixed bottom-0 left-0 right-0 flex items-center justify-between p-2  border-t-2 transition-all duration-500 bg-gradient-to-r from-gray-950 to-red-500 via-amber-800 to`}
    >
      {/* Album Cover and Song Info */}
      <div className="flex items-center">
        <img
          src={
            isPlaying?.image
              ? isPlaying.image[2].link
              : "https://via.placeholder.com/50"
          }
          alt="Album cover"
          className="w-12 h-12 rounded-md mr-4"
        />
        <div>
          <h4 className="text-white text-sm whitespace-nowrap">
            {isPlaying?.name}
          </h4>
          <div className="overflow-x-scroll max-w-xs scrollbar-thin scrollbar-track-white scrollbar-thumb-black scrollbar-thumb-rounded-full">
            <p className="text-gray-400 text-xs whitespace-nowrap">
              {isPlaying?.artist_map?.artists
                ?.map((a_name) => a_name.name)
                .join(", ")
                .slice(0, 100)}
            </p>
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center flex-grow fixed right-0 left-0">
        <button className="mx-2 text-white hover:text-gray-400 transition-colors">
          <PiSkipBackFill size={24} />
        </button>
        <button
          className="playPause mx-4 text-white hover:text-gray-400 transition-colors"
          onClick={() => handlePlayback()}
        >
          {currentPlaying ? (
            <PiPauseFill size={26} />
          ) : (
            <PiPlayFill size={26} />
          )}
        </button>
        <button className="mx-2 text-white hover:text-gray-400 transition-colors">
          <PiSkipForwardFill size={24} />
        </button>
      </div>

      {/* Time and Volume Controls */}
      <div className="flex items-center">
        <div className="text-white text-xs mr-2">1:23</div>
        <input
          type="range"
          className="mx-2 w-32 h-1 bg-gray-400 rounded-lg cursor-pointer"
        />
        <div className="text-white text-xs ml-2">2:34</div>
        <button className="mx-2 text-white hover:text-gray-400 transition-colors">
          50%
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
