import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";

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
        // Display the content once loaded
        <div className="main-card w-40 h-full relative mx-2 left-6  flex-col transition-all duration-300 hover:scale-105 bg-black rounded-lg hover:mx-7 hover:bg-neutral-800 cursor-pointer hover:opacity-80">
          <div className="cover-img  transition-all duration-300 hover:scale-110 flex justify-start">
            <img
              src={
                Array.isArray(items.image) ? items.image[2].link : items.image
              }
              alt=""
              className="rounded-md w-36 h-36 object-cover"
            />
          </div>
          <div className="py-2">
            <div className="p-1">
              <p className="text-white font-extrabold text-md text-wrap">
                {items.name.slice(0, 1).toUpperCase()}
                {items.name.slice(1)}
              </p>
              <p>
                {items.type.slice(0, 1).toUpperCase()}
                {items.type.slice(1)}
              </p>
            </div>

            {/* 
                        <div className="overflow-x-scroll max-w-xs scrollbar-thin scrollbar-track-white scrollbar-thumb-black scrollbar-thumb-rounded-full">
                            <p className="text-gray-400 text-xs text-pretty">{items.subtitle}</p>
                        </div> */}
          </div>
        </div>
      )}
    </Link>
  );
};

export default SongCard;
