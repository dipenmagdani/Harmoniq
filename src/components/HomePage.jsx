import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import SongContext from '../contexts/SongContext';
import Section from './Section'

const HomePage = () => {
    const { songDetails, setSongDetails } = useContext(SongContext);

    const fetchSongData = async () => {
        try {
            const response = await fetch("https://jiosaavn-api-latest-osvc5k0j6-dipenmagdanis-projects.vercel.app/modules");
            const { data } = await response.json();

            let { trending, albums, charts, playlists, radio, discover, artist_recos: artists, city_mod: city, mixes, promo1, promo2, promo4, promo5, promo8, promo11, promo12, promo13, promo14 } = data;
            let dataFromApi = {
                trending, albums, charts, playlists, radio, discover, artists, city, mixes, promo1, promo2, promo4, promo5, promo8, promo11, promo12, promo13, promo14
            };
            setSongDetails(dataFromApi);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSongData();
    }, []);

    // console.log(songDetails)
    return (
        <>
            <NavBar />
            <div className='song_data'>
                <div className='song_data'>
                    <Section
                        title={songDetails?.trending?.title}
                        data={songDetails?.trending?.data || []}
                        displayText="false"
                    />
                    <Section
                        title={songDetails?.albums?.title}
                        data={songDetails?.albums?.data || []}
                        displayText="false"
                    />
                    <Section
                        title={songDetails?.charts?.title}
                        data={songDetails?.charts?.data || []}
                        displayText="false"
                    />
                    <Section
                        title={songDetails?.playlists?.title}
                        data={songDetails?.playlists?.data || []}
                        displayText="false"
                    />

                    <Section
                        title={songDetails?.city?.title.slice(0, 20)}
                        data={songDetails?.city?.data || []}
                        displayText="true"
                    />

                    <Section
                        title={songDetails?.promo1?.title.slice(0, 20)}
                        data={songDetails?.promo1?.data || []}
                        displayText="true"
                    />
                    <Section
                        title={songDetails?.promo2?.title.slice(0, 20)}
                        data={songDetails?.promo2?.data || []}
                        displayText="true"
                    />
                    <Section
                        title={songDetails?.promo4?.title.slice(0, 20)}
                        data={songDetails?.promo4?.data || []}
                        displayText="true"
                    />
                    <Section
                        title={songDetails?.promo5?.title.slice(0, 20)}
                        data={songDetails?.promo5?.data || []}
                        displayText="true"
                    />

                    <Section
                        title={songDetails?.promo11?.title.slice(0, 20)}
                        data={songDetails?.promo11?.data || []}
                        displayText="true"
                    />

                    <Section
                        title={songDetails?.promo13?.title.slice(0, 20)}
                        data={songDetails?.promo13?.data || []}
                        displayText="true"
                    />
                    <Section
                        title={songDetails?.promo14?.title.slice(0, 20)}
                        data={songDetails?.promo14?.data || []}
                        displayText="true"
                    />
                </div>
            </div>

        </>
    );
}

export default HomePage;
