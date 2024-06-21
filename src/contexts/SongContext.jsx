import { createContext, useState, useTransition } from "react";
import React from 'react'

export const SongContext = createContext(null)

export const SongProvider = (props) => {
    const [songDetails, setSongDetails] = useState([])
    const [albumDetails, setAlbumDetails] = useState([])
    const [playlistDetails, setPlaylistDetails] = useState([])
    const [isLoadingCard, setIsLoadingCard] = useState(true);


    return (
        <SongContext.Provider value={{ songDetails, setSongDetails, albumDetails, setAlbumDetails, playlistDetails, setPlaylistDetails, isLoadingCard, setIsLoadingCard }}>
            {props.children}
        </SongContext.Provider>
    )
}


export default SongContext