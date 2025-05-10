import React from 'react';
import { playlists } from '../data/mockData';
import { PlaylistCard } from '../components/PlaylistCard';

export const Playlists = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section>
        <div className="bg-gradient-to-b from-purple-900 to-transparent p-8 -mx-8 -mt-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">Your Playlists</h1>
          <p className="text-gray-300">All your created and saved playlists in one place</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {playlists.map(playlist => (
            <PlaylistCard 
              key={playlist.id} 
              playlist={playlist} 
              onClick={() => {
                console.log(`Navigate to playlist: ${playlist.id}`);
              }} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};