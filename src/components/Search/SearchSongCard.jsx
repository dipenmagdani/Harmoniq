import React from 'react'
import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import SongContext from '../../contexts/SongContext';
import useLoadingBar from '../../hooks/useLoadingBar';
const SearchSongCard = ({ items }) => {
    const { isLoadingCard, setIsLoadingCard, searchQuery, setSearchQuery } = useContext(SongContext)
    const { LoadingBar } = useLoadingBar()
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
                            <LoadingBar />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main-card h-full my-2 flex relative left-6 space-x-2 transition-all duration-300 hover:scale-110 bg-black px-4 py-7 rounded-lg hover:underline hover:bg-neutral-800 cursor-pointer hover:opacity-80 hover:rounded-full ">
                    <div className="cover-img flex ">
                        <img src={Array.isArray(items.image) ? items.image[2].link : items.image} alt="" className="rounded-full     w-24 h-24  object-cover" />
                    </div>
                    <div className="py-2 text-wrap ">
                        <h1 className="text-white text-wrap font-extrabold truncate ">{
                            items.name.replace(/&quot;/g, "")
                        }</h1>
                        <h2 className="text-slate-50 opacity-50 text-sm text-wrap">{items.artist}</h2>
                    </div>
                </div>
            )}
        </Link>

    );
}

export default SearchSongCard