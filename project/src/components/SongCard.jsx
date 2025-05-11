import React from 'react';
import { useNavigate } from 'react-router-dom';

const MediaCard = ({ song }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/now-playing', {
      state: {
        id: song.id,
        title: song.title,
        artist: song.artist,
        audioUrl: song.audioUrl,
        pictureUrl: song.pictureUrl
      }
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded shadow-md hover:shadow-lg p-4"
    >
      <img src={song.pictureUrl} alt={song.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 font-semibold truncate">{song.title}</h3>
      <p className="text-gray-600 truncate">{song.artist}</p>
    </div>
  );
};

export default MediaCard;
