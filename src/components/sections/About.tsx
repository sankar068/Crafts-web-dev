import { useReveal } from '@/lib/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">About</span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] tracking-tighter text-bone">
              About CRAFT
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl text-bone-dim leading-relaxed">
              CRAFT was built around a simple idea: digital work should feel as good as it functions.
              We combine design thinking, technology and strategy to create digital experiences that
              help organizations communicate better, look sharper and grow online. Founded in 2025.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden">
              <div className="bg-bg-elev p-6">
                <p className="text-xs uppercase tracking-wider text-muted">Team</p>
                <div className="mt-4 space-y-1">
                  <p className="text-bone font-medium">Boyina Sankar</p>
                  <p className="text-sm text-bone-dim">Front End Developer & Designer</p>
                </div>
              </div>
              <div className="bg-bg-elev p-6">
                <p className="text-xs uppercase tracking-wider text-muted">Team</p>
                <div className="mt-4 space-y-1">
                  <p className="text-bone font-medium">Kadapala Sanjay</p>
                  <p className="text-sm text-bone-dim">Backend Developer & Database</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
