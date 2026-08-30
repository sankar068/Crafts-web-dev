import { useRef } from 'react';
import { useReveal } from '@/lib/useReveal';
import Magnetic from '@/components/Magnetic';
import MaskedHeading from '@/components/MaskedHeading';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection({ onStartProject }: { onStartProject: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  const bgRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = bgRef.current;
    const reveal = revealRef.current;
    if (!el || !reveal) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.background = `radial-gradient(ellipse 50% 50% at ${x}% ${y}%, rgba(59,91,255,0.15), transparent 70%)`;

    const mask = `radial-gradient(circle 260px at ${x}% ${y}%, black 0%, rgba(0,0,0,0.6) 45%, transparent 100%)`;
    reveal.style.webkitMaskImage = mask;
    reveal.style.maskImage = mask;
    reveal.style.opacity = '1';
  };

  const handleLeave = () => {
    const el = bgRef.current;
    const reveal = revealRef.current;
    if (el) el.style.background = 'transparent';
    if (reveal) reveal.style.opacity = '0';
  };

  return (
    <section className="relative py-30 md:py-40 border-t border-line overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div ref={bgRef} className="absolute inset-0 transition-all duration-300" />
      <div
        ref={revealRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/images/crafts-logo-faded.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[40rem] h-[40rem] rounded-full bg-cobalt/[0.04] blur-3xl" />
      </div>

      <div ref={ref} className="reveal-up relative z-10 mx-auto max-w-5xl px-5 md:px-8 text-center">
        <MaskedHeading
          text="HAVE SOMETHING WORTH CRAFTING?"
          tag="h2"
          mediaType="image"
          src="/assets/images/crafts-logo.png"
          fillScale={1.3}
          parallax={34}
          reveal="wipe"
          trigger="view"
          duration={1.2}
          align="center"
          weight={700}
          tracking={-0.04}
          lineHeight={0.98}
          textScale={0.08}
          className="font-display"
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnetic strength={0.2}>
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-bone bg-cobalt hover:bg-cobalt-soft transition-colors duration-300 px-8 py-4 rounded-full"
            >
              START A PROJECT
              <ArrowUpRight size={20} />
            </button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-bone border border-line hover:border-bone/30 transition-colors duration-300 px-8 py-4 rounded-full"
            >
              VIEW OUR WORK
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
