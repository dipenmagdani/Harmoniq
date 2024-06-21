import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SongContext from '../contexts/SongContext';
import NavBar from './NavBar';
import { PiPlayFill } from "react-icons/pi";

export const AlbumDetails = () => {
    const API = "https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app";
    const { id } = useParams();
    const { albumDetails, setAlbumDetails } = useContext(SongContext);

    const fetchSongData = async () => {
        try {
            const response = await fetch(`${API}/album?id=${id}`);
            const { data } = await response.json();
            setAlbumDetails(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSongData();
    }, [id]);

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <NavBar />
            <div className="main-div flex flex-col items-center p-5  ">
                <div className="upper-part p-10 w-full max-w-4xl">
                    <div className="header flex gap-9 rounded-md">
                        {albumDetails?.image && albumDetails.image[2] ? (
                            <img src={albumDetails.image[2].link} alt="" width={275} className='transition-all duration-300 hover:scale-110 rounded-xl' />
                        ) : (
                            <div style={{ width: 275, height: 275, backgroundColor: 'gray' }}></div> // Placeholder for missing image
                        )}
                        <div className="header-content flex flex-col justify-center">
                            <h1 className='text-3xl text-pretty text-ellipsis'>{albumDetails?.name}</h1>
                            <h2 className="mt-2">By {albumDetails?.subtitle}</h2>
                            <h2 className="mt-2">{albumDetails?.songs?.length} Songs - {albumDetails?.play_count?.toLocaleString()} Plays - {formatDuration(albumDetails?.duration)}</h2>
                            <h2 className="mt-2">{albumDetails?.copyright_text}</h2>
                        </div>
                    </div>
                </div>
                <div className="songs-list w-full max-w-4xl flex flex-col justify-center">
                    {albumDetails?.songs?.map((song, index) => (
                        <div key={index} className="song-item flex justify-between items-center p-4 border-b border-gray-700  hover:bg-gray-900 hover:rounded-lg">
                            <div className="flex items-center">
                                <span className="song-number mr-4">{index + 1}</span>
                                <div className="song-info">
                                    <h3 className="song-title">{song.name}</h3>
                                    <p className="song-artist text-sm text-gray-400">
                                        {song?.artist_map?.artists?.map(a_name => a_name.name).join(", ")}
                                    </p>
                                </div>
                            </div>
                            <div className="song-duration">
                                {formatDuration(song.duration)}
                            </div>
                            <div className="playButton cursor-pointer transition-all duration-400 hover:scale-150">
                                <button className=''><PiPlayFill /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlbumDetails;
