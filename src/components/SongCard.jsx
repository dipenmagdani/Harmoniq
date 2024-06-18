import React from 'react';

const SongCard = ({ songData }) => {
    const title = "Sleeping Music For Sleep, Relaxation and Binaural Beats Sleep Music";
    const artistName = "Sleeping Music Experience, Deep Sleep Music Collective, Sleeping Music";

    return (
        <div className="main-card w-52 h-72 bg-black p-2 rounded-lg border-4 border-zinc-500 overflow-hidden">
            <div className="cover-img">
                <img src="./music.jpg" alt="" className="rounded-md w-full h-48 object-cover" />
            </div>
            <div className="p-2">
                <h1 className="text-white text-sm truncate">{songData.name}</h1>
                <h2 className="text-white text-xs truncate">{artistName}</h2>
            </div>
        </div>
    );
}

export default SongCard;
