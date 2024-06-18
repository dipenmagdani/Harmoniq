import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { SongProvider } from './contexts/SongContext';

export const App = () => {
  return (
    <SongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            {/* Nested routes can go here */}
            {/* Example: <Route path='top-chart' element={<MainSection />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </SongProvider>

  );
}

export default App;
