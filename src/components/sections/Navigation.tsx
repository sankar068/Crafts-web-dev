import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ onStartProject }: { onStartProject: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? 'bg-bg-elev/80 backdrop-blur-xl border border-line py-3' : 'bg-transparent border border-transparent py-2'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl font-bold tracking-tighter text-bone flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse-slow" />
            CRAFT
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-bone-dim hover:text-bone transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cobalt transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onStartProject}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-bone bg-bone/5 hover:bg-bone/10 border border-line hover:border-bone/30 px-5 py-2.5 rounded-full transition-all duration-300"
            >
              Start a Project
              <span className="text-cobalt-soft">↗</span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-bone p-2"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-xl font-bold tracking-tighter text-bone">CRAFT</span>
              <button onClick={() => setMenuOpen(false)} className="text-bone p-2" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-5 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-display text-4xl font-bold tracking-tighter text-bone hover:text-cobalt-soft transition-colors py-3 border-b border-line"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="px-5 pb-10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onStartProject();
                }}
                className="w-full text-center font-display text-lg font-semibold text-bone bg-cobalt py-4 rounded-2xl"
              >
                Start a Project ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
