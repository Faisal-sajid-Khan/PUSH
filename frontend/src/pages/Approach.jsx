import Reveal from '../components/Reveal.jsx';
import WordPullUp from '../components/WordPullUp.jsx';
import { useState, useEffect, useRef } from 'react';
import SocialCards from '../components/ui/card-fan-carousel.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';

import heroVideo from '../assets/PUSH_vid_bg_hero.mp4';

const BRAND_CARDS = [
  { imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", alt: "Nike Branding" },
  { imgUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop", alt: "Rolex Luxury Watch" },
  { imgUrl: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop", alt: "Adidas Sneaker" },
  { imgUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop", alt: "Rado / Jacob & Co style Watch" },
  { imgUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop", alt: "Luxury Perfume Branding" },
  { imgUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", alt: "Automotive Luxury" },
  { imgUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop", alt: "Apple MacBook" },
];

const steps = [
  ['Discover', 'We learn the business, the market and what is true about your brand.'],
  ['Define', 'Positioning, voice and the ideas everything else will hang from.'],
  ['Design', 'Identity, systems and the assets that carry them.'],
  ['Deliver', 'Launch, guidelines and the tools to keep it consistent.'],
];

export default function Approach() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);

  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, window.innerHeight / 2], [0, 1]);

  useEffect(() => {
    // Navigating between pages skips preloader
    if (!document.getElementById('push-preloader')) {
      const t = setTimeout(() => setReady(true), 100);
      return () => clearTimeout(t);
    }

    const handleReady = () => setReady(true);
    window.addEventListener('preloaderFinished', handleReady);
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
      {/* Sticky Fullscreen Background Video with Optimized Scroll Blur */}
      <div className="sticky top-0 left-0 w-full h-[100svh] z-0 overflow-hidden pointer-events-none">
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
        
        {/* Hardware-accelerated blur layer */}
        <motion.div 
          className="absolute inset-0 backdrop-blur-2xl bg-push-black/10"
          style={{ opacity: blurOpacity, willChange: 'opacity' }}
        />
      </div>

      <section className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 bg-transparent -mt-[100svh]">
        <WordPullUp 
          words="Honest work, built to last." 
          trigger={ready}
          className="push-display text-[12vw] md:text-[8vw] lg:text-[7vw]" 
        />
      </section>

      <section className="bg-transparent text-push-white py-24 overflow-hidden relative z-10">
        <div className="px-5 md:px-10 mb-8 md:mb-16 text-center max-w-4xl mx-auto relative z-10">
          <Reveal>
            <h2 className="push-display text-4xl md:text-5xl lg:text-6xl mb-6">Why Branding Matters</h2>
            <p className="text-lg md:text-xl text-push-mid/80 leading-relaxed">
              Think about Nike's swoosh, Rolex's crown, or the unmistakable prestige of a Jacob & Co. timepiece. Great brands transcend their products—they create feelings, signify status, and build unwavering trust. We build brands that leave a lasting mark, just like the icons.
            </p>
          </Reveal>
        </div>
        <SocialCards cards={BRAND_CARDS} />
      </section>

      <section className="bg-transparent px-5 py-24 text-push-white md:px-10 relative z-10">
        <ol className="divide-y divide-push-border">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} className="grid gap-4 py-10 md:grid-cols-[6rem_1fr_1fr] md:gap-8">
              <span className="text-push-mid">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="push-display text-4xl md:text-6xl">{t}</h2>
              <p className="max-w-sm text-push-white/80">{d}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </div>
  );
}
