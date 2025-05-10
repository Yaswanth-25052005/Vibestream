import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Plus, Music, User } from 'lucide-react';

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();

  return (
    <header className="dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-3 sticky top-0 z-10 py-4 px-6 border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="flex items-center mr-2">
              <div className="w-7 h-3 bg-white rounded-sm"></div>
              <div className="w-7 h-5 bg-white rounded-sm ml-0.5"></div>
              <div className="w-7 h-7 bg-white rounded-sm ml-0.5"></div>
            </div>
            <span className="font-bold text-lg tracking-wide uppercase">VIBE STREAM</span>
          </Link>
        </div>

        <div className={`relative transition-all duration-300 ${searchFocused ? 'w-96' : 'w-72'}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#2A2A2A] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="hover:bg-[#2A2A2A] p-2 rounded-full transition-colors">
            <Plus size={20} />
          </button>
          <button className="hover:bg-[#2A2A2A] p-2 rounded-full transition-colors">
            <Link 
                         to="/now-playing" 
                         className={`p-2 rounded-full  ${
                           location.pathname === '/now-playing' ? 'text-indigo-400 dark:text-indigo-400' : ''
                         }`}
                         aria-label="Now Playing"
                       >
                         <Music size={20} />
                       </Link>
          </button>
          <Link to="/profile">
  <div className="w-8 h-8 bg-orange-200 rounded-full overflow-hidden cursor-pointer">
    <img src="https://i.pravatar.cc/150?img=37" alt="User profile" className="w-full h-full object-cover" />
  </div>
</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;