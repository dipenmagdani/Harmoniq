import React, { useContext, useEffect } from "react";
import NavBar from "./NavBar";
import SongContext from "../../contexts/SongContext";
const Section = React.lazy(() => import("./Section"));
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import useApi from "../../hooks/useAPI";
const HomePage = () => {
  const { songDetails, setSongDetails } = useContext(SongContext);

  // Use the custom hook to fetch data and set song details
  const {} = useApi("/api/home", null, setSongDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!songDetails) {
  //   return <div>No data available</div>;
  // }

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
      <NavBar />
      <MusicPlayer />
      <div className="song_data mx-3 ">
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
          {city?.data?.length > 0 && (
            <Section title={city.title.slice(0, 20)} data={city.data} />
          )}
          {promo0?.data?.length > 0 && (
            <Section title={promo0.title.slice(0, 20)} data={promo0.data} />
          )}
          {promo1?.data?.length > 0 && (
            <Section title={promo1.title.slice(0, 20)} data={promo1.data} />
          )}
          {promo2?.data?.length > 0 && (
            <Section title={promo2.title.slice(0, 20)} data={promo2.data} />
          )}
          {promo3?.data?.length > 0 && (
            <Section title={promo3.title.slice(0, 20)} data={promo3.data} />
          )}
          {promo4?.data?.length > 0 && (
            <Section title={promo4.title.slice(0, 20)} data={promo4.data} />
          )}
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
