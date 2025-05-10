import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

function MiniPlayer() {
  const { currentTrack, isPlaying, setIsPlaying } = useMusic();

  if (!currentTrack) return null;

  const togglePlayState = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-16 md:bottom-4 left-0 right-0 mx-auto max-w-screen-sm px-4 z-40">
      <Link to="/now-playing">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-3 flex items-center space-x-3 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
          <img 
            src={currentTrack.albumArt} 
            alt={`${currentTrack.title} by ${currentTrack.artist}`} 
            className="w-12 h-12 rounded-md object-cover"
          />
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium truncate">{currentTrack.title}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous track"
            >
              <SkipBack size={16} />
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                togglePlayState();
              }}
              className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button 
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next track"
            >
              <SkipForward size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MiniPlayer;