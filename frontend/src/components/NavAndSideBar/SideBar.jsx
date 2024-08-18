import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { FaUser } from 'react-icons/fa';
import { BiLogInCircle, BiLogoGithub } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import SongContext from '../../contexts/SongContext';
import { PiPlaylistDuotone } from 'react-icons/pi';

const SideBar = () => {
  const { setSearchQuery } = useContext(SongContext);
  const navigate = useNavigate();
  const [localSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { jwt } = useContext(SongContext);

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
    setTimeout(() => {
      window.location.href = `${import.meta.env.VITE_API_URL}/login`;
    }, 1000);
  };

  return (
    <>
      <Toaster richColors position="bottom-right" />

      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white text-3xl "
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 overflow-y-auto lg:w-56 lg:left-3 lg:top-3 lg:border-2 max-lg:h-[610px] xl:h-full max-sm:h-full lg:rounded-2xl lg:border-zinc-700/80 lg:bg-zinc-900 no-scrollbar`}
      >
        <Link to={'/'}>
          <div className="logo cursor-pointer flex justify-center h-fit p-4 lg:p-0">
            <img src="../../harmoniq.svg" alt="Harmoniq" className="w-40" />
          </div>
        </Link>
        <div className="main-section flex flex-col gap-3 p-4 lg:p-0">
          <div className="flex justify-center items-center "></div>
          <div className="section-list">
            <div className="title flex text-white/50 ">
              <h1 className="relative right-8">Your Profile</h1>
            </div>
            <div className="gap-3 font-md text-lg py-3 space-y-4 text-zinc-300">
              {jwt ? (
                <>
                  <Link to={'#'} onClick={() => toast.warning('Coming Soon!')}>
                    <div className="flex gap-3 rounded-lg h-8 hover:text-red-700/85 cursor-pointer">
                      <div className="text-xl">
                        <BiLogInCircle />
                      </div>
                      <h1>Profile</h1>
                    </div>
                  </Link>
                  <Link to={'#'} onClick={handleLogout}>
                    <div className="flex gap-3 rounded-lg h-8 relative cursor-pointer hover:text-red-700/85">
                      <div className="text-xl">
                        <FaUser />
                      </div>
                      <h1>Logout</h1>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={`/login`}>
                    <div className="flex gap-3 rounded-lg h-8 hover:text-red-700/85 cursor-pointer">
                      <div className="text-xl">
                        <BiLogInCircle />
                      </div>
                      <h1>Login</h1>
                    </div>
                  </Link>
                  <Link to={`/signup`}>
                    <div className="flex gap-3 rounded-lg h-8 relative cursor-pointer hover:text-red-700/85">
                      <div className="text-xl">
                        <FaUser />
                      </div>
                      <h1>Signup</h1>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="section-list space-y-1 w-44 ">
            <div className=" font-md text-lg relative rounded-xl h-44 overflow-y-auto no-scrollbar left-4">
              <button onClick={() => toast.warning('Coming Soon!')}>
                <div className="flex gap-1 relative top-3 rounded-lg h-12 border-[2px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-36 overflow-x-auto no-scrollbar text-nowrap">
                  <div className="flex gap-2 mx-2">
                    <div className="text-xl">
                      <PiPlaylistDuotone />
                    </div>
                    <h1 className="text-sm">New Playlist</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* <div className="section-list space-y-1">
            <div className="gap-3 font-md text-lg relative left-3 space-y-3 rounded-xl h-44 overflow-y-auto no-scrollbar">
              <button onClick={() => toast.warning('Coming Soon!')}>
                <div className="flex gap-1 relative top-3 rounded-lg h-12 border-[2px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-36 overflow-x-auto no-scrollbar text-nowrap">
                  <div className="flex gap-2 mx-2">
                    <div className="text-xl">
                      <PiPlaylistDuotone />
                    </div>
                    <h1 className="text-sm">Your Favorites</h1>
                  </div>
                </div>
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex gap-2 text-sm text-zinc-500 items-center justify-center">
          Made By
          <a href="https://www.github.com/dipenmagdani">
            <BiLogoGithub size={25} className="hover:text-zinc-300" />
          </a>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBar;
