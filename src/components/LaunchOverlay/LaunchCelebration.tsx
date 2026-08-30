import { useEffect, useState } from 'react';
import Confetti from './Confetti';

interface LaunchCelebrationProps {
  onComplete: () => void;
}

export default function LaunchCelebration({ onComplete }: LaunchCelebrationProps) {
  const [phase, setPhase] = useState<'confetti' | 'message' | 'complete'>('confetti');

  useEffect(() => {
    // Show confetti for 2 seconds
    const confettiTimer = setTimeout(() => {
      setPhase('message');
    }, 2000);

    // Show message for 3 more seconds
    const messageTimer = setTimeout(() => {
      setPhase('complete');
    }, 5000);

    // Remove overlay after celebration
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(messageTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Confetti effect */}
      {phase === 'confetti' && <Confetti />}

      {/* Launch message */}
      {(phase === 'message' || phase === 'complete') && (
        <div className="text-center space-y-6 animate-fade-in">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
            style={{
              animation: 'heroScale 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards',
              textShadow: '0 20px 60px rgba(255, 255, 255, 0.15)',
            }}
          >
            CRAFT
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90">
              IS LIVE
            </p>
            <p className="text-sm md:text-base text-white/50 tracking-widest">
              WELCOME TO CRAFT
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
