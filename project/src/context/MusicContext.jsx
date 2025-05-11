import { createContext, useState, useContext } from 'react';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null); // Start with null to ensure nothing is selected initially
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([]); // A list of tracks

  // Assuming the playlist is being set with an array of track objects
  const nextTrack = () => {
    if (!currentTrack) return; // No track to play
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const nextTrackIndex = (currentIndex + 1) % playlist.length;
    setCurrentTrack(playlist[nextTrackIndex]);
    setIsPlaying(true); // Optionally start playing the new track immediately
  };

  const prevTrack = () => {
    if (!currentTrack) return;
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const prevTrackIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrack(playlist[prevTrackIndex]);
    setIsPlaying(true); // Optionally start playing the previous track immediately
  };

  return (
    <MusicContext.Provider value={{ currentTrack, setCurrentTrack, isPlaying, setIsPlaying, nextTrack, prevTrack }}>
      {children}
    </MusicContext.Provider>
  );
};