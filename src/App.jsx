import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import { SongProvider } from './contexts/SongContext';
import { TopTrending } from './components/NavbarSections/TopTrending';
import AlbumDetails from './components/AlbumAndPlaylist/AlbumDetails';
import { PlaylistDetails } from './components/AlbumAndPlaylist/PlaylistDetails'
import SearchSong from './components/Search/SearchSong'
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='album/:id' element={<AlbumDetails />} />
          <Route path='playlist/:id' element={<PlaylistDetails />} />
          <Route path='/search/:name' element={<SearchSong />} />
          <Route path='top-trending' element={<TopTrending />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>

  );
}

export default App;
