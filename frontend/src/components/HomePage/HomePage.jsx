import React, { useContext, useState } from 'react';
import SongContext from '../../contexts/SongContext';
import Section from './Section';
import useApi from '../../hooks/useAPI';
import SkeletonCard from '../CardComponent/SkeletonCard';
const HomePage = () => {
  const { songDetails, setSongDetails } = useContext(SongContext);
  const [genre, setGenre] = useState('all');
  const [isGenreLoading, setIsGenreLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const genres = [
    { name: 'classical', value: 'classical' },
    { name: 'Hindi', value: 'hindi' },
    { name: 'English', value: 'english' },
    { name: 'Tamil', value: 'tamil' },
    { name: 'Kannada', value: 'kannada' },
    { name: 'Malayalam', value: 'malayalam' },
    { name: 'Punjabi', value: 'punjabi' },
    { name: 'Bengali', value: 'bengali' },
    { name: 'Marathi', value: 'marathi' },
    { name: 'Telugu', value: 'telugu' },
    { name: 'Gujarati', value: 'gujarati' },
    { name: 'Odia', value: 'odia' },
    { name: 'Urdu', value: 'urdu' },
    { name: 'Rajasthani', value: 'rajasthani' },
    { name: 'Haryanvi', value: 'haryanvi' },
  ];

  const { isLoading } = useApi('/api/search/playlist', genre, setSongDetails);
  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSelectedGenre(newGenre);
    setIsGenreLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsGenreLoading(false);
    }, 500);
  };
  console.log(genre);
  console.log(songDetails);

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
          <div className="flex md:ml-72 p-3 gap-4 overflow-x-auto no-scrollbar text-nowrap relative right-5">
            {genres?.map((genre) => {
              return (
                <button
                  key={genre.value}
                  onClick={() => handleGenreChange(genre.value)}
                  className={`grid grid-rows-2 grid-flow-col-dense p-3 rounded-md h-7 border-[3px] text-[14px] text-red-600/80 bg-slate-800/30   hover:text-black hover:bg-red-900 cursor-pointer  w-32 items-center justify-center ${
                    selectedGenre === genre.value
                      ? 'bg-white text-red-800 border-2 border-black'
                      : 'text-white bg-black '
                  }`}
                >
                  {genre.name}
                </button>
              );
            })}
          </div>
          {isGenreLoading ? (
            <div className="main-card w-40 h-40 sm:w-52 sm:h-52 overflow-hidden border-2 p-2 rounded-md border-white/35">
              <SkeletonCard />
            </div>
          ) : (
            <>
              {songDetails?.results?.length > 0 && (
                <Section title={genre} data={songDetails.results} />
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
              {promo2?.data?.length > 0 && (
                <Section title={promo2.title.slice(0, 20)} data={promo2.data} />
              )}
              {promo3?.data?.length > 0 && (
                <Section title={promo3.title.slice(0, 20)} data={promo3.data} />
              )}
              {/* {promo4?.data?.length > 0 && (
              <Section title={promo4.title.slice(0, 20)} data={promo4.data} />
            )} */}
              {promo5?.data?.length > 0 && (
                <Section title={promo5.title.slice(0, 20)} data={promo5.data} />
              )}
              {/* {promo8?.data?.length > 0 && (
              <Section title={promo8.title.slice(0, 20)} data={promo8.data} />
            )} */}
              {promo6?.data?.length > 0 && (
                <Section title={promo6.title.slice(0, 20)} data={promo6.data} />
              )}
              {promo7?.data?.length > 0 && (
                <Section title={promo7.title.slice(0, 20)} data={promo7.data} />
              )}
              {promo9?.data?.length > 0 && (
                <Section title={promo9.title.slice(0, 20)} data={promo9.data} />
              )}
              {promo10?.data?.length > 0 && (
                <Section
                  title={promo10.title.slice(0, 20)}
                  data={promo10.data}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
