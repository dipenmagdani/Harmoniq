import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";

const SearchSongCard = ({ items, isCompact = false }) => {
  const { isLoadingCard, setIsLoadingCard } = useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingCard(false);
    }, 2000);
  }, [items]);

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
      default:
        return "/";
    }
  };

  const cardClasses = isCompact ? "w-40 flex-shrink-0" : "w-full";

  return (
    <Link to={generateLink()} className={`block ${cardClasses} group`}>
      {isLoadingCard ? (
        <div className="main-card w-52 h-64 bg-black pl-2 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center w-44 h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingBar />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-neutral-800 rounded-md overflow-hidden transition-all duration-300 hover:bg-neutral-700 cursor-pointer">
          <div className="aspect-square relative">
            <img
              src={
                Array.isArray(items.image) ? items.image[2]?.link : items.image
              }
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-white font-bold text-sm truncate">
              {items.name.replace(/&quot;/g, "")}
            </h1>
            <h2 className="text-neutral-400 text-xs truncate mt-1">
              {items.type.charAt(0).toUpperCase() + items.type.slice(1)} •{" "}
              {items.artist}
            </h2>
          </div>
        </div>
      )}
    </Link>
  );
};

export default SearchSongCard;
