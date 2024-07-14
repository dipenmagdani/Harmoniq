import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const LazyHomePage = React.lazy(() => import('./components/HomePage/HomePage'));
import { SongProvider } from './contexts/SongContext';
import { TopTrending } from './components/NavbarSections/TopTrending';
const LazyAlbumDetails = React.lazy(() =>
  import('./components/Genre/AlbumDetails')
);
const LazyPlaylistDetails = React.lazy(() =>
  import('./components/Genre/PlaylistDetails')
);
const LazySongDetails = React.lazy(() =>
  import('./components/Genre/SongDetails')
);
const LazySearchSong = React.lazy(() =>
  import('./components/Search/SearchSong')
);
const LazySearchByType = React.lazy(() =>
  import('./components/Search/SearchByType')
);
import SkeletonCard from './components/CardComponent/SkeletonCard';
const LazyLayout = React.lazy(() => import('./components/Layout/Layout'));
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Suspense fallback={<SkeletonCard />} />
        <LazyLayout>
          <Suspense />

          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazyHomePage />
                </Suspense>
              }
            />
            <Route path="/player" element={<MusicPlayer />} />
            <Route
              path="album/:id"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazyAlbumDetails />
                </Suspense>
              }
            />
            <Route
              path="playlist/:id"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazyPlaylistDetails />
                </Suspense>
              }
            />
            <Route
              path="song/:id"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazySongDetails />
                </Suspense>
              }
            />
            <Route
              path="/search/:name"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazySearchSong />
                </Suspense>
              }
            />
            <Route
              path="/search/:name/:type"
              element={
                <Suspense fallback={<SkeletonCard />}>
                  <LazySearchByType />
                </Suspense>
              }
            />
            <Route path="top-trending" element={<TopTrending />} />
          </Routes>
        </LazyLayout>
      </BrowserRouter>
    </SongProvider>
  );
};

export default App;
