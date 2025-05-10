import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AudioPlayer from './AudioPlayer';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/songs') // Update with your backend URL
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      <div className="w-full text-center mb-6">
        <h2 className="text-2xl font-bold">Song List</h2>
      </div>

      {/* Displaying the list of songs */}
      {songs.map(song => (
        <div
          key={song.id}
          className="cursor-pointer w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
          onClick={() => handleSelectSong(song)} // Set song when clicked
        >
          <div className="w-full">
            <img
              src={song.coverImageUrl}
              alt={song.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">{song.title}</h3>
              <p className="text-sm text-gray-500">{song.artist}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Display Audio Player for the selected song */}
      {selectedSong && (
        <div className="w-full flex justify-center mt-6">
          <AudioPlayer
            title={selectedSong.title}
            artist={selectedSong.artist}
            audioUrl={`https://docs.google.com/uc?export=download&id=1U06KsNV6SmFWQIm1cj2qZovFE603pDiJ`} // Google Drive link
            coverImage={selectedSong.coverImageUrl}
          />
        </div>
      )}
    </div>
  );
};

export default SongList;
