import { useReveal } from '@/lib/useReveal';

const DIMENSIONS = [
  { label: 'Design', value: 95, note: 'Visual craft & interaction' },
  { label: 'Performance', value: 92, note: 'Load time & optimization' },
  { label: 'SEO', value: 90, note: 'Discoverability & structure' },
  { label: 'Responsiveness', value: 96, note: 'Cross-device consistency' },
  { label: 'Accessibility', value: 88, note: 'Keyboard & screen reader' },
];

export default function Performance() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
            Performance Visualization
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
            Quality, measured.
          </h2>
          <p className="mt-4 text-sm text-muted max-w-lg">
            Internal benchmarks across five quality dimensions. Not audited third-party scores.
          </p>
        </div>

        <div className="bg-bg-elev border border-line rounded-3xl p-6 md:p-10">
          <div className="space-y-8">
            {DIMENSIONS.map((dim) => (
              <div key={dim.label}>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg md:text-xl font-semibold text-bone">{dim.label}</span>
                    <span className="text-sm text-muted hidden md:inline">{dim.note}</span>
                  </div>
                  <span className="font-display text-2xl md:text-3xl font-bold text-cobalt-soft tabular-nums">
                    {dim.value}
                  </span>
                </div>
                <div className="h-1.5 bg-line rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cobalt to-cobalt-soft rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${dim.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'First Contentful Paint', value: '< 1.2s' },
              { label: 'Largest Contentful Paint', value: '< 2.0s' },
              { label: 'Cumulative Layout Shift', value: '< 0.05' },
              { label: 'Time to Interactive', value: '< 2.5s' },
            ].map((metric) => (
              <div key={metric.label}>
                <p className="text-xs uppercase tracking-wider text-muted">{metric.label}</p>
                <p className="mt-2 font-display text-xl font-bold text-bone">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
