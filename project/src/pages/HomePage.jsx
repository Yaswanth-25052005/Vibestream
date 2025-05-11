import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, PlayCircle, Music } from 'lucide-react';
import MediaCard from '../components/MediaCard';
import SectionHeader from '../components/SectionHeader';
import { userPlaylists, recentlyPlayed } from '../data/mediaData';

const HomePage = () => {
  return (
    <div className="py-8">
      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link 
          to="/liked" 
          className="group bg-gradient-to-br from-purple-600 to-blue-400 rounded-xl p-4 flex items-center transition-transform hover:scale-[1.02] cursor-pointer"
        >
          <div className="mr-4">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Liked Songs</h3>
            <p className="text-sm text-white/80">{userPlaylists.length} songs</p>
          </div>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="w-12 h-12 text-green-400" />
          </div>
        </Link>
        
        <div className="bg-gradient-to-br from-orange-600 to-yellow-400 rounded-xl p-4 flex items-center transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="mr-4">
            <Clock className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Recently Played</h3>
            <p className="text-sm text-white/80">Last updated today</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-600 to-emerald-400 rounded-xl p-4 flex items-center transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="mr-4">
            <Music className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Your Playlists</h3>
            <p className="text-sm text-white/80">{userPlaylists.length} playlists</p>
          </div>
        </div>
      </div>

      {/* Playlists Section */}
      <SectionHeader title="Your Playlists" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {userPlaylists.map((playlist) => (
          <MediaCard
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            subtitle={playlist.artist}
            imageUrl={playlist.pictureUrl}
            audioUrl={playlist.audioUrl}
            type="playlist"
          />
        ))}
      </div>

      {/* Recently Played Section */}
      <SectionHeader title="Recently Played" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {recentlyPlayed.map((item) => (
          <MediaCard
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.artist}
            imageUrl={item.pictureUrl}
            audioUrl={item.audioUrl}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;