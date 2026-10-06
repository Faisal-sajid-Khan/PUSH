import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import useParallax from '../hooks/useParallax.js';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WordPullUp from '../components/WordPullUp.jsx';

import heroVideo from '../assets/PUSH_vid_bg_hero.mp4';

// Swap each frame for <img> once assets exist, e.g. Push_home_work_project-01_1600x1000.webp
const work = ['Project 01', 'Project 02', 'Project 03', 'Project 04'];

function WorkFrame({ title, i }) {
  const p = useParallax(0.12);
  return (
    <Reveal delay={i % 2 ? 120 : 0} className={i % 2 ? 'md:mt-32' : ''}>
      <Link to="/contact" className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-push-charcoal">
          <div ref={p} className="absolute -inset-[12%] bg-push-charcoal" />
        </div>
        <div className="mt-4 flex justify-between text-sm"><span>{title}</span><span className="text-push-mid">2026</span></div>
      </Link>
    </Reveal>
  );
}

export default function Home() {
  const a = useParallax(-0.25);
  const b = useParallax(-0.1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // If we navigated here from another page, the preloader won't exist.
    if (!document.getElementById('push-preloader')) {
      const t = setTimeout(() => setReady(true), 100); // Tiny delay for page transition
      return () => clearTimeout(t);
    }

    // Otherwise, we are on initial load. Wait for the preloader to finish its video loops.
    const handleReady = () => setReady(true);
    window.addEventListener('preloaderFinished', handleReady);
    
    // Safety fallback just in case the video fails to load or play
    const t = setTimeout(handleReady, 6000); 
    
    return () => {
      window.removeEventListener('preloaderFinished', handleReady);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 md:px-10 bg-push-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-push-black overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
            src={heroVideo}
          />
          {/* Subtle gradient overlay to ensure text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-push-black/90 via-push-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10">
          <WordPullUp
            words="Brand"
            trigger={ready}
            className="push-display text-[10vw] md:text-[7vw] lg:text-[6vw]"
          />
          <WordPullUp
            words="Forward."
            trigger={ready}
            className="push-display push-tagline -mt-[1.5vw] text-[10vw] md:text-[7vw] lg:text-[6vw]"
            wrapperFramerProps={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.3 }
              },
              exit: {
                opacity: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="relative z-10 mt-8 max-w-sm text-base text-push-white/80"
        >
          A global branding studio. We build brands that mean something, and stay that way.
        </motion.p>
      </section>

      <Marquee items={['Strategy', 'Identity', 'Voice', 'Web', 'Film', 'Systems']} />

      <section className="bg-push-white px-5 py-28 text-push-black md:px-10 md:py-44">
        <Reveal><p className="push-display max-w-4xl text-[9vw] md:text-[5.5vw]">Most brands look busy. Few look built.</p></Reveal>
        <Reveal delay={150}><p className="mt-10 max-w-md text-base text-push-charcoal">We treat branding as infrastructure: the foundation everything else stands on.</p></Reveal>
        <Reveal delay={250}><Link to="/approach" className="push-link mt-8 text-push-olive">See how we work</Link></Reveal>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-44">
        <Reveal><h2 className="push-display mb-14 text-5xl md:text-8xl">Selected work</h2></Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8">
          {work.map((w, i) => <WorkFrame key={w} title={w} i={i} />)}
        </div>
      </section>
    </>
  );
}
