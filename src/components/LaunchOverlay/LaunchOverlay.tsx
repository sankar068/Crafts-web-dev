import { useEffect, useState } from 'react';
import LaunchHeader from './LaunchHeader';
import LaunchHero from './LaunchHero';
import LaunchCountdown from './LaunchCountdown';
import LaunchSocialLinks from './LaunchSocialLinks';
import LaunchCelebration from './LaunchCelebration';

interface LaunchOverlayProps {
  onLaunchComplete?: () => void;
}

export default function LaunchOverlay({ onLaunchComplete }: LaunchOverlayProps) {
  const [isLaunched, setIsLaunched] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  console.log('LaunchOverlay rendering', { isLaunched, showOverlay });

  const handleLaunchMoment = () => {
    console.log('Launch moment triggered');
    setIsLaunched(true);
  };

  const handleCelebrationComplete = () => {
    console.log('Celebration complete');
    setShowOverlay(false);
    onLaunchComplete?.();
  };

  if (!showOverlay) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Main content */}
      <div style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}>
        
        <LaunchHeader />

        {isLaunched ? (
          <LaunchCelebration onComplete={handleCelebrationComplete} />
        ) : (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 16px'
          }}>
            <LaunchHero />
            <LaunchCountdown onLaunchMoment={handleLaunchMoment} />
          </div>
        )}

        <LaunchSocialLinks />
      </div>
    </div>
  );
}
