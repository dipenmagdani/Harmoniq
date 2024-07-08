import React, { useContext, useState } from 'react';
import { TbPlaylist } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { HiTrendingUp } from 'react-icons/hi';
import { FaStream } from 'react-icons/fa';
import { BiAlbum } from 'react-icons/bi';
import { MdPlaylistAddCircle } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import SongContext from '../../contexts/SongContext';

const SideBar = () => {
  const { setSearchQuery } = useContext(SongContext);
  const navigate = useNavigate();
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      navigate(`/search/${localSearchQuery}`);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white text-3xl"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform transform fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 overflow-y-auto lg:w-56 lg:left-3 lg:top-3 lg:border-2 lg:h-[610px] lg:rounded-2xl lg:border-slate-800/80 lg:bg-[#121217] not-scrollbar`}
      >
        <Link to={'/'}>
          <div className="logo cursor-pointer flex justify-center h-fit p-4 lg:p-0">
            <img src="../../harmoniq.svg" alt="Harmoniq" className="w-40" />
          </div>
        </Link>
        <div className="main-section flex flex-col gap-3 p-4 lg:p-0">
          <div className="flex justify-center items-center ">
            <form className="flex justify-center" onSubmit={handleSearchSubmit}>
              <label htmlFor="default-search" className="sr-only">
                Search
              </label>
              <div className="flex items-center justify-center ">
                <input
                  type="search"
                  id="default-search"
                  className="w-36 p-3 text-white bg-black rounded-lg text-sm font-base bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent border-2 border-red-700/40"
                  placeholder="Search Songs.."
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="ml-2 text-white rounded-full relative right-1 text-sm border border-white/20 font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent bg-blue-700 hover:bg-blue-800 px-4 py-2 hover:border-white/50 hover:text-white"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="section-list">
            <div className="title flex text-white/50">
              <h1>Recommended</h1>
            </div>
            <div className="gap-3 font-md text-lg py-3 space-y-4">
              <div className="flex gap-3 rounded-lg h-8 hover:text-red-700/85 cursor-pointer">
                <div className="text-2xl">
                  <HiTrendingUp />
                </div>
                <h1>Top Trending</h1>
              </div>
              <div className="flex gap-3 rounded-lg h-8 relative cursor-pointer hover:text-red-700/85">
                <div className="text-2xl">
                  <TbPlaylist />
                </div>
                <h1>For you</h1>
              </div>
              <div className="flex gap-3 rounded-lg h-8 relative cursor-pointer hover:text-red-700/85">
                <div className="text-xl">
                  <FaStream />
                </div>
                <h1 className="relative left-1">Discover</h1>
              </div>
              <div className="flex gap-3 rounded-lg h-8 relative cursor-pointer hover:text-red-700/85">
                <div className="text-xl">
                  <BiAlbum />
                </div>
                <h1 className="relative left-1">Top Albums</h1>
              </div>
            </div>
          </div>
          <div className="section-list space-y-3">
            <div className="title flex text-white/50">
              <h1>Your Playlist</h1>
            </div>
            <div className="gap-3 font-md text-lg relative left-3 space-y-3 rounded-xl h-44 overflow-y-auto no-scrollbar">
              <button onClick={() => toast.warning('Coming Soon!')}>
                <div className="flex gap-1 rounded-lg h-12 border-[3px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-40 overflow-x-auto no-scrollbar text-nowrap">
                  <div className="flex gap-2 mx-2">
                    <div className="text-2xl">
                      <MdPlaylistAddCircle />
                    </div>
                    <h1>New Playlist</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
