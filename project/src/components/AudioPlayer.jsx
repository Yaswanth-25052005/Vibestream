import React, { useState, useRef } from 'react';

const AudioPlayer = ({ title, artist, audioUrl, coverImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-[#1A1A1A] rounded-xl shadow-lg">
      <img
        src={coverImage}
        alt="Song Cover"
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-neutral-400 mb-4">{artist}</p>
      <audio ref={audioRef} src={audioUrl} />
      <button
        onClick={togglePlay}
        className="text-lg text-white bg-[#1DB954] p-2 rounded-full mt-4"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
