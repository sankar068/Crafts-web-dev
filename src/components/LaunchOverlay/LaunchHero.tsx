export default function LaunchHero() {
  return (
    <div className="text-center space-y-8 md:space-y-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Eyebrow */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 font-light">
          A New Digital Standard Is Arriving
        </p>

        {/* Main hero text - CRAFT */}
        <div className="flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-none"
              style={{
                letterSpacing: '-0.02em',
                textShadow: '0 20px 60px rgba(255, 255, 255, 0.1)',
              }}>
            CRAFT
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-white/60 tracking-wide font-light max-w-2xl mx-auto">
          Digital experiences, crafted differently.
        </p>
      </div>

      {/* Since 2026 - small detail */}
      <div className="text-xs md:text-sm text-white/40 tracking-widest font-light">
        SINCE 2026
      </div>
    </div>
  );
}
