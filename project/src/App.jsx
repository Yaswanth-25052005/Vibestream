import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LikedPage from './pages/LikedPage';
import Profile from './pages/Profile';
import NowPlayingWrapper from './pages/NowPlayingWrapper';
import LoginPage from './pages/LoginPage';
import { MusicProvider } from './context/MusicContext';
import { mockUser, mockCurrentTrack } from './data/mockData';

function AppRoutes({ user, currentTrack, setCurrentTrack, isPlaying, setIsPlaying }) {
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/home',
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
          <NowPlayingWrapper />
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