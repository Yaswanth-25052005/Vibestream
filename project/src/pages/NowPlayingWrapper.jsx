import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Heart, ChevronLeft } from 'lucide-react';

const NowPlayingWrapper = () => {
  const { state: song } = useLocation();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);
  const audioRef = useRef(null);

  // Fix Google Drive URLs to direct download format
  const fixGoogleDriveUrl = (url) => {
    if (!url) return null;
    
    // Handle Google Drive URLs
    if (url.includes('drive.google.com/file/d/')) {
      const fileId = url.match(/\/file\/d\/([^\/]+)/)?.[1];
      if (fileId) {
        return `https://docs.google.com/uc?export=download&id=${fileId}`;
      }
    }
    
    // Handle Google Drive preview URLs
    if (url.includes('drive.google.com/uc?id=')) {
      return url;
    }
    
    return url;
  };

  const audioUrl = fixGoogleDriveUrl(song?.audioUrl || song?.audio_url);
  const imageUrl = song?.pictureUrl || song?.cover_image || '/default-cover.jpg';

  useEffect(() => {
    if (!song) {
      navigate('/');
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    // Reset error state when song changes
    setError(null);
    setImageError(false);

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoaded = () => {
      setDuration(audio.duration);
      // Auto-play when loaded if coming from navigation
      if (!isPlaying && audioUrl) {
        audio.play().catch(err => {
          console.error('Autoplay failed:', err);
          setError('Playback requires user interaction. Click play to start.');
        });
        setIsPlaying(true);
      }
    };

    const handleError = (err) => {
      console.error('Audio error:', err);
      setError('');
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    // Try to load the audio immediately
    if (audioUrl) {
      audio.src = audioUrl;
      audio.load();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.src = '';
    };
  }, [song, navigate, audioUrl, isPlaying]);

  const togglePlay = () => {
    if (!audioUrl) {
      setError('No audio file available for this track');
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(err => {
        console.error('Playback failed:', err);
        setError('Error playing audio. Please click play again.');
      });
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!song) {
    return (
      <div className="max-w-md mx-auto p-4 text-center">
        <p>No song selected</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Browse Songs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Navigation */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 hover:text-black transition-colors"
      >
        <ChevronLeft size={24} />
        <span className="ml-1">Back</span>
      </button>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Audio Element (hidden) */}
      <audio
        ref={audioRef}
        preload="auto"
      />

      {/* Album Art with proper error handling */}
      <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        {imageError ? (
          <div className="text-center p-4">
            <Music size={48} className="text-gray-400 mx-auto" />
            <p className="mt-2 text-gray-500">No cover image available</p>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`Cover for ${song.title}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Track Info */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold truncate">{song.title || 'Unknown Track'}</h2>
          <p className="text-gray-500 truncate">{song.artist || 'Unknown Artist'}</p>
          
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2 ml-4 ${isFavorite ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors`}
        >
          <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

     
 <iframe src="https://drive.google.com/file/d/1U06KsNV6SmFWQIm1cj2qZovFE603pDiJ/preview" width="420" height="100" allow="autoplay"></iframe>
      
     
    </div>
  );
};

export default NowPlayingWrapper;