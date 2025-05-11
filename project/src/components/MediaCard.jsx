import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaCard = ({ id, title, subtitle, imageUrl, audioUrl, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (audioUrl) {
      navigate('/now-playing', {
        state: {
          id,
          title,
          artist: subtitle,
          audioUrl,
          pictureUrl: imageUrl
        }
      });
    }
  };

  return (
    <div 
      className="group cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-2">
        <img
          src={imageUrl || '/default-cover.jpg'}
          alt={title}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all"
        />
        {audioUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        )}
      </div>
      <h3 className="font-medium truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate">{subtitle}</p>
    </div>
  );
};

export default MediaCard;