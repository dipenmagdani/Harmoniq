import React from 'react';
import { PiPlayFill, PiPauseFill, PiSkipBackFill, PiSkipForwardFill } from 'react-icons/pi';

const MusicPlayer = () => {
    return (
        <div className="main-div fixed bottom-0 left-0 right-0 flex justify-between items-center bg-black p-4">
            <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="Album cover" className="w-12 h-12 rounded-md mr-4" />
                <div>
                    <h4 className="text-white text-sm">Song Title</h4>
                    <p className="text-gray-400 text-xs">Artist Name</p>
                </div>
            </div>
            <div className="audio-controls flex items-center relative left-14">
                <button className="mx-2 text-white">
                    <PiSkipBackFill size={24} />
                </button>
                <button className="mx-2 text-white">
                    <PiPlayFill size={24} />
                </button>
                <button className="mx-2 text-white">
                    <PiSkipForwardFill size={24} />
                </button>
            </div>
            <div className="flex items-center">
                <audio controls className="hidden" />
                <div className="text-white text-xs">00:00 / 00:00</div>
                <input type="range" className="mx-4" />
                <button className="text-white">100%</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
