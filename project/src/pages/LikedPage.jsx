import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart } from 'lucide-react';
import SongCard from '../components/SongCard';
import MediaCard from '../components/MediaCard';
import SectionHeader from '../components/SectionHeader';

const LikedPage = () => {
  const likedSongs = [
    { id: 1, title: 'Dreaming of the Crash', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/song1/300/300'  },
    { id: 2, title: 'Cornfield Chase', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/song2/300/300' },
    { id: 3, title: 'Dust', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/song3/300/300' },
    { id: 4, title: 'Day One (Interstellar Theme)', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/song4/300/300' },
    { id: 5, title: 'Stay', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/song5/300/300' },
  ];

  const playlists = [
    { id: 1, title: 'Chill Vibes', imgUrl: 'https://picsum.photos/seed/playlist1/300/300' },
    { id: 2, title: 'Focus Flow', imgUrl: 'https://picsum.photos/seed/playlist2/300/300' },
    { id: 3, title: 'Workout Mix', imgUrl: 'https://picsum.photos/seed/playlist3/300/300' },
    { id: 4, title: 'Evening Jazz', imgUrl: 'https://picsum.photos/seed/playlist4/300/300' },
  ];

  const artists = [
    { id: 1, name: 'Taylor Swift', imgUrl: 'https://picsum.photos/seed/artist1/300/300' },
    { id: 2, name: 'The Weeknd', imgUrl: 'https://picsum.photos/seed/artist2/300/300' },
    { id: 3, name: 'Ed Sheeran', imgUrl: 'https://picsum.photos/seed/artist3/300/300' },
    { id: 4, name: 'Adele', imgUrl: 'https://picsum.photos/seed/artist4/300/300' },
  ];

  const albums = [
    { id: 1, title: 'Interstellar', artist: 'Hans Zimmer', imgUrl: 'https://picsum.photos/seed/album1/300/300' },
    { id: 2, title: 'Hogwarts Legacy', artist: 'Various Artists', imgUrl: 'https://picsum.photos/seed/album2/300/300' },
    { id: 3, title: 'Tenet', artist: 'Ludwig Göransson', imgUrl: 'https://picsum.photos/seed/album3/300/300' },
    { id: 4, title: '25', artist: 'Adele', imgUrl: 'https://picsum.photos/seed/album4/300/300' },
  ];

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Liked Songs</h1>
        <Link to="/" className="px-6 py-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full transition-colors">
          Home
        </Link>
      </div>
      <p className="text-neutral-400 mb-8">219 songs</p>

      <div className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
       
          {likedSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>

      <SectionHeader title="Playlists" />
      <div className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <iframe src="https://drive.google.com/file/d/1U06KsNV6SmFWQIm1cj2qZovFE603pDiJ/preview" width="640" height="480" allow="autoplay"></iframe>

        </div>
      </div>

      <SectionHeader title="Artists" />
      <div className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <MediaCard
              key={artist.id}
              id={artist.id}
              title={artist.name}
              imageUrl={artist.imgUrl}
              type="artist"
              roundImage
            />
          ))}
        </div>
      </div>

      <SectionHeader title="Albums" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <MediaCard
              key={album.id}
              id={album.id}
              title={album.title}
              subtitle={album.artist}
              imageUrl={album.imgUrl}
              type="album"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedPage;