import React from 'react';
import { Play, Headphones, Disc, User } from 'lucide-react';

const MediaCard = ({
  id,
  title,
  subtitle,
  imageUrl,
  type,
  roundImage = false
}) => {
  const getIcon = () => {
    switch (type) {
      case 'playlist':
        return <Headphones className="w-5 h-5" />;
      case 'artist':
        return <User className="w-5 h-5" />;
      case 'album':
        return <Disc className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#1A1A1A] rounded-md overflow-hidden group hover:bg-[#282828] transition-colors duration-300 cursor-pointer">
      <div className="relative">
        <div className={`aspect-square overflow-hidden ${roundImage ? 'p-4' : ''}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full h-full object-cover ${roundImage ? 'rounded-full' : ''}`}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-[#1DB954] rounded-full p-3 transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <Play className="w-6 h-6 text-black" fill="black" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {getIcon()}
          <span className="text-xs uppercase text-neutral-400">{type}</span>
        </div>
        <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>
        {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
      </div>
    </div>
  );
};

export default MediaCard;