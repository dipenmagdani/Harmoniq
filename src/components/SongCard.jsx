import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { WaveSpinner } from "react-spinners-kit"; // Ensure you have this spinner or replace with your preferred one
import { useContext } from 'react';
import SongContext from '../contexts/SongContext';
const SongCard = ({ items, displayText }) => {
    const { isLoadingCard, setIsLoadingCard } = useContext(SongContext)
    useEffect(() => {
        // Simulating loading delay with setTimeout
        setTimeout(() => {
            setIsLoadingCard(false);
        }, 2000); // Adjust the timeout value as needed or remove this for actual fetching

    }, [items]); // Only runs once on mount

    const playlist_id = items.id;
    const type = items.type;
    const albumId = type === 'song' ? items.album_id : items.id;

    return (

        <Link className="nav-link" to={
            type === "playlist" ? `/playlist/${playlist_id}` : `/album/${albumId}`
        }>
            {isLoadingCard ? (
                // Loading indicator while fetching data

                <div className="main-card w-52 h-64 bg-black pl-2 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-center w-44 h-40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <WaveSpinner size={50} />
                        </div>
                    </div>
                </div>
            ) : (
                // Display the content once loaded
                <div className="main-card w-52 h-64 bg-black pl-2 rounded-lg overflow-hidden hover:bg-neutral-800 cursor-pointer hover:opacity-80 hover:rounded-xl">
                    <div className="cover-img flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <img src={Array.isArray(items.image) ? items.image[2].link : items.image} alt="" className="rounded-md w-44 h-40 object-cover" />
                    </div>
                    <div className="p-2 w-56 h-80">
                        <h1 className="text-white font-extrabold text-md text-pretty">{items.name.slice(0, 1).toUpperCase()}{items.name.slice(1)}</h1>
                        <h2 className="text-slate-50 opacity-50 text-sm text-wrap">{items.subtitle.length > 30 ? items.subtitle.slice(0, 25) + "..." : items.subtitle.slice(0, 30)}</h2>
                    </div>
                </div>
            )}
        </Link>

    );
}

export default SongCard;
