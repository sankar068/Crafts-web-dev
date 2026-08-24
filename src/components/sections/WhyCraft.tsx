import { useEffect, useRef } from 'react';

const LINES = [
  'WE CARE ABOUT THE FIRST SECOND.',
  'WE CARE ABOUT THE LAST CLICK.',
  'WE CARE ABOUT THE DETAILS IN BETWEEN.',
  'BECAUSE DIGITAL PRESENCE ISN\'T DECORATION.',
  'IT\'S PERCEPTION.',
];

export default function WhyCraft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.why-line');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">Why CRAFT</span>
        </div>

        <div ref={containerRef} className="space-y-6 md:space-y-8">
          {LINES.map((line, i) => (
            <p
              key={i}
              className="why-line reveal-up font-display text-[clamp(1.5rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tighter"
              style={{
                transitionDelay: `${i * 100}ms`,
                color: i >= 3 ? 'var(--bone-dim)' : 'var(--bone)',
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
