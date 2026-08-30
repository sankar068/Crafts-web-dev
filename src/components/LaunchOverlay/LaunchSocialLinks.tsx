export default function LaunchSocialLinks() {
  return (
    <footer className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-8 border-t border-white/5 gap-4 md:gap-0">
      {/* Left: Info text */}
      <div className="text-xs md:text-sm text-white/40 font-light tracking-wide">
        © CRAFT FOR THE NEXT DIGITAL
      </div>

      {/* Right: Social Links */}
      <div className="flex items-center gap-8 md:gap-12">
        <a
          href="https://www.instagram.com/thecrafts.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide group flex items-center gap-2"
        >
          <span>INSTAGRAM</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
        </a>

        <div className="w-px h-4 bg-white/10" />

        <a
          href="mailto:hellowearecraft@gmail.com"
          className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide group flex items-center gap-2"
        >
          <span>EMAIL</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
        </a>
      </div>
    </footer>
  );
}
