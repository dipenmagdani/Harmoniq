import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SongContext from '../../contexts/SongContext';
import { BiSearch } from 'react-icons/bi';

const NavBar = () => {
  const { setSearchQuery } = useContext(SongContext);
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
    <nav className=" py-8  flex justify-center">
      <div className="relative flex justify-center max-lg:mr-10 max-md:mr-52 max-sm:ml-52 max-sm:bottom-5 ">
        <form className="" onSubmit={handleSearchSubmit}>
          <div className="relative flex items-center">
            <div className="absolute left-3 text-zinc-500/80">
              <BiSearch size={20} />
            </div>
            <input
              type="text"
              className=" h-10 pl-10 pr-4 py-2 w-96 max-sm:w-52 bg-zinc-800/30 rounded-md border-2 border-zinc-600/20 text-zinc-500 placeholder:text-zinc-500/80 focus:outline-none hover:border-zinc-600 focus:border-zinc-600 transition-colors duration-200"
              placeholder="Search..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
