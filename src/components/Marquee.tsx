const CLIENTS = ['InnoTech Hub', 'CloutCulturr'];

export default function Marquee() {
  // Duplicate clients enough times for seamless loop
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  
  return (
    <div className="relative overflow-hidden py-6 border-y border-line">
      <div className="marquee-track">
        {items.map((client, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl font-semibold text-bone-dim/40 whitespace-nowrap">
            {client}
            <span className="text-cobalt-soft/40 mx-6 md:mx-8">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
