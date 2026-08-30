/*
 * CRAFT / Nocturne Signal
 * Phase flow:
 *   "overlay" → only launch page in DOM, main site not mounted
 *   "fading"  → launch page fading out (1.2s), main site still not mounted
 *   "site"    → launch page removed, main site mounts + fades in cleanly
 */
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';

const MainSite = lazy(() => import('@/components/MainSite'));

type Phase = 'overlay' | 'fading' | 'site';

export default function App() {
  // Dev bypass: ?skip-launch in URL skips directly to main site
  const skipLaunch = new URLSearchParams(window.location.search).has('skip-launch');
  const [phase, setPhase] = useState<Phase>(skipLaunch ? 'site' : 'overlay');
  const [siteVisible, setSiteVisible] = useState(skipLaunch);

  // Lock scroll until main site is shown
  useEffect(() => {
    if (phase === 'site') {
      // Remove inline overflow style so CSS takes over (no overflow:hidden)
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    } else {
      // Lock scroll during overlay
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    };
  }, [phase]);

  // Called by Home the moment countdown hits zero
  const handleLaunched = useCallback(() => {
    // Show "We're live." for 2s then fade overlay out
    setTimeout(() => {
      setPhase('fading');
      // Remove overlay after fade, then mount main site
      setTimeout(() => {
        setPhase('site');
      }, 1200);
    }, 2000);
  }, []);

  // After site mounts, fade it in on the next paint — single rAF, no double
  useEffect(() => {
    if (phase === 'site') {
      const raf = requestAnimationFrame(() => setSiteVisible(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [phase]);

  return (
    <ErrorBoundary>

      {/* ── Main site — only mounted after overlay fully gone ── */}
      {phase === 'site' && (
        <div style={{
          opacity: siteVisible ? 1 : 0,
          transition: 'opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
        }}>
          <ErrorBoundary>
            <Suspense fallback={null}>
              <MainSite />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}

      {/* ── Launch overlay — only rendered during overlay + fading phases ── */}
      {phase !== 'site' && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          opacity: phase === 'fading' ? 0 : 1,
          transition: phase === 'fading'
            ? 'opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1)'
            : 'none',
          pointerEvents: phase === 'fading' ? 'none' : 'auto',
          overflow: 'hidden',
        }}>
          <Home onLaunched={handleLaunched} />
        </div>
      )}

    </ErrorBoundary>
  );
}
