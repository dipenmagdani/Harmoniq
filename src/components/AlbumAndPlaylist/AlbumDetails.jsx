import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongContext from '../../contexts/SongContext';
import NavBar from '../HomePage/NavBar';
import { PiPlayFill, PiPause, PiPauseFill } from "react-icons/pi";
import { WaveSpinner } from "react-spinners-kit"; // Ensure you have this spinner or replace with your preferred one
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

export const AlbumDetails = () => {
    const API = "https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app";
    const { id } = useParams();
    const { albumDetails, setAlbumDetails } = useContext(SongContext);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPlaying, setCurrentPlaying] = useState(null)
    const [isPlaying, setIsPlaying] = useState(null)
    // let navigate = useNavigate();

    const fetchSongData = async () => {
        try {
            const response = await fetch(`${API}/album?id=${id}`);
            const { data } = await response.json();
            setAlbumDetails(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // 

        setTimeout(() => {
            fetchSongData();
        }, 1500);
        window.scrollTo(0, 0); // Scroll to top
    }, [id]);

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handlePlayback = (song, id) => {
        let music = new Audio(song?.download_url[4]?.link)
        if (currentPlaying === song) {
            setCurrentPlaying(null);
            music.pause()
        }
        else {
            setCurrentPlaying(song)
            music.play()
        }
    }
    return (
        <>
            <NavBar />
            <MusicPlayer />

            <div className="main-container flex pt-2 ml-64">  {/* Adjusted for flex layout and added margin-left */}
                <div className="main-content flex-grow flex flex-col p-2">  {/* Main content takes the remaining space */}
                    {isLoading && (
                        <div className="flex">
                            <WaveSpinner size={50} />
                        </div>
                    )}
                    <div className={`flex flex-col p-10 w-full ${isLoading ? 'blur-3xl' : ''}`}>
                        <>
                            <div className="upper-part p-5 max-w-4xl">
                                <div className="header flex gap-7">
                                    {albumDetails?.image?.[2]?.link ? (
                                        <img
                                            src={albumDetails.image[2].link}
                                            alt={albumDetails?.name || "Album cover"}
                                            width={275}
                                            className="transition-all duration-300 hover:scale-110 rounded-xl"
                                        />
                                    ) : (
                                        <div style={{ width: 275, height: 275, backgroundColor: 'gray' }}></div>
                                    )}
                                    <div className="header-content">
                                        <h1 className="text-4xl flex items-start">{albumDetails?.name}</h1>
                                        <h2 className="mt-2 ml-0">By {albumDetails?.subtitle}</h2>
                                        <h2 className="mt-2">
                                            {albumDetails?.songs?.length} Songs - {albumDetails?.play_count?.toLocaleString()} Plays - {formatDuration(albumDetails?.duration)}
                                        </h2>
                                        <h2 className="mt-2">{albumDetails?.copyright_text}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="songs-list w-full">  {/* Maintains full width */}
                                {albumDetails?.songs?.map((song, index) => (
                                    <div key={index} className="song-item flex justify-between p-4 border-2 m-4 rounded-xl border-none w-full hover:bg-neutral-800   hover:text-white     hover:border-2">
                                        <div className="flex items-center flex-grow">
                                            <span className="song-number mr-4">{index + 1}</span>
                                            <div className="song-info">
                                                <h3 className="song-title">{song.name}</h3>
                                                <p className="song-artist text-sm text-gray-400 overflow-x-auto whitespace-nowrap max-w-full ">
                                                    {song?.artist_map?.artists?.map(a_name => a_name.name).join(", ").slice(0, 50) + "..."}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="song-duration ml-4 text-right">
                                            {formatDuration(song.duration)}
                                        </div>
                                        <div className="playButton cursor-pointer transition-all duration-400 hover:scale-150 ml-4 mt-1">
                                            <button onClick={() => handlePlayback(song)}>{currentPlaying ? <PiPauseFill /> : <PiPlayFill />} </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlbumDetails;
