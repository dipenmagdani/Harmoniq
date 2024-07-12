import React, { useContext } from 'react';
import { PiPlayFill, PiWaveformBold } from 'react-icons/pi';
import SongContext from '../../contexts/SongContext';

const CardComponent = ({ data }) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const { currentSong, playMusic, isPlaying, isFullScreen, songs } =
    useContext(SongContext);
  return (
    <>
      <div className="main-content relative right-14 mb-28  max-sm:mr-40 max-sm:w-[550px]">
        <div className={` flex flex-col w-full `}>
          <div className="upper-part p-5  ">
            <div className="header flex gap-7 max-sm:flex-col ">
              {data?.image?.[2]?.link ? (
                <img
                  src={
                    data?.image
                      ? Array.isArray(data.image)
                        ? data.image[2]?.link
                        : data.image
                      : ''
                  }
                  alt={data?.name || 'Album cover'}
                  width={275}
                  className="transition-all duration-300 hover:scale-90 rounded-xl max-sm:w-44 "
                />
              ) : (
                <div
                  style={{ width: 275, height: 275, backgroundColor: 'gray' }}
                ></div>
              )}
              <div className="header-content flex flex-col">
                <h1 className="text-4xl flex items-start max-sm:text-xl">
                  {data?.name}
                </h1>
                <h2 className="mt-2 ml-0">By {data?.subtitle}</h2>
                <h2 className="mt-2">
                  {data?.songs?.length > 1
                    ? `${data?.songs?.length} Songs - `
                    : `1 Song - `}
                  {data?.play_count
                    ? `${data.play_count.toLocaleString()} Plays `
                    : data?.fan_count
                    ? `${data.fan_count.toLocaleString()} Fan Count  `
                    : ''}
                </h2>
                <h2 className="mt-2">{data?.copyright_text}</h2>

                <button
                  className={`text-xl mt-2 rounded-lg max-sm:h-10 h-12 border-[3px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-24 flex items-center justify-center transition-all duration-500 ease-in-out ${
                    isPlaying && currentSong?.id
                      ? 'bg-black/50 text-white/50'
                      : 'text-red-700/80'
                  }`}
                  onClick={() =>
                    playMusic(data?.type === 'song' ? data : data?.songs[0])
                  }
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            </div>
          </div>
          <div
            className="songs-list bg-black/20 rounded-xl p-5 border-2  border-zinc-800/80 max-sm:w-[380px] flex"
            style={{ marginBottom: '100px' }}
          >
            <div className="overflow-y-auto transition-all duration-500 ease-in-out w-[850px] p-3 flex text-center justify-center">
              {data?.type === 'song' ? (
                <div
                  key="1"
                  className={`w-[650px] border-2 p-3 space-x-10 border-t-red-700/80  rounded-xl border-zinc-800/50 flex items-center bg-black/20 transition-all duration-500 ease-in-out ${
                    currentSong?.id === data?.id && isPlaying
                      ? 'scale-110 text-white/80 shadow-xl'
                      : 'text-white/30'
                  }`}
                >
                  <div className="w-5 text-xl">{1}</div>
                  <button onClick={() => playMusic(data)}>
                    <div className="icon-details cursor-pointer">
                      <div className="text-red-700 bg-black/40 hover:text-white hover:bg-red-800 w-9 h-9 rounded-full flex items-center justify-center">
                        {currentSong?.id === data?.id && isPlaying ? (
                          <PiWaveformBold size={20} className="animate-pulse" />
                        ) : (
                          <PiPlayFill size={20} />
                        )}
                      </div>
                    </div>
                  </button>
                  <div className="song-name overflow-x-auto text-nowrap no-scrollbar overflow-y-hidden w-36">
                    <h1 className="leading-none">{data?.name}</h1>
                  </div>
                  <div className="artist-name text-nowrap overflow-x-auto overflow-y-hidden no-scrollbar w-96">
                    <h1 className="leading-none">
                      {data?.artist_map?.artists
                        ?.map((a_name) => a_name.name)
                        .join(', ')}
                    </h1>
                  </div>
                  <div className="artist-name duration">
                    <h1 className="">{formatDuration(data.duration)}</h1>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 z-40 transition-all duration-500 ease-in-out h-auto ">
                  {data?.songs?.map((song, index) => (
                    <div
                      key={index}
                      className={` border-2 p-3 space-x-10 border-t-red-700/80 w-[700px] rounded-xl border-zinc-800/50 flex items-center bg-black/20 transition-all   max-sm:w-[350px] max-sm:flex  max-sm:flex-grow duration-500 ease-in-out  ${
                        currentSong?.id === song?.id && isPlaying
                          ? 'scale-110 max-sm:scale-90 text-white/80 shadow-glow shadow-black'
                          : 'text-white/30'
                      }`}
                    >
                      <div className="w-5 text-xl max-sm:hidden ">
                        {index + 1}
                      </div>
                      <button onClick={() => playMusic(song)}>
                        <div className="icon-details cursor-pointer  relative max-sm:right-10 ">
                          <div className="text-red-700 bg-zinc-800/60 hover:text-white  hover:bg-red-800 w-9 h-9 rounded-full flex items-center justify-center">
                            {isPlaying && currentSong?.id === song?.id ? (
                              <PiWaveformBold
                                size={20}
                                className="animate-pulse"
                              />
                            ) : (
                              <PiPlayFill size={20} />
                            )}
                          </div>
                        </div>
                      </button>
                      <div className="song-name overflow-x-auto text-nowrap no-scrollbar overflow-y-hidden w-36 relative max-sm:right-10 max-sm:w-56 flex">
                        <h1 className="leading-none max-sm:text-xs ">
                          {song?.name}
                        </h1>
                      </div>
                      <div className="artist-name text-nowrap overflow-x-auto overflow-y-hidden no-scrollbar w-96 max-sm:hidden">
                        <h1 className="leading-none">
                          {song?.artist_map?.artists
                            ?.map((a_name) => a_name.name)
                            .join(', ')}
                        </h1>
                      </div>
                      <div className="artist-name duration">
                        <h1 className="">{formatDuration(song.duration)}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
