import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from './components/HomePage/HomePage';
const LazyHomePage = React.lazy(() => import('./components/HomePage/HomePage'))
import { SongProvider } from './contexts/SongContext';
import { TopTrending } from './components/NavbarSections/TopTrending';
import AlbumDetails from './components/Genre/AlbumDetails';
import { PlaylistDetails } from './components/Genre/PlaylistDetails'
import SearchSong from './components/Search/SearchSong'
import SongDetails from './components/Genre/SongDetails';
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<React.Suspense fallback="Loading..."><LazyHomePage /></React.Suspense>} />
          <Route path='album/:id' element={<AlbumDetails />} />
          <Route path='playlist/:id' element={<PlaylistDetails />} />
          <Route path='song/:id' element={<SongDetails />} />
          <Route path='/search/:name' element={<SearchSong />} />
          <Route path='top-trending' element={<TopTrending />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>

  );
}

export default App;
