import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import SongContext from "../../contexts/SongContext";
import Section from "./Section";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
const HomePage = () => {
  const { songDetails, setSongDetails, isLoadingCard } =
    useContext(SongContext);
  const modules = "modules";
  const fetchSongData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_HARMONIQ_API_KEY}/${modules}`
      );
      const { data } = await response.json();

      let {
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
      } = data;
      let dataFromApi = {
        trending,
        albums,
        charts,
        playlists,
        radio,
        discover,
        artists,
        city,
        mixes,
        promo0,
        promo1,
        promo6,
        promo7,
        promo9,
        promo2,
        promo4,
        promo5,
        promo3,
        promo8,
        promo10,
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
      <MusicPlayer />

      <div className="song_data">
        <div className="song_data">
          {songDetails?.trending?.data?.length > 0 && (
            <Section
              title={songDetails.trending.title}
              data={songDetails.trending.data}
            />
          )}

          {songDetails?.albums?.data?.length > 0 && (
            <Section
              title={songDetails.albums.title}
              data={songDetails.albums.data}
            />
          )}

          {songDetails?.charts?.data?.length > 0 && (
            <Section
              title={songDetails.charts.title}
              data={songDetails.charts.data}
            />
          )}

          {songDetails?.playlists?.data?.length > 0 && (
            <Section
              title={songDetails.playlists.title}
              data={songDetails.playlists.data}
            />
          )}

          {songDetails?.city?.data?.length > 0 && (
            <Section
              title={songDetails.city.title.slice(0, 20)}
              data={songDetails.city.data}
            />
          )}

          {songDetails?.promo0?.data?.length > 0 && (
            <Section
              title={songDetails.promo0.title.slice(0, 20)}
              data={songDetails.promo0.data}
            />
          )}

          {songDetails?.promo1?.data?.length > 0 && (
            <Section
              title={songDetails.promo1.title.slice(0, 20)}
              data={songDetails.promo1.data}
            />
          )}

          {songDetails?.promo2?.data?.length > 0 && (
            <Section
              title={songDetails.promo2.title.slice(0, 20)}
              data={songDetails.promo2.data}
            />
          )}

          {songDetails?.promo3?.data?.length > 0 && (
            <Section
              title={songDetails.promo3.title.slice(0, 20)}
              data={songDetails.promo3.data}
            />
          )}

          {songDetails?.promo4?.data?.length > 0 && (
            <Section
              title={songDetails.promo4.title.slice(0, 20)}
              data={songDetails.promo4.data}
            />
          )}

          {songDetails?.promo5?.data?.length > 0 && (
            <Section
              title={songDetails.promo5.title.slice(0, 20)}
              data={songDetails.promo5.data}
            />
          )}

          {songDetails?.promo8?.data?.length > 0 && (
            <Section
              title={songDetails.promo8.title.slice(0, 20)}
              data={songDetails.promo8.data}
            />
          )}
          {/* 
                    {songDetails?.promo10?.data?.length > 0 && (
                        <Section
                            title={songDetails.promo10.title.slice(0, 20)}
                            data={songDetails.promo10.data}
                        />
                    )} */}

          {songDetails?.promo6?.data?.length > 0 && (
            <Section
              title={songDetails.promo6.title.slice(0, 20)}
              data={songDetails.promo6.data}
            />
          )}

          {/* {songDetails?.promo7?.data?.length > 0 && (
                        <Section
                            title={songDetails.promo7.title.slice(0, 20)}
                            data={songDetails.promo7.data}
                        />
                    )} */}

          {songDetails?.promo9?.data?.length > 0 && (
            <Section
              title={songDetails.promo9.title.slice(0, 20)}
              data={songDetails.promo9.data}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
