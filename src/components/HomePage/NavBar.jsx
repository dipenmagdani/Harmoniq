import React, { useContext, useState } from "react";
import { TbPlaylist, TbTrendingUp, TbPlaylistAdd } from "react-icons/tb";
import { BsBarChartSteps } from "react-icons/bs";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import SongContext from "../../contexts/SongContext";

const NavBar = () => {
  return (
    <>
      <Toaster richColors position="bottom-center" />
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen border-r-2 border-white/20"
        aria-label="Sidebar"
        style={{ background: "#161616" }}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex h-32 items-center justify-center text-white  "
              >
                <img src="../../harmoniq.png" alt="" className="w-48" />
                {/* <span className="ms-1 text-2xl">Harmoniq</span> */}
              </Link>
            </li>
            <li></li>
            <li className="relative top-3">
              <span className="text-4xl font-bold bg-gradient-to-r from-red-500/80 to-white/70 bg-clip-text text-transparent pl-2">
                Discover
              </span>
            </li>
            <div className="space-y-3 pl-4 p-4">
              <li>
                <Link
                  className="flex items-center p-2 text-white hover:bg-white/20 rounded-lg border-2 border-white/30"
                  to="/top-trending"
                >
                  <div className="text-lg font-bold bg-gradient-to-r text-red-300">
                    <TbTrendingUp />
                  </div>
                  <span className="ml-3 text-lg font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
                    Top Trending
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-white/20 rounded-lg border-2 border-white/30"
                >
                  <div className="text-lg font-bold bg-gradient-to-r text-red-300">
                    <BsBarChartSteps />
                  </div>
                  <span className="ml-3 text-lg font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
                    Top Charts
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-white/20 rounded-lg border-2 border-white/30"
                >
                  <div className="text-lg font-bold bg-gradient-to-r text-red-300">
                    <TbPlaylist />
                  </div>
                  <span className="ml-3 text-lg font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
                    Top Playlists
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-white/20 rounded-lg border-2 border-white/30"
                >
                  <div className="text-lg font-bold bg-gradient-to-r text-red-300">
                    <LiaMicrophoneAltSolid />
                  </div>
                  <span className="ml-3 text-lg font-bold bg-gradient-to-r from-slate-300/80 to-white/70 bg-clip-text text-transparent">
                    Top Artists
                  </span>
                </a>
              </li>
            </div>
          </ul>
          <div className="w-full bg-white/40 h-[1.3px]"></div>
          <ul className="space-y-4 font-bold mt-4">
            <li>
              <span className="text-4xl font-bold bg-gradient-to-r from-red-500/80 to-white/70 bg-clip-text text-transparent pl-2">
                Playlist
              </span>
            </li>
            <div className="flex flex-col items-center ">
              <button
                className="bg-transparent border-2 border-white/30 text-red-400 w-40 h-9 flex justify-center items-center gap-2 rounded-md hover:bg-white/20 "
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
