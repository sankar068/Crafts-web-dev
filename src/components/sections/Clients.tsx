import { useReveal } from '@/lib/useReveal';

const CLIENTS = ['InnoTech Hub', 'CloutCulturr', 'Nuvia Technical Club', 'Gradient Club'];

export default function Clients() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="clients" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
            Client Trust & Satisfaction
          </span>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tighter text-bone-dim max-w-3xl">
            TRUSTED BY PEOPLE BUILDING SOMETHING.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="bg-bg-elev py-12 px-6 flex items-center justify-center text-center group hover:bg-bone/[0.03] transition-colors duration-300"
            >
              <span className="font-display text-lg md:text-xl font-semibold text-bone-dim group-hover:text-bone transition-colors tracking-tight">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tightest leading-[0.95] text-bone">
              90–95%
            </p>
            <p className="mt-2 text-sm text-muted">
              Self-reported client satisfaction
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-bone-dim leading-relaxed">
              We build around feedback, iterate relentlessly and stay involved until the experience
              feels right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
