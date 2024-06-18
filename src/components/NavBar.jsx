import React from 'react';
import { TbPlaylist, TbTrendingUp, TbRadio, TbPlaylistAdd } from "react-icons/tb";
import { BsBarChartSteps } from "react-icons/bs";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import SongCard from './SongCard';
import SongContext from '../contexts/SongContext';
import { useContext } from 'react';
const NavBar = () => {
    const { songDetails, setSongDetails } = useContext(SongContext);
    console.log(songDetails?.trending.data)
    return (
        <>
            <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img src="./music-logo.png" alt="" width={100} />
                                <span className="ms-1 text-2xl">Music</span>
                            </a>
                        </li>
                        <li>
                            <form className="max-w-md">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Songs..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>
                        </li>
                        <li>
                            <span className="flex-1 ms-3 whitespace-nowrap text-3xl text-white ">Discover</span>
                        </li>
                        <div className='ul-child p-4'>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <TbTrendingUp />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Top Trending</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <BsBarChartSteps />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Top Charts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <TbPlaylist />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Top Playlists</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <LiaMicrophoneAltSolid />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Top Artists</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <TbRadio />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Radio</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <span className="flex-1 ms-3 whitespace-nowrap text-3xl text-white ">Playlist</span>
                        </li>
                        <div className='ul-child'>
                            <li className='ml-9 mt-4'>
                                <button className='bg-white text-gray-800 w-40 h-9 flex justify-center items-center gap-2 rounded-md '>
                                    <TbPlaylistAdd className='text-xl' />
                                    Create Playlist
                                </button>
                            </li>
                            <li className='text-center text-xs mt-3'>
                                <span className='text-gray-500 '>Click the button to create a new playlist. You have to be logged in first</span>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>
            <div className="p-4 sm:ml-64">
                <h1 className='p-3 text-3xl'>Trending</h1>
                <div className='flex flex-row gap-4 overflow-x-auto   min-w-full'>
                    {/* SongCard components */}
                    <div className='flex-shrink-0 flex gap-5'>
                        {
                            songDetails?.trending?.data.map((item) => {
                                <SongCard songData="{...items}" />

                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
