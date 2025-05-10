import React, { createContext, useContext } from 'react';

const MusicContext = createContext(undefined);

export function MusicProvider({ children, value }) {
  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}