import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";

const SongCard = ({ items, displayText }) => {

    const id = items.id

    return (
        <Link className="nav-link" to={`/albums/${id}`} >
            <div className="main-card w-52 h-64 bg-black pl-2 rounded-lg overflow-hidden hover:bg-neutral-800 cursor-pointer hover:opacity-80  hover:rounded-xl">

                <div className="cover-img flex items-center justify-center transition-all duration-300 hover:scale-110 ">
                    <img src={Array.isArray(items.image) ? items.image[2].link : items.image} alt="" className="rounded-md w-44 h-40 object-cover " />

                </div>
                <div className="p-2 w-56 h-80">
                    <h1 className="text-white font-extrabold text-md ">{items.name.slice(0, 1).toUpperCase()}{items.name.slice(1, 45)}</h1>
                    <h2 className="text-slate-50 opacity-50 text-sm text-wrap">{items.subtitle.length > 30 ? items.subtitle.slice(0, 25) + "..." : items.subtitle.slice(0, 30)}</h2>
                </div>
            </div>
        </Link >

    );
}

export default SongCard;
