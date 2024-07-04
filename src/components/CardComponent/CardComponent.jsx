import React from "react";
import useAudioPlayback from "../../hooks/useAudioPlayback";
import { PiPlayFill, PiPauseFill } from "react-icons/pi";
const CardComponent = ({ data }) => {
  const { currentPlaying, handlePlayback } = useAudioPlayback();
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  console.log(data?.download_url);
  // const isSongType = data?.songs?.type === "song";
  // console.log(isSongType);
  return (
    <>
      <div className="main-content flex-grow flex flex-col p-2">
        <div className="flex flex-col p-10 w-full">
          <div className="upper-part p-5 max-w-4xl">
            <div className="header flex gap-7">
              {data?.image?.[2]?.link ? (
                <img
                  src={
                    data?.image
                      ? Array.isArray(data.image)
                        ? data.image[2]?.link
                        : data.image
                      : ""
                  }
                  alt={data?.name || "Album cover"}
                  width={275}
                  className="transition-all duration-300 hover:scale-110 rounded-xl"
                />
              ) : (
                <div
                  style={{ width: 275, height: 275, backgroundColor: "gray" }}
                ></div>
              )}
              <div className="header-content">
                <h1 className="text-4xl flex items-start">{data?.name}</h1>
                <h2 className="mt-2 ml-0">By {data?.subtitle}</h2>
                <h2 className="mt-2">
                  {data?.list_count} Songs -{" "}
                  {data?.play_count
                    ? `${data.play_count.toLocaleString()} Plays - `
                    : data?.fan_count
                    ? `${data.fan_count.toLocaleString()} Fan Count - `
                    : ""}
                </h2>
                <h2 className="mt-2">{data?.copyright_text}</h2>
              </div>
            </div>
          </div>
          <div className="songs-list w-full">
            {data?.type === "song" ? (
              <div className="song-item flex justify-between p-4 border-2 m-4 rounded-xl border-none w-full hover:bg-neutral-800 hover:text-white hover:border-2">
                <div className="flex items-center flex-grow">
                  <span className="song-number mr-4">1</span>
                  <div className="song-info">
                    <h3 className="song-title">{data?.name}</h3>
                    <p className="song-artist text-sm text-gray-400 overflow-x-auto whitespace-nowrap max-w-full">
                      {data?.artist_map?.artists
                        ?.map((a_name) => a_name.name)
                        .join(", ")
                        .slice(0, 50) + "..."}
                    </p>
                  </div>
                </div>
                <div className="song-duration ml-4 text-right">
                  {formatDuration(data.duration)}
                </div>
                <div className="playButton cursor-pointer transition-all duration-400 hover:scale-150 ml-4 mt-1">
                  <button onClick={() => handlePlayback(data)}>
                    {currentPlaying === data ? <PiPauseFill /> : <PiPlayFill />}
                  </button>
                </div>
              </div>
            ) : (
              data?.songs?.map((song, index) => (
                <div
                  key={index}
                  className="song-item flex justify-between p-4 border-2 m-4 rounded-xl border-none w-full hover:bg-neutral-800 hover:text-white hover:border-2"
                >
                  <div className="flex items-center flex-grow">
                    <span className="song-number mr-4">{index + 1}</span>
                    <div className="song-info">
                      <h3 className="song-title">{song.name}</h3>
                      <p className="song-artist text-sm text-gray-400 overflow-x-auto whitespace-nowrap max-w-full">
                        {song?.artist_map?.artists
                          ?.map((a_name) => a_name.name)
                          .join(", ")
                          .slice(0, 50) + "..."}
                      </p>
                    </div>
                  </div>
                  <div className="song-duration ml-4 text-right">
                    {formatDuration(song.duration)}
                  </div>
                  <div className="playButton cursor-pointer transition-all duration-400 hover:scale-150 ml-4 mt-1">
                    <button onClick={() => handlePlayback(song)}>
                      {currentPlaying === song ? (
                        <PiPauseFill />
                      ) : (
                        <PiPlayFill />
                      )}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
