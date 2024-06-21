import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongContext from '../contexts/SongContext';
import NavBar from './NavBar';
import { PiPlayFill } from "react-icons/pi";
import { WaveSpinner } from "react-spinners-kit"; // Ensure you have this spinner or replace with your preferred one

export const PlaylistDetails = () => {
    const API = "https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app";
    const { id } = useParams();
    const { playlistDetails, setPlaylistDetails } = useContext(SongContext);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSongData = async () => {
        try {
            const response = await fetch(`${API}/playlist?id=${id}`);
            const { data } = await response.json();
            setPlaylistDetails(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setPlaylistDetails(null); // Clear previous playlist details

        setTimeout(() => {
            fetchSongData();
        }, 1500)
        window.scrollTo(0, 0); // Scroll to top
        return () => {
            history.push('/'); // Navigate to homepage
        };
    }, [id, history]);

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <NavBar />
            <div className="relative main-div flex flex-col items-center p-5">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <WaveSpinner size={50} />
                    </div>
                )}
                <div className={`flex flex-col items-center p-10 ${isLoading ? 'blur-3xl' : ''}`}>
                    <div className="upper-part p-10 w-full max-w-4xl">
                        <div className="header flex gap-9 rounded-md">
                            {playlistDetails?.image ? (
                                <img src={playlistDetails.image} alt="" width={275} className="transition-all duration-300 hover:scale-110 rounded-xl" />
                            ) : (
                                <div style={{ width: 275, height: 275, backgroundColor: 'gray' }}></div> // Placeholder for missing image
                            )}
                            <div className="header-content flex flex-col justify-center">
                                <h1 className="text-3xl text-pretty text-ellipsis">{playlistDetails?.name}</h1>
                                <h2 className="mt-2">{playlistDetails?.header_desc}</h2>
                                <h2 className="mt-2">{playlistDetails?.songs?.length} Songs - {playlistDetails?.follower_count?.toLocaleString()} Followers - {playlistDetails?.subtitle_desc ? playlistDetails?.subtitle_desc[2] : "NaN"} - {playlistDetails?.subtitle_desc ? playlistDetails?.subtitle_desc[0] : "NaN"}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="songs-list w-full max-w-4xl flex flex-col justify-center">
                        {playlistDetails?.songs?.map((song, index) => (
                            <div key={index} className="song-item flex justify-between items-center p-4 border-b border-gray-700 hover:bg-gray-900 hover:rounded-lg">
                                <div className="flex items-center flex-grow">
                                    <span className="song-number mr-4">{index + 1}</span>
                                    <div className="song-info flex-grow">
                                        <h3 className="song-title">{song.name}</h3>
                                        <p className="song-artist text-sm text-gray-400 overflow-x-auto whitespace-nowrap max-w-full">
                                            {song?.artist_map?.artists?.map(a_name => a_name.name).join(", ").slice(0, 50) + "..."}
                                        </p>
                                    </div>
                                </div>
                                <div className="song-duration ml-4 text-center">
                                    {formatDuration(song.duration)}
                                </div>
                                <div className="playButton cursor-pointer transition-all duration-400 hover:scale-150 ml-4 mt-1">
                                    <button><PiPlayFill /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaylistDetails;
