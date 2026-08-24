import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

type Project = {
  num: string;
  title: string;
  category: string;
  focus: string;
  description: string;
  challenge: string;
  strategy: string;
  design: string;
  dev: string;
  experience: string;
  seo: string;
  outcome: string;
  liveUrl: string;
};

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'InnoTech Hub',
    category: 'Education / Tech Ecosystem',
    focus: 'Strategy · UI · Dev · SEO',
    description: 'An education and technology ecosystem platform connecting learners, builders and institutions.',
    challenge: 'Create a unified platform that serves multiple audiences — students, educators and institutions — without feeling fragmented or generic.',
    strategy: 'Mapped user journeys for each audience segment, then designed a shared information architecture that adapts contextually rather than branching into separate sites.',
    design: 'Built a modular interface system with a consistent visual language across audience-specific views, keeping navigation intuitive and content hierarchy clear.',
    dev: 'Implemented with React and TypeScript, optimizing for fast page transitions and a component-driven architecture that scales with new content types.',
    experience: 'Scroll-driven section reveals and contextual micro-interactions guide users through the ecosystem without overwhelming first-time visitors.',
    seo: 'Semantic HTML structure, per-page metadata, and structured data for courses and institutions to maximize discoverability in search.',
    outcome: 'A cohesive platform experience that scales across audiences while maintaining a single, recognizable brand presence.',
    liveUrl: '#',
  },
  {
    num: '02',
    title: 'CloutCulturr',
    category: 'Marketing / Creative Brand',
    focus: 'Visual Identity · Typography · Conversions',
    description: 'A modern marketing and creative brand platform built around bold visual identity and conversion.',
    challenge: 'Stand out in a saturated creative marketing space with a brand experience that is instantly recognizable and drives action.',
    strategy: 'Defined a bold typographic system and high-contrast visual direction that reflects the brand personality and supports conversion-focused layouts.',
    design: 'Oversized display typography, dynamic color blocking and intentional whitespace create a brand presence that feels confident and contemporary.',
    dev: 'Engineered for speed with optimized asset delivery and a layout that maintains visual impact across devices without sacrificing performance.',
    experience: 'Motion and interaction reinforce the brand voice — every hover, transition and scroll moment feels intentional and on-brand.',
    seo: 'Technical foundations ensure the visually-rich experience remains crawlable and indexable, with clean content structure beneath the design layer.',
    outcome: 'A brand experience that communicates personality instantly and converts visitors into engaged community members.',
    liveUrl: '#',
  },
  {
    num: '03',
    title: 'Nuvia Technical Club',
    category: 'College Tech Community',
    focus: 'Strategy · UI · Dev · Community',
    description: 'A digital home for a college technical community — events, members, and innovation in one place.',
    challenge: 'Build a community platform that feels alive and active, not just a static brochure for a college club.',
    strategy: 'Centered the experience around events and member activity, making the community the content rather than a separate feature.',
    design: 'A clean, energetic interface with a focus on event discovery and member participation, designed to feel current and community-driven.',
    dev: 'Built with a content model that supports frequent updates — events, announcements and member highlights — without requiring developer involvement each time.',
    experience: 'Interactive event cards and community highlights create a sense of ongoing activity that encourages repeat visits.',
    seo: 'Structured data for events and organization information helps the community appear in relevant local and academic searches.',
    outcome: 'A living community platform that reflects the energy of the club and makes participation feel effortless.',
    liveUrl: '#',
  },
  {
    num: '04',
    title: 'Gradient Club',
    category: "St. Peter's Engineering College — Tech Club",
    focus: 'Tech Culture · Events · Innovation',
    description: 'A tech club platform celebrating technology culture, events and student innovation.',
    challenge: 'Represent a college tech club with a digital presence that matches the ambition and creativity of its members.',
    strategy: 'Designed around the club culture — events, innovation projects and member contributions — with a visual language that feels distinctly technical and modern.',
    design: 'A dark, high-contrast aesthetic with technical motifs and a layout that highlights events and innovation work as the primary content.',
    dev: 'Implemented with performance-first principles, ensuring the media-rich experience loads quickly even on campus networks.',
    experience: 'Subtle motion and technical visual details create a premium feel that elevates the club above a typical student organization page.',
    seo: 'Optimized for local and institutional discovery, with clean semantic structure supporting both search and accessibility.',
    outcome: 'A digital presence that positions the club as a serious tech community and attracts new members and collaborators.',
    liveUrl: '#',
  },
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="relative py-22 md:py-30 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div ref={ref} className="reveal-up mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">Selected Work</span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tighter text-bone">
            SELECTED WORK
          </h2>
          <p className="mt-4 text-lg text-bone-dim max-w-xl">
            Built for people who wanted more than a website.
          </p>
        </div>

        <div className="border-t border-line">
          {PROJECTS.map((project) => (
            <button
              key={project.num}
              onClick={() => setSelected(project)}
              className="group w-full border-b border-line py-8 md:py-10 flex items-center gap-6 text-left transition-colors duration-300 hover:bg-bone/[0.02]"
            >
              <span className="font-display text-sm text-cobalt-soft w-8 shrink-0">{project.num}</span>
              <div className="flex-1">
                <h3 className="font-display text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold tracking-tighter text-bone-dim group-hover:text-bone transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.category}</p>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-sm text-bone-dim">{project.focus}</p>
              </div>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-bone-dim group-hover:text-cobalt-soft transition-colors"
              >
                <ArrowUpRight size={28} />
              </motion.span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-bg/95 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl px-5 md:px-8 py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-bone-dim hover:text-bone p-2"
                aria-label="Close case study"
              >
                <X size={24} />
              </button>

              <span className="font-display text-sm text-cobalt-soft">{selected.num}</span>
              <h3 className="mt-4 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter text-bone leading-[1]">
                {selected.title}
              </h3>
              <p className="mt-3 text-lg text-bone-dim">{selected.category}</p>
              <p className="mt-1 text-sm text-muted">{selected.focus}</p>

              <div className="mt-12 space-y-10">
                {[
                  { label: 'Intro', text: selected.description },
                  { label: 'Challenge', text: selected.challenge },
                  { label: 'Strategy', text: selected.strategy },
                  { label: 'Design', text: selected.design },
                  { label: 'Development', text: selected.dev },
                  { label: 'Experience', text: selected.experience },
                  { label: 'SEO', text: selected.seo },
                  { label: 'Final Outcome', text: selected.outcome },
                ].map((block) => (
                  <div key={block.label} className="grid md:grid-cols-12 gap-4 border-t border-line pt-6">
                    <span className="md:col-span-3 text-xs uppercase tracking-[0.2em] text-cobalt-soft font-medium">
                      {block.label}
                    </span>
                    <p className="md:col-span-9 text-lg text-bone-dim leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-line">
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-lg font-semibold text-bone hover:text-cobalt-soft transition-colors"
                >
                  View Live Project
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
