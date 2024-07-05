import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from './components/HomePage/HomePage';
import { lazy } from "react";
import HomePage from "./components/HomePage/HomePage";
import { SongProvider } from "./contexts/SongContext";
import { TopTrending } from "./components/NavbarSections/TopTrending";
import AlbumDetails from "./components/Genre/AlbumDetails";
import { PlaylistDetails } from "./components/Genre/PlaylistDetails";
import SearchSong from "./components/Search/SearchSong";
import SongDetails from "./components/Genre/SongDetails";
import SearchByType from "./components/Search/SearchByType";
import SkeletonCard from "./components/CardComponent/SkeletonCard";
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="album/:id" element={<AlbumDetails />} />
          <Route path="playlist/:id" element={<PlaylistDetails />} />
          <Route path="song/:id" element={<SongDetails />} />
          <Route path="/search/:name" element={<SearchSong />} />
          <Route path="/search/:name/:type" element={<SearchByType />} />

          <Route path="top-trending" element={<TopTrending />} />
          <Route path="/maincard" element={<SkeletonCard />} />
        </Routes>
      </BrowserRouter>
    </SongProvider>
  );
};

export default App;
