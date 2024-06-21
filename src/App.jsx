import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { SongProvider } from './contexts/SongContext';
import { TopTrending } from './components/TopTrending';
import { AlbumDetails } from './components/AlbumDetails';
import { PlaylistDetails } from './components/PlaylistDetails'
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='album/:id' element={<AlbumDetails />} />
          <Route path='playlist/:id' element={<PlaylistDetails />} />

          <Route path='top-trending' element={<TopTrending />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>

  );
}

export default App;
