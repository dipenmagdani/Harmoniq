import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";
const SearchSongCard = ({ items }) => {
  // const { isLoadingCard, setIsLoadingCard, searchQuery, setSearchQuery } =
  //   useContext(SongContext);
  const { LoadingBar } = useLoadingBar();
  useEffect(() => {
    // Simulating loading delay with setTimeout
    setTimeout(() => {
      setIsLoadingCard(false);
    }, 2000); // Adjust the timeout value as needed or remove this for actual fetching
  }, [items]); // Only runs once on mount

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
  return (
    // <div className="main-card w-40 h-full relative mx-2 left-6  flex-col transition-all duration-300 hover:scale-105 bg-black rounded-lg hover:mx-7 hover:bg-neutral-800 cursor-pointer hover:opacity-80">
    //   <div className="cover-img  transition-all duration-300 hover:scale-110 flex justify-start">
    //     <img
    //       src={
    //         Array.isArray(items.image) ? items.image[2].link : items.image
    //       }
    //       alt=""
    //       className="rounded-md w-36 h-36 object-cover"
    //     />
    //   </div>
    //   <div className="py-2 w-48">
    //     <h1 className="text-white font-extrabold text-md text-wrap">
    //       {items.name.replace(/&quot;/g, "")}
    //     </h1>
    //     <h2 className="text-slate-50 opacity-50 text-sm text-wrap">
    //       {items.artist}
    //     </h2>
    //   </div>
    // </div>
    <Link to={`/${items.type}/${items.id}`}>
      <div className="w-32 h-full relative mx-2 left-6 transition-all duration-300 hover:scale-105 bg-black rounded-lg hover:mx-7 ">
        <div className="cover-img">
          <img
            src={
              Array.isArray(items.image) ? items.image[2]?.link : items.image
            }
            alt=""
            className="rounded-md h-36 object-cover"
          />
        </div>
        <div className="">
          <h1 className="text-white font-extrabold text-md ">
            {items.name.replace(/&quot;/g, "")}
          </h1>
          <h2 className="text-slate-50 opacity-50 text-sm ">{items.artist}</h2>
        </div>
        {/* Loading indicator */}
      </div>
    </Link>
  );
};

export default SearchSongCard;
