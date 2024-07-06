import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { HiTrendingUp } from "react-icons/hi";
import { FaStream } from "react-icons/fa";
import { BiAlbum } from "react-icons/bi";
import { PiMusicNoteFill } from "react-icons/pi";
import { MdPlaylistAddCircle } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <Toaster richColors position="bottom-center" />
      <div
        className=" main-card h-[600px] w-56 left-3 fixed top-3 z-auto border-2 rounded-2xl border-slate-800/80 overflow-y-auto no-scrollbar"
        style={{ background: "#121217" }}
      >
        <Link to={"/"}>
          <div className="logo cursor-pointer flex justify-center h-fit">
            <img src="../harmoniq.svg" alt="Harmoniq" className="w-40" />
          </div>
        </Link>
        <div className="main-section flex flex-col">
          <div className="section-list">
            <div className="title flex  text-white/50">
              <h1>Recommended</h1>
            </div>
            <div className="gap-3 font-md text-lg py-3 space-y-4 ">
              <div className="flex gap-3  rounded-lg h-8 hover:text-red-700/85 cursor-pointer">
                <div className="text-2xl ">
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
          <div className="section-list p-4">
            <div className="title flex  text-white/50">
              <h1>Your Playlist</h1>
            </div>
            <div className="gap-3 font-md text-lg  relative left-3 space-y-3  rounded-xl h-44 overflow-y-auto no-scrollbar ">
              <div className="flex gap-1 rounded-lg h-12 hover:bg-red-600/60 hover:text-white cursor-pointer w-40 overflow-x-auto no-scrollbar text-nowrap text-white/20  hover:shadow-glow hover:shadow-black ">
                <div className="flex gap-2 mx-2">
                  <div className="text-xl">
                    <PiMusicNoteFill />
                  </div>
                  <h1 className=" ">Hindi Songs</h1>
                </div>
              </div>
              <div className="flex gap-1 rounded-lg h-12 border-[3px] text-red-600/80 bg-slate-800/30 border-red-600/60 hover:bg-red-600/60 hover:text-white cursor-pointer w-40 overflow-x-auto no-scrollbar text-nowrap ">
                <div className="flex gap-2 mx-2">
                  <div className="text-2xl">
                    <MdPlaylistAddCircle />
                  </div>
                  <h1 className=" ">New Playlist</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
