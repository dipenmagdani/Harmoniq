import React, { useContext } from 'react';
import { PiPlayFill, PiWaveformBold } from 'react-icons/pi';
import SongContext from '../../contexts/SongContext';

const CardComponent = ({ data }) => {
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const { currentSong, playMusic, isPlaying } = useContext(SongContext);
  return (
    <>
      <div className="main-content p-2">
        <div className="flex flex-col items-center w-full">
          <div className="upper-part p-5 max-w-4xl">
            <div className="header flex gap-7">
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
                  className="transition-all duration-300 hover:scale-90 rounded-xl"
                />
              ) : (
                <div
                  style={{ width: 275, height: 275, backgroundColor: 'gray' }}
                ></div>
              )}
              <div className="header-content">
                <h1 className="text-4xl flex items-start">{data?.name}</h1>
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
                  className={`text-2xl mt-2 rounded-lg h-12 border-[3px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-40 flex items-center justify-center transition-all duration-500 ease-in-out ${
                    isPlaying ? 'bg-black/50 text-white/50' : 'text-red-700/80'
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
            className="songs-list  bg-black/20 rounded-xl p-5"
            style={{ marginBottom: '100px' }}
          >
            <div className="overflow-y-auto max-h-[500px] transition-all duration-500 ease-in-out">
              {data?.type === 'song' ? (
                <div
                  key="1"
                  className={`w-full border-2 p-3 space-x-10 border-t-red-700/80 rounded-xl border-zinc-800/50 flex items-center bg-black/20 transition-all duration-500 ease-in-out ${
                    currentSong === data && isPlaying
                      ? 'scale-90 text-white/80 shadow-xl'
                      : 'text-white/30'
                  }`}
                >
                  <div className="w-5 text-xl">{1}</div>
                  <button onClick={() => playMusic(data)}>
                    <div className="icon-details cursor-pointer">
                      <div className="text-red-700 bg-black/40 hover:text-white hover:bg-red-800 w-9 h-9 rounded-full flex items-center justify-center">
                        {currentSong === data && isPlaying ? (
                          <PiWaveformBold size={20} />
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
                <div className="flex flex-col space-y-5 z-40 transition-all duration-500 ease-in-out">
                  {data?.songs?.map((song, index) => (
                    <div
                      key={index}
                      className={`w-full border-2 p-3  space-x-10 border-t-red-700/80 rounded-xl border-zinc-800/50 flex items-center bg-black/20 transition-all duration-500 ease-in-out ${
                        currentSong === song && isPlaying
                          ? 'scale-90  text-white/80 shadow-xl'
                          : 'text-white/30'
                      }`}
                    >
                      <div className="w-5 text-xl">{index + 1}</div>
                      <button onClick={() => playMusic(song)}>
                        <div className="icon-details cursor-pointer">
                          <div className="text-red-700 bg-black/40 hover:text-white hover:bg-red-800 w-9 h-9 rounded-full flex items-center justify-center">
                            {currentSong === song && isPlaying ? (
                              <PiWaveformBold size={20} />
                            ) : (
                              <PiPlayFill size={20} />
                            )}
                          </div>
                        </div>
                      </button>
                      <div className="song-name overflow-x-auto text-nowrap no-scrollbar overflow-y-hidden w-36">
                        <h1 className="leading-none">{song?.name}</h1>
                      </div>
                      <div className="artist-name text-nowrap overflow-x-auto overflow-y-hidden no-scrollbar w-96">
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
