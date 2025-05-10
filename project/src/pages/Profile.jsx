import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function Profile({ user, setCurrentTrack, setIsPlaying }) {
  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
          
    <div className="pt-0 md:pt-20 pb-4 px-4 max-w-screen-lg mx-auto">
     <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Profile</h1>
        <Link to="/" className="px-6 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full transition-colors">
          Home
        </Link>
      </div>
             
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-8">
        <div className="relative group">
          <img 
            src={user.profileImage} 
            alt={user.name} 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md group-hover:shadow-xl transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-full transition-all duration-300"></div>
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-3">@{user.username}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
            <div className="text-center">
              <p className="text-xl font-bold">{user.stats.followers.toLocaleString()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{user.stats.following.toLocaleString()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Following</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{user.stats.playlists}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Playlists</p>
            </div>
          </div>
          
          <p className="max-w-md">{user.bio}</p>
        </div>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {user.recentlyPlayed.slice(0, 5).map((track) => (
            <div 
              key={track.id} 
              className="group relative rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <img 
                src={track.albumArt} 
                alt={track.title} 
                className="aspect-square object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 w-full">
                  <h3 className="text-white text-sm font-medium truncate">{track.title}</h3>
                  <p className="text-gray-300 text-xs truncate">{track.artist}</p>
                </div>
                <button 
                  onClick={() => playTrack(track)}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-indigo-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Play ${track.title}`}
                >
                  <Play size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Top Artists</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {user.topArtists.slice(0, 6).map((artist) => (
            <div 
              key={artist.id} 
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-2 rounded-full overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-20 h-20 object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-full transition-all duration-300"></div>
              </div>
              <h3 className="text-sm font-medium truncate max-w-full">{artist.name}</h3>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-bold mb-4">Your Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {user.playlists.slice(0, 4).map((playlist) => (
            <div 
              key={playlist.id} 
              className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800/50 hover:shadow-md transition-all duration-300"
            
            >
              <img 
                src={playlist.coverImage} 
                alt={playlist.name} 
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{playlist.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{playlist.trackCount} tracks</p>
              </div>
              <button 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={`Play ${playlist.name}`}
              >
                <Play size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;