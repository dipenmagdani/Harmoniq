import { createContext, useState } from "react";
import React from 'react'

export const SongContext = createContext(null)

export const SongProvider = (props) => {
    const [songDetails, setSongDetails] = useState()
    return (
        <SongContext.Provider value={{ songDetails, setSongDetails }}>
            {props.children}
        </SongContext.Provider>
    )
}


export default SongContext