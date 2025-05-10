import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Maximize2, ListMusic } from 'lucide-react';

const PlayerBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-1/3">
          <img 
            src="https://picsum.photos/seed/current/60/60" 
            alt="Current track" 
            className="w-14 h-14 rounded-md mr-3"
          />
          <div>
            <h4 className="text-sm font-semibold">Poker Face</h4>
            <p className="text-xs text-neutral-400">Lady Gaga</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="text-neutral-400 hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition-transform">
              <Play className="w-6 h-6 text-black" fill="black" />
            </button>
            <button className="text-neutral-400 hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-full max-w-md mt-2 flex items-center gap-2">
            <span className="text-xs text-neutral-400">2:15</span>
            <div className="h-1 flex-1 bg-neutral-600 rounded-full">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-neutral-400">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end w-1/3 gap-3">
          <button className="text-neutral-400 hover:text-white transition-colors">
            <ListMusic size={20} />
          </button>
          <button className="text-neutral-400 hover:text-white transition-colors">
            <Volume2 size={20} />
          </button>
          <div className="w-24 h-1 bg-neutral-600 rounded-full">
            <div className="h-full w-2/3 bg-white rounded-full"></div>
          </div>
          <button className="text-neutral-400 hover:text-white transition-colors">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;