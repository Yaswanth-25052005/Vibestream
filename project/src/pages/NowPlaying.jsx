import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, ListMusic, Repeat, Shuffle } from 'lucide-react';

function NowPlaying({ currentTrack, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(true);
  
  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.1;
          return newProgress > 100 ? 0 : newProgress;
        });
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);
  
  const togglePlayState = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const calculateCurrentTime = () => {
    return (progress / 100) * currentTrack.duration;
  };

  return (
    <div className="pt-0 md:pt-20 pb-4 px-4 max-w-screen-md mx-auto">
      <div className="flex flex-col items-center mt-4 md:mt-8">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl mb-6 group">
          <img 
            src={currentTrack.albumArt} 
            alt={`${currentTrack.title} by ${currentTrack.artist}`} 
            className="w-full h-full object-cover"
          />
          
          {showVisualizer && isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end p-4 h-24">
              <div className="audio-visualizer flex space-x-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 bg-white/70 animate-pulse"
                    style={{
                      height: `${Math.random() * 40 + 5}px`,
                      animationDuration: `${Math.random() * 0.8 + 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
          
          <div 
            className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
            onClick={() => setShowVisualizer(!showVisualizer)}
          ></div>
        </div>
        
        <div className="flex items-center justify-between w-full max-w-md mb-2">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold truncate">{currentTrack.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
          
          <button 
            onClick={toggleFavorite}
            className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${
              isFavorite ? 'text-red-500' : ''
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="w-full max-w-md mb-6">
          <div className="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1">
            <div 
              className="absolute top-0 left-0 h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
            <div 
              className="absolute top-0 left-0 h-4 w-4 bg-indigo-600 dark:bg-indigo-500 rounded-full -mt-1.5 shadow-md transition-all duration-100"
              style={{ left: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{formatTime(calculateCurrentTime())}</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Shuffle"
          >
            <Shuffle size={20} />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous track"
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            onClick={togglePlayState}
            className="p-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Next track"
          >
            <SkipForward size={24} />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Repeat"
          >
            <Repeat size={20} />
          </button>
        </div>
        
        <div className="flex items-center justify-between w-full max-w-md">
          <div className="flex items-center space-x-2">
            <Volume2 size={18} />
            <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div className="h-full w-3/4 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Queue"
          >
            <ListMusic size={18} />
          </button>
        </div>
      </div>
      
      <div className="mt-10 mb-4">
        <h3 className="text-lg font-bold mb-3">Up Next</h3>
        <div className="space-y-2">
          {currentTrack.upNext.slice(0, 3).map((track) => (
            <div 
              key={track.id} 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
            >
              <img 
                src={track.albumArt} 
                alt={track.title} 
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{track.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{track.artist}</p>
              </div>
              <button 
                className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={`Play ${track.title}`}
              >
                <Play size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;