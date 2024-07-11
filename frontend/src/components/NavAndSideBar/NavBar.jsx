import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SongContext from '../../contexts/SongContext';
import { BiSearch } from 'react-icons/bi';

const NavBar = () => {
  const { searchQuery, setSearchQuery } = useContext(SongContext);
  const navigate = useNavigate();
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      setSearchQuery(localSearchQuery);
      navigate(`/search/${localSearchQuery}`);
    }
  };

  return (
    <div className="flex justify-evenly items-center w-[1270px] h-20 lg:ml-60 ">
      <div className=" ">
        <form className="search" onSubmit={handleSearchSubmit}>
          <div className="flex items-center">
            <div className="search-icon p-2 relative left-10 text-zinc-500/80">
              <BiSearch size={20} />
            </div>
            <input
              type="text"
              className="input-search search-div w-96 h-10 bg-zinc-800/30 rounded-md pl-10  border-2 border-zinc-600/20 text-zinc-500 placeholder:text-zinc-500/80 focus:outline-none hover:border-zinc-600 active:border-zinc-600 focus-within:border-zinc-600"
              placeholder="Search..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
