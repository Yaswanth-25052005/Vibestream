import React from 'react';
import { Play, Heart } from 'lucide-react';

const SongCard = ({ song, onClick }) => {
  return (
    <div 
      className="bg-[#1A1A1A] rounded-md overflow-hidden group hover:bg-[#282828] transition-colors duration-300 cursor-pointer"
      onClick={() => onClick(song)} // Handle click to select the song
    >
      <div className="relative">
        <img 
          src={song.imgUrl} 
          alt={`${song.title} by ${song.artist}`} 
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-[#1DB954] rounded-full p-3 transform scale-90 hover:scale-100 transition-transform">
            <Play className="w-6 h-6 text-black" fill="black" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 truncate">{song.title}</h3>
        <p className="text-xs text-neutral-400">{song.artist}</p>
        <div className="mt-2 flex items-center justify-between">
          <button className="text-neutral-400 hover:text-[#1DB954] transition-colors">
            <Heart className="w-4 h-4" fill="#1DB954" />
          </button>
          <span className="text-xs text-neutral-500">3:45</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
