import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";
import useApi from "../../hooks/useAPI";
import SkeletonCard from "../CardComponent/SkeletonCard";
const SongCard = ({ items }) => {
  const { isLoadingCard, setIsLoadingCard } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();
  useEffect(() => {
    // Simulating loading delay with setTimeout
    setTimeout(() => {
      setIsLoadingCard(false);
    }, 2000); // Adjust the timeout value as needed or remove this for actual fetching
  }, [items]); // Only runs once on mount

  // const playlist_id = items.id;
  // const albumId = type === "song" && items.id

  const type = items.type;
  const generateLink = () => {
    switch (type) {
      case "playlist":
        return `/playlist/${items.id}`;
      case "album":
      case "show":
        return `/album/${items.id}`;
      case "song":
        return `/song/${items.id}`;
    }
  };
  console.log(items);

  return (
    <Link className="nav-link" to={generateLink()}>
      {isLoadingCard ? (
        // Loading indicator while fetching data
        <div className="main-card w-52 h-64 bg-black pl-2 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center w-44 h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingBar />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative max-w-sm rounded-tl-3xl rounded-br-3xl w-auto h-52 shadow-2xl shadow-red-600/20 hover:shadow-slate-200/20 drop-shadow-xl cursor-pointer hover:animate-pulse">
          <img
            src={Array.isArray(items.image) ? items.image[2].link : items.image}
            alt=""
            className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-rose-900/35 text-white p-4 rounded-tl-3xl rounded-br-3xl text-pretty ">
            <h1 className="text-xl font-bold bg-gradient-to-r underline from-red-700 to-rose-200 bg-clip-text text-transparent w-48">
              {items.name.slice(0, 1).toUpperCase()}
              {items.name.slice(1)}
            </h1>
            <div className="text-nowrap overflow-x-auto">
              <h5 className="text-[11px] font-medium text-zinc-200">
                {items.subtitle}
              </h5>
            </div>
            <h5 className="text-start text-[11px] font-medium text-zinc-500 relative top-2 ">
              {items.type.slice(0, 1).toUpperCase()}
              {items.type.slice(1) + "*"}
            </h5>
          </div>
        </div>
        // Display the content once loaded
        // <div className="main-card w-40 h-full relative mx-2 left-6  flex-col transition-all duration-300 hover:scale-105  rounded-lg hover:mx-7 hover:bg-neutral-800 cursor-pointer hover:opacity-80">
        //   <div className="aspect-square relative">
        //     <img
        //       src={
        //         Array.isArray(items.image) ? items.image[2].link : items.image
        //       }
        //       alt=""
        //       className="w-full h-full object-cover"
        //     />
        //     <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        //       <svg
        //         className="w-12 h-12 text-white"
        //         fill="currentColor"
        //         viewBox="0 0 20 20"
        //       >
        //         <path
        //           fillRule="evenodd"
        //           d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        //           clipRule="evenodd"
        //         />
        //       </svg>
        //     </div>
        //   </div>
        //   <div className="py-2">
        //     <div className="p-1">
        //       <p className="text-white font-extrabold text-md text-wrap">
        //         {items.name.slice(0, 1).toUpperCase()}
        //         {items.name.slice(1)}
        //       </p>
        //       <p>
        //         {items.type.slice(0, 1).toUpperCase()}
        //         {items.type.slice(1)}
        //       </p>
        //     </div>

        //     {/*
        //                 <div className="overflow-x-scroll max-w-xs scrollbar-thin scrollbar-track-white scrollbar-thumb-black scrollbar-thumb-rounded-full">
        //                     <p className="text-gray-400 text-xs text-pretty">{items.subtitle}</p>
        //                 </div> */}
        //   </div>
        // </div>
      )}
    </Link>
  );
};

export default SongCard;
