export default function LaunchHeader() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 border-b border-white/5">
      {/* Left: CRAFT Logo */}
      <div className="text-xl md:text-2xl font-bold tracking-wider text-white animate-fade-in">
        <span className="inline-block">
          CRAFT
        </span>
      </div>

      {/* Right: Launching Soon Status */}
      <div className="flex items-center gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-2 h-2 md:w-2.5 md:h-2.5">
          <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        <span className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-light">
          Launching Soon
        </span>
      </div>
    </header>
  );
}
