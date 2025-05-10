export const mockTracks = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 203,
    upNext: []
  },
  {
    id: '2',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    albumArt: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 230,
    upNext: []
  },
  {
    id: '3',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 215,
    upNext: []
  },
  {
    id: '4',
    title: 'Dynamite',
    artist: 'BTS',
    album: 'BE',
    albumArt: 'https://images.pexels.com/photos/1994818/pexels-photo-1994818.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 199,
    upNext: []
  },
  {
    id: '5',
    title: 'Butter',
    artist: 'BTS',
    album: 'Butter',
    albumArt: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 188,
    upNext: []
  },
  {
    id: '6',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    albumArt: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: 194,
    upNext: []
  }
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

export const mockCurrentTrack = mockTracks[0];