import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { SongProvider } from './contexts/SongContext';
import SongCard from './components/SongCard';
import { TopTrending } from './components/TopTrending';
import { AlbumDetails } from './components/AlbumDetails';

export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='albums/:id' element={<AlbumDetails />} />
          <Route path='top-trending' element={<TopTrending />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>

  );
}

export default App;
