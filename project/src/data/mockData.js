
export const mockTracks = [
  {
  id: 1,
  title: "Jagadeka Veerudu Athiloka Sundari",
  artist: "S.P.BalaSubramanyam",
  albumArt: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/jagadeka-veerudu-atiloka-sundari-et00443912-1745927725.jpg",
  audioUrl: "https://docs.google.com/uc?export=download&id= 10Kig6Sz-hw3_8iKS8vhmb5pLecCUc2sV",
  },
  {
    id: '2',
    title: 'Vikram',
    artist: 'Anirudh RaviChandran',
    albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_4DuNSmYs7fdFTTDdE1TZYwoMYk-RLuNjw&s',
    audioUrl: "https://docs.google.com/uc?export=download&id=13I8kek6RJNW9sHVc6weIyFHUteZGsEWW",

  },


 {
    id: '3',
    title: 'Aawara',
    artist: 'Anirudh RaviChandran',
    albumArt: 'https://m.media-amazon.com/images/S/pv-target-images/bf6d4591b6715081bcec0715af4c7d9e26acbadddab406e8f2db255891b1eb2c.jpg',
    audioUrl: "https://docs.google.com/uc?export=download&id= 1U06KsNV6SmFWQIm1cj2qZovFE603pDiJ",

  },
 {
    id: '4',
    title: 'Thug Life',
    artist: 'A.R.Rahman',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/9/95/Thug_Life_2025.jpg',
    audioUrl: "https://docs.google.com/uc?export=download&id= 1vyGNdJcHPQjU5KpMGQJxnwLyCNF3mTxj",

  },
 {
    id: '5',
    title: 'Kingdom',
    artist: 'Anirudh RaviChandran',
    albumArt: 'https://m.media-amazon.com/images/M/MV5BNTk2NGJmMTAtNWFmYS00NGU5LWJiYTgtYzBhNzYzMTc0NzdhXkEyXkFqcGc@._V1_.jpg',
    audioUrl: " https://docs.google.com/uc?export=download&id= 1c0PHf1rjHkyPxhOpKrAdhkS63TeWqPjP",

  },
  {
    id: '6',
    title: 'Retro',
    artist: 'Santosh Narayanan',
    albumArt: 'https://in.bmscdn.com/events/moviecard/ET00426563.jpg',
    audioUrl: "https://docs.google.com/uc?export=download&id= 1PTfKwotgjOiRSSprVjr22jZhIPBOPXPl",

  },

];

mockTracks[0].upNext = mockTracks.slice(1, 4);

export const mockUser = {
  id: '1',
  name: 'Alex Johnson',
  username: 'alexjmusic',
  profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  bio: 'Music enthusiast and vinyl collector. Exploring new genres and artists every day.',
  stats: {
    followers: 1243,
    following: 532,
    playlists: 37
  },
  recentlyPlayed: mockTracks,
  topArtists: [
    {
      id: '1',
      name: 'The Weeknd',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      name: 'BTS',
      image: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      name: 'Billie Eilish',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      name: 'Dua Lipa',
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      name: 'Tyler, The Creator',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      name: 'Kendrick Lamar',
      image: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ],
  playlists: [
    {
      id: '1',
      name: 'Chill Vibes',
      coverImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      trackCount: 23
    },
    {
      id: '2',
      name: 'Workout Mix',
      coverImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
      trackCount: 18
    },
    {
      id: '3',
      name: 'Focus & Study',
      coverImage: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
      trackCount: 32
    },
    {
      id: '4',
      name: 'Party Anthems',
      coverImage: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
      trackCount: 41
    }
  ]
};

export const playlists = mockUser.playlists;

export const mockCurrentTrack = mockTracks[0];