import React from 'react';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
// import NavBar from "../NavAndSideBar/NavBar";
import SideBar from '../NavAndSideBar/SideBar';
const Layout = ({ children }) => {
  return (
    <div>
      {/* <NavBar /> */}
      <SideBar />
      <div className="main-content">{children}</div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;
