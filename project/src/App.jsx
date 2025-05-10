import React, { useState } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LikedPage from './pages/LikedPage';
import Profile from './pages/Profile';
import NowPlaying from './pages/NowPlaying';
import { MusicProvider } from './context/MusicContext';
import { mockUser, mockCurrentTrack } from './data/mockData';


function AppRoutes({ user, currentTrack, setCurrentTrack, isPlaying, setIsPlaying }) {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout><HomePage /></Layout>,
    },
    {
      path: '/liked',
      element: <Layout><LikedPage /></Layout>,
    },
   
    {
      path: '/profile',
      element: (
        <Layout>
          <Profile
            user={user}
            setCurrentTrack={setCurrentTrack}
            setIsPlaying={setIsPlaying}
          />
        </Layout>
      ),
    },
    {
      path: '/now-playing',
      element: (
        <Layout>
          <NowPlaying
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </Layout>
      ),
    },
  ]);

  return routes;
}

function App() {
  const [currentTrack, setCurrentTrack] = useState(mockCurrentTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [user] = useState(mockUser);

  return (
    <MusicProvider value={{ currentTrack, setCurrentTrack, isPlaying, setIsPlaying, user }}>
      <Router>
        <AppRoutes
          user={user}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Router>
    </MusicProvider>
  );
}

export default App;
