import { createContext, useState } from "react";
import React from 'react'

export const SongContext = createContext(null)

export const SongProvider = (props) => {
    const [songDetails, setSongDetails] = useState([])
    const [albumDetails, setAlbumDetails] = useState([])


    return (
        <SongContext.Provider value={{ songDetails, setSongDetails, albumDetails, setAlbumDetails }}>
            {props.children}
        </SongContext.Provider>
    )
}


export default SongContext