import ScrollReveal from '@/components/ScrollReveal';

export default function ScrollIntro() {
  return (
    <section className="relative py-30 md:py-38 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-16 md:mb-24">
          <ScrollReveal
            children="WE DON'T JUST BUILD WEBSITES."
            containerClassName="text-center"
            textClassName="font-display font-bold tracking-tighter text-bone text-[clamp(1.8rem,6vw,5rem)] leading-[1.1]"
            baseOpacity={0.08}
            blurStrength={6}
          />
        </div>

        <div className="mb-16 md:mb-24">
          <ScrollReveal
            children="WE BUILD DIGITAL PRESENCE."
            containerClassName="text-center"
            textClassName="font-display font-bold tracking-tighter text-bone text-[clamp(1.8rem,6vw,5rem)] leading-[1.1]"
            baseOpacity={0.08}
            blurStrength={6}
          />
        </div>

        <div>
          <ScrollReveal
            children="THAT WORKS."
            containerClassName="text-center"
            textClassName="font-display font-bold tracking-tighter text-cobalt-soft text-[clamp(2rem,8vw,6.5rem)] leading-[1.1]"
            baseOpacity={0.08}
            blurStrength={6}
          />
        </div>
      </div>
    </section>
  );
}
