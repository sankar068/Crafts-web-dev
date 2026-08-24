import { useReveal } from '@/lib/useReveal';

const SEO_CATEGORIES = [
  'Technical SEO',
  'Semantic Structure',
  'Performance',
  'Responsive Architecture',
  'Metadata',
  'Indexability',
  'Core Web Vitals',
  'Content Structure',
  'Search Visibility',
];

export default function SeoSection() {
  const ref = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
              SEO & Performance
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
              BEAUTIFUL ISN'T ENOUGH.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
            <h3 className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-tighter text-bone-dim">
              IT HAS TO BE FOUND.
            </h3>
          </div>
        </div>

        <div ref={ref2} className="reveal-up grid grid-cols-2 md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {SEO_CATEGORIES.map((cat, i) => (
            <div
              key={cat}
              className="bg-bg-elev p-6 md:p-8 flex items-center gap-4 group hover:bg-bone/[0.03] transition-colors duration-300"
            >
              <span className="font-display text-sm text-muted w-8">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-bone-dim group-hover:text-bone transition-colors text-sm md:text-base font-medium">
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
