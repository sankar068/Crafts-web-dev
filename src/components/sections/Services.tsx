import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'High-end interface design focused on clarity, personality and conversion.',
    caps: ['Interface Design', 'Visual Systems', 'Conversion Design', 'Prototyping'],
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Fast, scalable and production-ready websites built around modern technologies.',
    caps: ['React / TypeScript', 'Performance Engineering', 'Headless CMS', 'Edge Deployment'],
  },
  {
    num: '03',
    title: 'UI / UX',
    desc: 'Interfaces designed around real users, real behavior and real outcomes.',
    caps: ['User Research', 'Interaction Design', 'Usability Testing', 'Accessibility'],
  },
  {
    num: '04',
    title: 'Brand Experience',
    desc: 'Digital identities that translate a brand into a consistent online experience.',
    caps: ['Identity Systems', 'Typography', 'Color & Motion', 'Brand Guidelines'],
  },
  {
    num: '05',
    title: 'SEO & Performance',
    desc: 'Technical foundations designed for discoverability, speed and long-term growth.',
    caps: ['Technical SEO', 'Core Web Vitals', 'Structured Data', 'Indexability'],
  },
  {
    num: '06',
    title: 'Digital Experiences',
    desc: 'Interactive websites and digital products designed to create memorable experiences.',
    caps: ['Interactive Web', 'Motion Design', '3D / WebGL', 'Immersive Storytelling'],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">Services</span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
            What we craft.
          </h2>
        </div>

        <div className="border-t border-line">
          {SERVICES.map((service, i) => {
            const isOpen = active === i;
            return (
              <div key={service.num} className="border-b border-line">
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-7 md:py-8 text-left group"
                >
                  <span className="font-display text-sm text-cobalt-soft w-8 shrink-0">{service.num}</span>
                  <span
                    className={`flex-1 font-display text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-tighter transition-colors duration-300 ${
                      isOpen ? 'text-bone' : 'text-bone-dim group-hover:text-bone'
                    }`}
                  >
                    {service.title}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus
                      size={28}
                      className={isOpen ? 'text-cobalt-soft' : 'text-muted group-hover:text-bone-dim'}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-14 grid md:grid-cols-2 gap-8">
                        <p className="text-lg text-bone-dim leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2 md:justify-end md:items-start">
                          {service.caps.map((cap) => (
                            <span
                              key={cap}
                              className="text-xs uppercase tracking-wider text-bone-dim border border-line rounded-full px-3 py-1.5"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
