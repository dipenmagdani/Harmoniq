import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../HomePage/NavBar';
import SectionSearch from './SectionSearch';
import { useContext } from 'react';
import SongContext from '../../contexts/SongContext';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
const SearchSong = () => {
    const { name } = useParams();
    const { isLoadingCard, setIsLoadingCard } = useContext(SongContext)
    const API = 'https://api-jiosaavn-inky.vercel.app/api'
    const [searchData, setSearchData] = useState(null)

    const fetchData = async () => {
        try {
            setIsLoadingCard(true)
            const response = await fetch(`${API}/search?query=${name}`)
            const { data } = await response.json()
            // console.log(data)
            let { albums, artists, playlists, songs, topQuery } = data;
            let dataFromApi = {
                albums, artists, playlists, songs, topQuery
            }
            setSearchData(dataFromApi)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData(name);
    }, [name])
    console.log(searchData)
    return (
        <>
            <NavBar />
            <div className='song_data'>
                <div className='song_data'>
                    <SectionSearch
                        title={"Top"}
                        data={searchData?.topQuery?.results || []}
                        displayText="false"
                    />
                    <SectionSearch
                        title={"Album"}
                        data={searchData?.albums?.results || []}
                        displayText="false"
                    />
                    <SectionSearch
                        title={"Playlists"}
                        data={searchData?.playlists?.results || []}
                        displayText="false"
                    />
                    <SectionSearch
                        title={"Songs"}
                        data={searchData?.songs?.results || []}
                        displayText="false"
                    />
                </div>
            </div>
            <MusicPlayer />
        </>
    )
}

export default SearchSong