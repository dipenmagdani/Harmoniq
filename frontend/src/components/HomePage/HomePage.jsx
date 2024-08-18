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
    { name: 'All', value: 'all' },
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

  const {} = useApi('/api/home', genre, setSongDetails);
  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSelectedGenre(newGenre);
    setIsGenreLoading(true);
    setTimeout(() => {
      setIsGenreLoading(false);
    }, 1200);
  };
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
      <div className="song_data mx-2 sm:mx-3 my-2 sm:my-3 pb-4 sm:pb-9">
        <div className="song_data">
          <div className="flex md:ml-16 lg:ml-72 p-2 sm:p-3 gap-2 sm:gap-4 overflow-x-auto  text-nowrap">
            {genres?.map((genre) => (
              <button
                key={genre.value}
                onClick={() => handleGenreChange(genre.value)}
                className={`p-2 sm:p-3 rounded-md text-xs sm:text-sm border border-zinc-700 text-zinc-400 bg-slate-800/30 hover:text-zinc-300 hover:bg-zinc-700/80 hover:border-zinc-200/40 hover:shadow-glow hover:shadow-black cursor-pointer whitespace-nowrap ${
                  selectedGenre === genre.value
                    ? 'bg-zinc-600 text-zinc-300 border-2 border-black'
                    : 'text-white bg-black'
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
          {isGenreLoading ? (
            <div className="main-card w-40 h-40 sm:w-52 sm:h-52 overflow-hidden border-2 p-2 rounded-md border-white/35">
              <SkeletonCard />
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {[
                trending,
                albums,
                charts,
                playlists,
                promo0,
                promo1,
                promo2,
                promo3,
                promo5,
                promo6,
                promo7,
                promo9,
                promo10,
              ].map(
                (section, index) =>
                  section?.data?.length > 0 && (
                    <Section
                      key={index}
                      title={section.title.slice(0, 20)}
                      data={section.data}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
