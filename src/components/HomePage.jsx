import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import SongContext from '../contexts/SongContext';

const HomePage = () => {
    const { songDetails, setSongDetails } = useContext(SongContext);

    const fetchSongData = async () => {
        try {
            const response = await fetch("https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app/modules");
            const { data } = await response.json();

            let { trending } = data;
            let dataFromApi = {
                trending
            };
            setSongDetails(dataFromApi);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSongData();
    }, []);

    return (
        <>
            <NavBar />
        </>
    );
}

export default HomePage;
