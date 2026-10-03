import { motion } from 'framer-motion';
import { useId } from 'react';

const pageTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 1.2
};

export default function PageTransition({ children }) {
  const id = useId();
  const filterId = `wobble-${id.replace(/:/g, '')}`;

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id={filterId} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.004" numOctaves="1" result="noise" />
          <motion.feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            xChannelSelector="R" 
            yChannelSelector="G" 
            initial={{ scale: 150 }}
            animate={{ scale: 0 }}
            exit={{ scale: 150 }}
            transition={pageTransition}
          />
        </filter>
      </svg>

      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
        exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        transition={pageTransition}
        style={{ filter: `url(#${filterId})`, transformOrigin: "center center" }}
      >
        {children}
      </motion.div>
    </>
  );
}
