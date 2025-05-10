import React from 'react';
import { Clock } from 'lucide-react';
import { recentlyPlayed } from '../data/mockData';
import { TrackItem } from '../components/TrackItem';

export const RecentlyPlayed = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section>
        <div className="bg-gradient-to-b from-purple-900 to-transparent p-8 -mx-8 -mt-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">Recently Played</h1>
          <p className="text-gray-300">Listen again to your recently played tracks</p>
        </div>
        
        <div className="bg-black bg-opacity-20 rounded-xl p-6">
          <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 p-2 border-b border-gray-800 mb-4 text-gray-400 text-sm">
            <div className="w-10">#</div>
            <div>Title</div>
            <div className="hidden md:block">Album</div>
            <div className="flex items-center">
              <Clock size={16} />
            </div>
          </div>
          
          <div className="space-y-1">
            {recentlyPlayed.map((track, index) => (
              <TrackItem 
                key={track.id} 
                track={track} 
                index={index} 
                showPlayedAt={true}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};