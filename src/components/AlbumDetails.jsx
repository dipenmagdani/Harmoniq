import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SongContext from '../contexts/SongContext'
import { AlbumCard } from './AlbumCard'
import NavBar from './NavBar'

export const AlbumDetails = () => {
    const API = "https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app"
    const { id } = useParams()
    const { albumDetails, setAlbumDetails } = useContext(SongContext)
    const fetchSongData = async () => {
        try {
            const response = await fetch(`${API}/album?id=${id}`);
            const { data } = await response.json();

            let { artist_map, duration, header_desc: title, image, name, song_count, songs, subtitle, year } = data;
            let dataFromApi = {
                artist_map, duration, title, image, name, song_count, songs, subtitle, year
            };
            setAlbumDetails(dataFromApi);


        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchSongData();
        }
    }, [id]);
    console.log(albumDetails)
    return (
        <>
            <NavBar />
            {
                // <div className="main-div flex justify-center items-center p-10">
                //     <div className="upper-part p-10 ">
                //         <div className="header flex justify-center items-start gap-9">
                //             <img src="https://c.saavncdn.com/344/Chandu-Champion-Hindi-2024-20240615171003-500x500.jpg" alt="" width={275} />
                //             <div className="header-content">
                //                 <h1 className='text-4xl text-nowrap'>{albumDetails.name}</h1>

                //             </div>
                //         </div>
                //     </div>
                // </div>

            }


        </>

    )
}
