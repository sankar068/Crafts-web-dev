import { useRef, type ReactNode, type CSSProperties } from 'react';

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function Magnetic({ children, strength = 0.3, className = '', style, onClick }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)', ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
