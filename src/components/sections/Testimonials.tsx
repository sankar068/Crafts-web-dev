import { useReveal } from '@/lib/useReveal';

const TESTIMONIALS = [
  {
    slot: '01',
    client: 'InnoTech Hub',
    quote: 'CRAFT took a scattered idea and turned it into a platform that actually feels like one product. Fast, clean, and every screen makes sense.',
    isSample: true,
  },
  {
    slot: '02',
    client: 'CloutCulturr',
    quote: 'They nailed the brand voice from the first draft. The site looks sharp, loads fast, and converts better than anything we had before.',
    isSample: true,
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
            Testimonials
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
            In their words.
          </h2>
        </div>

        <div className="space-y-px bg-line">
          {TESTIMONIALS.map((t) => (
            <div key={t.slot} className="bg-bg-elev p-8 md:p-12 grid md:grid-cols-12 gap-6 items-start">
              <span className="md:col-span-1 font-display text-sm text-cobalt-soft">{t.slot}</span>
              <div className="md:col-span-8">
                <p className="font-display text-xl md:text-2xl leading-relaxed text-bone tracking-tight">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {t.isSample && (
                  <span className="inline-block mt-4 text-xs uppercase tracking-wider text-amber border border-amber/30 rounded-full px-3 py-1">
                    Placeholder
                  </span>
                )}
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="text-bone-dim font-medium">{t.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
