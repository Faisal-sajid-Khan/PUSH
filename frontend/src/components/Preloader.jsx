import { useEffect, useState } from 'react';
import loaderVid from '../assets/PUSH_vid_loder_start.mp4';

// Plays video 3 times, then fades out.
export default function Preloader() {
  // const seen = sessionStorage.getItem('push_seen'); // Disabled for testing
  const [loops, setLoops] = useState(0);
  const [gone, setGone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (gone) {
      const t = setTimeout(() => {
        // sessionStorage.setItem('push_seen', '1');
        setRemoved(true);
      }, 900); // Wait for fade out animation to finish
      return () => clearTimeout(t);
    }
  }, [gone]);

  const handleEnded = (e) => {
    if (loops < 2) {
      setLoops(l => l + 1);
      e.target.play(); // Play again
    } else {
      setGone(true); // Trigger fade out
      window.dispatchEvent(new Event('preloaderFinished'));
    }
  };

  if (removed) return null;
  return (
    <div id="push-preloader" aria-hidden className={`fixed inset-0 z-[100] flex items-center justify-center bg-push-black transition-opacity duration-[900ms] ease-push ${gone ? 'opacity-0' : 'opacity-100'}`}>
      <video 
        src={loaderVid} 
        autoPlay 
        muted 
        playsInline 
        loop={false}
        onEnded={handleEnded} 
        className="w-64 h-auto md:w-96 object-contain"
      />
    </div>
  );
}
