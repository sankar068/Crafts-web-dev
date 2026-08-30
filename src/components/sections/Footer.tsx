import { Instagram, Mail } from 'lucide-react';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/weare.crafts/', icon: Instagram },
  { label: 'Email', href: 'mailto:hellowearecraft@gmail.com', icon: Mail },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative border-t border-line py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-2xl font-bold tracking-tighter text-bone flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cobalt" />
              CRAFT
            </button>
            <p className="mt-4 text-sm text-muted">Since 2026</p>
            <p className="mt-2 text-sm text-bone-dim max-w-xs">
              Creative Research & Advanced Frameworks for Technology.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-bone-dim hover:text-bone transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">Socials</p>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((social) => (
                <button
                  key={social.label}
                  onClick={() => scrollTo(social.href)}
                  className="inline-flex items-center gap-2 text-sm text-bone-dim hover:text-bone transition-colors"
                >
                  <social.icon size={16} />
                  {social.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} CRAFT. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Crafted with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
