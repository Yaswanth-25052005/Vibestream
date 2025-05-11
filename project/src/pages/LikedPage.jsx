import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Music, PlayCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import MediaCard from '../components/MediaCard';
import { userPlaylists, recentlyPlayed } from '../data/memData';

const LikedPage = () => {
  const likedSongs = [
    {
      id: 1,
      title: 'Daaku Maharaj',
      artist: 'S S Thaman',
      pictureUrl: 'https://static.toiimg.com/thumb/msid-117166761,width-400,resizemode-4/117166761.jpg',
      audioUrl: 'https://docs.google.com/uc?export=download&id= 1_ixOeh-Ncqfkb5s9MNS4X1JMZ3KGEnHx',
    },
    {
      id: 2,
      title: 'Game Changer',
      artist: 'S S Thaman',
      pictureUrl: 'https://content.tupaki.com/h-upload/2024/09/07/508518-game.gif',
      audioUrl: 'https://docs.google.com/uc?export=download&id= 1Hi3eoarJYlRIFM4eh2N3JSECmyNP2f-A',
    },
    {
      id: 3,
      title: 'Pushpa-2',
      artist: 'Devi Sri Prasad',
      pictureUrl: 'https://images.moneycontrol.com/static-mcnews/2024/12/20241205070538_jdjdiwkjncjncc-2024-12-05T123407.366.jpg?impolicy=website&width=770&height=431',
      audioUrl: 'https://docs.google.com/uc?export=download&id= 1MuV1Dx9DXSsd0K1Nbti84bXE3lGgacQ2',
    },
    {
      id: 4,
      title: 'Indra',
      artist: 'Mani Sharma',
      pictureUrl: 'https://naasongs.com.co/wp-content/uploads/2018/10/Indra-2002jpeg.jpg',
      audioUrl: 'https://docs.google.com/uc?export=download&id= 1eDdgNfWIiyWgh9zs-UkyB1E29t24ieb9',
    },
    {
      id: 5,
      title: 'House of Ballons',
      artist: 'The Weekend',
      pictureUrl: 'https://m.media-amazon.com/images/I/61a-hrmlg0L._UF1000,1000_QL80_.jpg',
      audioUrl: 'https://docs.google.com/uc?export=download&id= 15zfuIGNI8Y7YAOvrzoDAe7RHP2Fi0V5L',
    },
  ];

  return (
    <div className="py-8">
     

      {/* Liked Songs Section */}
      <SectionHeader title="Liked Songs" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        {likedSongs.map((song) => (
          <MediaCard
            key={song.id}
            id={song.id}
            title={song.title}
            subtitle={song.artist}
            imageUrl={song.pictureUrl}
            audioUrl={song.audioUrl}
            type="song"
          />
        ))}
      </div>

{/* Your Playlists Section */}
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

export default LikedPage;