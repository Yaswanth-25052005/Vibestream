import React from 'react';
import Navigation from './Navigation';
import MiniPlayer from './MiniPlayer';
import Navbar from './Navbar';

import { useMusic } from '../context/MusicContext';

const Layout = ({ children }) => {
  const { currentTrack } = useMusic();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Navigation and Navbar */}
   
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-28">{children}</main>

      
      {currentTrack && <MiniPlayer />}
    </div>
  );
};

export default Layout;