import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SongContext from "../../contexts/SongContext";
import useLoadingBar from "../../hooks/useLoadingBar";
import ToolTip from "../CardComponent/ToolTip";
const SearchTypeCard = ({ items }) => {
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

  return (
    <>
      <Link to={generateLink()} className={`block w-full`}>
        {isLoadingCard ? (
          <div className="main-card w-full h-64 bg-black pl-2 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center w-full h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingBar />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-2 p-2 rounded-md border-white/35 hover:border-white/60 transition-all duration-500 bg-stone-700/20">
            <div className="relative max-w-sm rounded-tl-3xl rounded-br-3xl w-52 h-52 cursor-pointer group">
              <img
                src={
                  Array.isArray(items.image) ? items.image[2].link : items.image
                }
                className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl bg-black opacity-55 hover:opacity-75"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-black to-rose-900/35 text-white p-4 rounded-tl-3xl rounded-br-3xl text-pretty">
                <h1 className="text-xl truncate font-bold bg-gradient-to-r underline from-red-700 to-rose-200 bg-clip-text text-transparent w-48">
                  {items.name.replace(/&quot;/g, "")}
                </h1>
                <div className="type-heading text-nowrap no-scrollbar overflow-x-scroll ">
                  <h5 className="text-[11px] font-medium text-zinc-200">
                    {items.subtitle}
                  </h5>
                </div>
                {/* <h5 className="text-start text-[11px] font-medium text-zinc-500 relative top-2 ">
              {items.type.slice(0, 1).toUpperCase()}
              {items.type.slice(1) + "*"}
            </h5> */}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col gap-2 items-center justify-center  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-3xl rounded-br-3xl text-center">
                <h1 className="text-emerald-200">
                  {" "}
                  {items.name.replace(/&quot;/g, "")}
                </h1>
                <h5 className="text-xs text-zinc-400"> {items.subtitle}</h5>
              </div>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default SearchTypeCard;
