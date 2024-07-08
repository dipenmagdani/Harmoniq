import React, { useContext } from 'react';
import SongContext from '../../contexts/SongContext';
import Section from './Section';
import useApi from '../../hooks/useAPI';
const HomePage = () => {
  const { songDetails, setSongDetails } = useContext(SongContext);

  const {} = useApi('/api/home', null, setSongDetails);

  const {
    trending,
    albums,
    charts,
    playlists,
    radio,
    discover,
    artist_recos: artists,
    city_mod: city,
    mixes,
    promo0,
    promo1,
    promo2,
    promo3,
    promo4,
    promo5,
    promo6,
    promo7,
    promo8,
    promo9,
    promo10,
  } = songDetails;

  return (
    <>
      <div className="song_data mx-3 my-10 ">
        <div className="song_data ">
          {trending?.data?.length > 0 && (
            <Section title={trending.title} data={trending.data} />
          )}
          {albums?.data?.length > 0 && (
            <Section title={albums.title} data={albums.data} />
          )}
          {charts?.data?.length > 0 && (
            <Section title={charts.title} data={charts.data} />
          )}
          {playlists?.data?.length > 0 && (
            <Section title={playlists.title} data={playlists.data} />
          )}

          {/* <Section title={city.title.slice(0, 20)} data={city.data} /> */}

          {promo0?.data?.length > 0 && (
            <Section title={promo0.title.slice(0, 20)} data={promo0.data} />
          )}
          {promo1?.data?.length > 0 && (
            <Section title={promo1.title.slice(0, 20)} data={promo1.data} />
          )}
          {/* {promo2?.data?.length > 0 && (
            <Section title={promo2.title.slice(0, 20)} data={promo2.data} />
          )} */}
          {promo3?.data?.length > 0 && (
            <Section title={promo3.title.slice(0, 20)} data={promo3.data} />
          )}
          {/* {promo4?.data?.length > 0 && (
            <Section title={promo4.title.slice(0, 20)} data={promo4.data} />
          )} */}
          {promo5?.data?.length > 0 && (
            <Section title={promo5.title.slice(0, 20)} data={promo5.data} />
          )}
          {promo8?.data?.length > 0 && (
            <Section title={promo8.title.slice(0, 20)} data={promo8.data} />
          )}
          {promo6?.data?.length > 0 && (
            <Section title={promo6.title.slice(0, 20)} data={promo6.data} />
          )}
          {promo9?.data?.length > 0 && (
            <Section title={promo9.title.slice(0, 20)} data={promo9.data} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
