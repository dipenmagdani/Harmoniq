import React, { useContext, useState } from "react";
import { TbPlaylist, TbTrendingUp, TbPlaylistAdd } from "react-icons/tb";
import { BsBarChartSteps } from "react-icons/bs";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import SongContext from "../../contexts/SongContext";

const NavBar = () => {
  const { searchQuery, setSearchQuery } = useContext(SongContext);
  const navigate = useNavigate();
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      navigate(`/search/${localSearchQuery}`);
    }
  };

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
        style={{ background: "#161616" }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="flex items-center p-2 text-white">
                <img src="../music-logo.png" alt="" width={100} />
                <span className="ms-1 text-2xl">Harmoniq</span>
              </Link>
            </li>
            <li>
              <form className="max-w-md" onSubmit={handleSearchSubmit}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-white sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 text-white bg-black rounded-lg text-xs font-base bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent border border-white/20"
                    placeholder="Search Songs, Albums"
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white rounded-full absolute right-2.5 bottom-2.5 text-sm border border-white/20 font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent bg-blue-700 hover:bg-blue-800 px-4 py-2 hover:border-white/50 hover:text-white"
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
            </li>
            <li>
              <span className="ml-3 text-3xl text-white">Discover</span>
            </li>
            <div className="p-4">
              <li>
                <Link
                  className="flex items-center p-2 text-white hover:bg-gray-700 rounded-lg"
                  to="/top-trending"
                >
                  <TbTrendingUp />
                  <span className="ml-3">Top Trending</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  <BsBarChartSteps />
                  <span className="ml-3">Top Charts</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  <TbPlaylist />
                  <span className="ml-3">Top Playlists</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  <LiaMicrophoneAltSolid />
                  <span className="ml-3">Top Artists</span>
                </a>
              </li>
            </div>
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <span className="ml-3 text-3xl text-white">Playlist</span>
            </li>
            <div className="ml-9 mt-4">
              <button
                className="bg-white text-gray-800 w-40 h-9 flex justify-center items-center gap-2 rounded-md hover:bg-gray-800 hover:text-white"
                onClick={() => toast.info("Coming Soon...")}
              >
                <TbPlaylistAdd className="text-xl" />
                Create Playlist
              </button>
              <li className="text-center text-xs mt-3 text-gray-500">
                Click the button to create a new playlist. You have to be logged
                in first
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
