import { useEffect, useState } from 'react';

interface CountdownState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isLaunched: boolean;
}

interface LaunchCountdownProps {
  onLaunchMoment: () => void;
}

export default function LaunchCountdown({ onLaunchMoment }: LaunchCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isLaunched: false,
  });

  const [prevCountdown, setPrevCountdown] = useState<CountdownState>(countdown);
  const [hasTriggeredLaunch, setHasTriggeredLaunch] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      // Target launch time: 30 August 2026, 11:11:11 PM IST
      // IST is UTC+05:30
      // Using a fixed timestamp that represents this moment
      const targetDate = new Date('2026-08-30T23:11:11+05:30').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isLaunched: true,
        });
        
        // Trigger launch only once
        if (!hasTriggeredLaunch) {
          setHasTriggeredLaunch(true);
          onLaunchMoment();
        }
        return;
      }

      // Calculate time units
      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setPrevCountdown(countdown);
      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        isLaunched: false,
      });
    };

    // Calculate immediately on mount
    calculateCountdown();

    // Update every second
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [hasTriggeredLaunch, onLaunchMoment]);

  const CountdownUnit = ({
    value,
    label,
    prevValue,
  }: {
    value: string;
    label: string;
    prevValue: string;
  }) => {
    const hasChanged = value !== prevValue;

    return (
      <div className="flex flex-col items-center">
        {/* Number display */}
        <div className="relative h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center overflow-hidden">
          <div
            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-white transition-all duration-500 ${
              hasChanged ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{
              letterSpacing: '0.05em',
            }}
          >
            {value}
          </div>
        </div>

        {/* Label */}
        <p className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-light mt-2 md:mt-4">
          {label}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      {/* Countdown Label */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-px bg-white/30" />
        <p className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-light whitespace-nowrap">
          The Countdown Begins
        </p>
        <div className="w-8 h-px bg-white/30" />
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-3xl mx-auto px-4 sm:px-8">
        <CountdownUnit value={countdown.days} label="Days" prevValue={prevCountdown.days} />
        <CountdownUnit value={countdown.hours} label="Hours" prevValue={prevCountdown.hours} />
        <CountdownUnit value={countdown.minutes} label="Minutes" prevValue={prevCountdown.minutes} />
        <CountdownUnit value={countdown.seconds} label="Seconds" prevValue={prevCountdown.seconds} />
      </div>

      {/* Launch date info */}
      <div className="flex items-center justify-center gap-8 text-xs md:text-sm text-white/40 font-light tracking-wide">
        <span>31 AUGUST 2026</span>
        <span>11:11:11 PM IST</span>
      </div>
    </div>
  );
}
