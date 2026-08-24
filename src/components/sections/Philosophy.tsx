import { useReveal } from '@/lib/useReveal';

export default function Philosophy() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
              Philosophy
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
              CRAFT IS IN<br />
              <span className="text-bone-dim">THE DETAILS.</span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            <p className="text-lg md:text-xl text-bone-dim leading-relaxed">
              Every interaction, layout, transition and line of code exists for a reason. We combine
              strategy, design, technology and performance to create digital experiences that look
              exceptional and work even harder.
            </p>

            <div className="grid grid-cols-2 gap-px bg-line mt-4 rounded-2xl overflow-hidden">
              {[
                { label: 'Strategy', value: '01' },
                { label: 'Design', value: '02' },
                { label: 'Technology', value: '03' },
                { label: 'Performance', value: '04' },
              ].map((item) => (
                <div key={item.label} className="bg-bg-elev p-6 flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-cobalt-soft">{item.value}</span>
                  <span className="text-bone-dim text-sm uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
