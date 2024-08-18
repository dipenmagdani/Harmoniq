import React from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import SideBar from '../NavAndSideBar/SideBar';
import { useContext } from 'react';
import SongContext from '../../contexts/SongContext';
import NavBar from '../NavAndSideBar/NavBar';
const Layout = ({ children }) => {
  const { isFullScreen } = useContext(SongContext);
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="main-content">{children}</div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;
