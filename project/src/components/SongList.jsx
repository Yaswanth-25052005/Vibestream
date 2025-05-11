import React from 'react';

const MediaCard = ({ id, title, artist, albumArt, audioUrl }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg aspect-square mb-2">
        <img
          src={albumArt || '/default-cover.jpg'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
      </div>
      <h3 className="font-medium truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate">{artist}</p>
    </div>
  );
};

export default MediaCard;