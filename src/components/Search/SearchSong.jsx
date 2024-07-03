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
    const API = import.meta.env.VITE_HARMONIQ_API_KEY;
    const [searchData, setSearchData] = useState(null)

    const fetchData = async () => {
        try {
            setIsLoadingCard(true)
            const response = await fetch(`${API}/search?q=${name}`)
            const { data } = await response.json()
            // console.log(data)
            let { albums, artists, playlists, songs, top_query: topQuery, shows, episodes } = data;
            let dataFromApi = {
                albums, artists, playlists, songs, topQuery, shows, episodes
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
            <div className='song_data h-72'>
                <div className='song_data h-72 '>
                    {
                        searchData?.topQuery?.data?.length > 0 && (
                            <SectionSearch
                                title={"Top"}
                                data={searchData?.topQuery?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.album?.data?.length > 0 && (
                            <SectionSearch
                                title={"Albums"}
                                data={searchData?.albums?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.playlists?.data?.length > 0 && (
                            <SectionSearch
                                title={"Playlists"}
                                data={searchData?.playlists?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.songs?.data?.length > 0 && (
                            <SectionSearch
                                title={"Songs"}
                                data={searchData?.songs?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.artists?.data?.length > 0 && (
                            <SectionSearch
                                title={"Artists"}
                                data={searchData?.artists?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.shows?.data?.length > 0 && (
                            <SectionSearch
                                title={"Shows"}
                                data={searchData?.shows?.data || []}
                            />
                        )
                    }
                    {
                        searchData?.episodes?.data?.length > 0 && (
                            <SectionSearch
                                title={"Episodes"}
                                data={searchData?.episodes?.data || []}
                            />
                        )
                    }
                </div>
            </div>
            <MusicPlayer />
        </>
    )
}

export default SearchSong