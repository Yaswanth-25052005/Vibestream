import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, PlayCircle, Music } from 'lucide-react';
import MediaCard from '../components/MediaCard';
import SectionHeader from '../components/SectionHeader';

const HomePage = () => {
  const userPlaylists = [
    { id: 1, title: 'Lo-fi Beats', imgUrl: 'https://picsum.photos/seed/lofi/300/300' },
    { id: 2, title: 'Vocal Trance Hits', imgUrl: 'https://picsum.photos/seed/trance/300/300' },
    { id: 3, title: 'Epic Soundtracks', imgUrl: 'https://picsum.photos/seed/epic/300/300' }
  ];

  const recentlyPlayed = [
    { id: 1, title: 'The Weeknd', type: 'artist', imgUrl: 'https://picsum.photos/seed/weeknd/300/300' },
    { id: 2, title: 'Viral Hits', type: 'playlist', imgUrl: 'https://picsum.photos/seed/viral/300/300' },
    { id: 3, title: 'Dark & Stormy', type: 'playlist', imgUrl: 'https://picsum.photos/seed/dark/300/300' }
  ];

  return (
    <div className="py-8">
      <div className="flex items-center gap-6 mb-8">
        <img
          src="https://i.pravatar.cc/150?img=37"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-500"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Karen Dobbins</h1>
          <p className="text-neutral-400">Pro • 1,000 followers</p>
        </div>
      </div>

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
            <p className="text-sm text-white/80">219 songs</p>
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

      <SectionHeader title="Your Playlists" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {userPlaylists.map((playlist) => (
          <MediaCard
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            imageUrl={playlist.imgUrl}
            type="playlist"
          />
        ))}
      </div>

      <SectionHeader title="Recently Played" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {recentlyPlayed.map((item) => (
          <MediaCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imgUrl}
            type={item.type}
          />
        ))}
      </div>

     
    </div>
  );
};

export default HomePage;