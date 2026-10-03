import Reveal from '../components/Reveal.jsx';
import WordPullUp from '../components/WordPullUp.jsx';
import { useState, useEffect } from 'react';

const values = [
  ['Honesty', 'We say what needs to be said, even when it is uncomfortable.'],
  ['Quality without compromise', 'Every deliverable reflects the standard we promised.'],
  ['Impact through hard work', 'No shortcuts. We build things that last.'],
  ['Legacy over quick wins', 'We think in decades, not quarters.'],
  ['Humanity and kindness', 'Great work and good people are not mutually exclusive.'],
];

export default function About() {
  const [ready, setReady] = useState(false);

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

  return (
    <>
      <section className="flex min-h-[80svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10">
        <WordPullUp 
          words="The underdog is the origin." 
          trigger={ready}
          className="push-display text-[12vw] md:text-[8vw] lg:text-[7vw]" 
        />
      </section>
      <section className="bg-push-white px-5 py-24 text-push-black md:px-10">
        <Reveal><p className="max-w-2xl text-xl md:text-3xl">PUSH is a global branding studio with no fixed mythology. We let the work speak first. Our mission: make powerful branding accessible to every ambitious founder and growing business.</p></Reveal>
      </section>
      <section className="px-5 py-24 md:px-10">
        <h2 className="push-label mb-10 text-push-mid">Core values</h2>
        {values.map(([t, d]) => (
          <Reveal key={t} className="grid gap-2 border-t border-push-charcoal py-8 md:grid-cols-2">
            <h3 className="text-2xl font-bold md:text-4xl">{t}</h3>
            <p className="max-w-sm text-push-mid">{d}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
