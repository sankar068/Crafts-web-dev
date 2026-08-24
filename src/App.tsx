import { useCallback } from 'react';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import ScrollIntro from '@/components/sections/ScrollIntro';
import Philosophy from '@/components/sections/Philosophy';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Marquee from '@/components/Marquee';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import SeoSection from '@/components/sections/SeoSection';
import Performance from '@/components/sections/Performance';
import Process from '@/components/sections/Process';
import WhyCraft from '@/components/sections/WhyCraft';
import About from '@/components/sections/About';
import CtaSection from '@/components/sections/CtaSection';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function App() {
  const scrollToContact = useCallback(() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="grain relative min-h-screen bg-bg">
      <Cursor />
      <Navigation onStartProject={scrollToContact} />

      <main>
        <Hero />
        <ScrollIntro />
        <Philosophy />
        <Services />
        <Work />
        <Marquee />
        <Clients />
        <Testimonials />
        <SeoSection />
        <Performance />
        <Process />
        <WhyCraft />
        <About />
        <CtaSection onStartProject={scrollToContact} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
