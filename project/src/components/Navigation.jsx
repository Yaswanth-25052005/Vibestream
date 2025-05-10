import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Music, Moon, Sun } from 'lucide-react';

function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="fixed bottom-0 w-full md:top-0 md:bottom-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-t md:border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-14">
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Melodify
          </Link>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link 
              to="/" 
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${
                location.pathname === '/' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
              aria-label="Profile"
            >
              <User size={20} />
            </Link>
            
            <Link 
              to="/now-playing" 
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${
                location.pathname === '/now-playing' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
              aria-label="Now Playing"
            >
              <Music size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;