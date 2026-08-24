import { useReveal } from '@/lib/useReveal';

type SectionHeadingProps = {
  index?: string;
  label: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ index, label, title, className = '' }: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal-up ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        {index && <span className="font-display text-sm text-cobalt-soft tracking-widest">{index}</span>}
        <span className="text-xs uppercase tracking-[0.2em] text-muted font-medium">{label}</span>
        <div className="flex-1 h-px bg-line" />
      </div>
      <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tighter text-bone">
        {title}
      </h2>
    </div>
  );
}
