import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";

const SearchSongCard = ({ items }) => {
  const { isLoadingCard, setIsLoadingCard, searchData, searchQuery } =
    useContext(SongContext);
  const { LoadingBar } = useLoadingBar();

  console.log(searchQuery);
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

  return (
    <Link to={generateLink()} className="block w-full">
      {isLoadingCard ? (
        <div className="main-card w-full h-64 bg-black pl-2 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center w-full h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingBar />
            </div>
          </div>
        </div>
      ) : (
        searchQuery && (
          <div className="relative w-52 h-52 rounded-tl-3xl rounded-br-3xl cursor-pointer hover:animate-pulse group">
            <img
              src={
                Array.isArray(items.image) ? items.image[2].link : items.image
              }
              alt=""
              className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl opacity-55"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-rose-950/75 text-white p-4 rounded-tl-3xl rounded-br-3xl text-pretty">
              <div className="text-pretty overflow-x-visible">
                <h1 className="text-xl font-bold bg-gradient-to-r underline from-slate-50 to-neutral-300 bg-clip-text text-transparent truncate">
                  {items.name.replace(/&quot;/g, "")}
                </h1>
              </div>
              <div className="text-nowrap overflow-x-auto">
                <h5 className="text-[11px] font-medium text-zinc-200 truncate">
                  {items.subtitle}
                </h5>
              </div>
              <h5 className="text-start text-[11px] font-medium text-zinc-500 relative top-2">
                {items.type.slice(0, 1).toUpperCase()}
                {items.type.slice(1) + "*"}
              </h5>
            </div>
          </div>
        )
      )}
    </Link>
  );
};

export default SearchSongCard;
