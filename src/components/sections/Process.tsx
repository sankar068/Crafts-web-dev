import { useReveal } from '@/lib/useReveal';

const STEPS = [
  { num: '01', title: 'DISCOVER', desc: 'We dig into your goals, audience and constraints to understand what success actually looks like.' },
  { num: '02', title: 'DEFINE', desc: 'We shape the strategy, scope and information architecture that will guide every decision.' },
  { num: '03', title: 'DESIGN', desc: 'We craft the visual language, interface system and interaction patterns that define the experience.' },
  { num: '04', title: 'BUILD', desc: 'We engineer production-ready, performance-first code with modern technologies and clean architecture.' },
  { num: '05', title: 'REFINE', desc: 'We test, iterate and optimize across devices, browsers and real-world conditions until it feels right.' },
  { num: '06', title: 'LAUNCH', desc: 'We deploy, monitor and support the experience as it meets the world and your audience.' },
];

export default function Process() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="approach" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">Process</span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
            FROM IDEA TO EXPERIENCE.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-bg-elev p-8 md:p-10 group hover:bg-bone/[0.03] transition-colors duration-500"
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-cobalt-soft/30 group-hover:text-cobalt-soft transition-colors duration-500 block mb-6">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-bone mb-3">{step.title}</h3>
              <p className="text-bone-dim leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
