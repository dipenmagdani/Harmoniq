import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
import HomePage from './components/HomePage/HomePage';
import { SongProvider } from './contexts/SongContext';
import { TopTrending } from './components/NavbarSections/TopTrending';
import AlbumDetails from './components/Genre/AlbumDetails';
import { PlaylistDetails } from './components/Genre/PlaylistDetails';
import SearchSong from './components/Search/SearchSong';
import SongDetails from './components/Genre/SongDetails';
import SearchByType from './components/Search/SearchByType';
import SkeletonCard from './components/CardComponent/SkeletonCard';
import Layout from './components/Layout/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player" element={<MusicPlayer />} />
            <Route path="album/:id" element={<AlbumDetails />} />
            <Route path="playlist/:id" element={<PlaylistDetails />} />
            <Route path="song/:id" element={<SongDetails />} />
            <Route path="/search/:name" element={<SearchSong />} />
            <Route path="/search/:name/:type" element={<SearchByType />} />
            <Route path="top-trending" element={<TopTrending />} />
            <Route path="/maincard" element={<SkeletonCard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SongProvider>
  );
};

export default App;
