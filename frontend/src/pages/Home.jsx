import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import useParallax from '../hooks/useParallax.js';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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

  const videoRef = useRef(null);

  // Scroll animations
  const { scrollY } = useScroll();
  // Video blurs as you scroll down
  const videoBlur = useTransform(scrollY, [0, window.innerHeight / 2], ["blur(0px)", "blur(24px)"]);
  // Hero text fades and moves up
  const heroOpacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);
  const heroY = useTransform(scrollY, [0, window.innerHeight], ["0vh", "-50vh"]);

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

  useEffect(() => {
    if (ready && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [ready]);

  return (
    <div className="relative w-full">
      {/* Sticky Fullscreen Background Video with Scroll Blur */}
      <motion.div 
        className="sticky top-0 left-0 w-full h-[100svh] z-0 overflow-hidden pointer-events-none"
        style={{ filter: videoBlur }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          src={heroVideo}
        />
        {/* Subtle gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-push-black/90 via-push-black/50 to-push-black/30" />
      </motion.div>

      {/* Hero Content Overlay */}
      <section className="relative z-10 flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 md:px-10 bg-transparent -mt-[100svh]">
        <motion.div 
          className="relative z-10"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <WordPullUp
            words="Brand Forward."
            trigger={ready}
            className="push-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] tracking-tight"
            wrapperFramerProps={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              },
              exit: {
                opacity: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-8 max-w-sm text-sm sm:text-base text-push-white/80"
          >
            A global branding studio. We build brands that mean something, and stay that way.
          </motion.p>
        </motion.div>
      </section>

      <div className="relative z-10">
        <Marquee items={['Brand Strategy', 'Identity', 'Rebranding', 'Social Media', 'Copywriting', 'Ad Campaigns', 'UI/UX Design', 'E-Commerce', 'Web Development', 'Content Production', 'IT Solutions']} />
      </div>

      <section className="bg-transparent relative z-10 px-5 py-28 text-push-white md:px-10 md:py-44">
        <Reveal><p className="push-display max-w-4xl text-[9vw] md:text-[5.5vw]">Most brands look busy. Few look built.</p></Reveal>
        <Reveal delay={150}><p className="mt-10 max-w-md text-base text-push-white/80">We treat branding as infrastructure: the foundation everything else stands on.</p></Reveal>
        <Reveal delay={250}><Link to="/approach" className="push-link mt-8 text-push-white hover:text-white/70">See how we work</Link></Reveal>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-44 relative z-10 bg-transparent">
        <Reveal><h2 className="push-display mb-14 text-5xl md:text-8xl">Selected work</h2></Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8">
          {work.map((w, i) => <WorkFrame key={w} title={w} i={i} />)}
        </div>
      </section>
    </div>
  );
}
