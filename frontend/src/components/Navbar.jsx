import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import pushLogo from '../assets/PUSH_logo_symbol_white.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/approach', label: 'Approach' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  useEffect(() => {
    if (document.getElementById('push-preloader')) {
      setIsInitialLoad(true);
      const handleReady = () => setLogoReady(true);
      window.addEventListener('preloaderFinished', handleReady);
      return () => window.removeEventListener('preloaderFinished', handleReady);
    } else {
      setLogoReady(true);
    }
  }, []);

  return (
    <>
      {/* Center Logo Overlay for Preloader Transition */}
      {isInitialLoad && !logoReady && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <motion.img 
            layoutId="nav-logo"
            src={pushLogo} 
            alt="PUSH" 
            className="w-[15vw] md:w-[8vw] max-w-[120px] h-auto" 
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 mix-blend-difference md:px-10 text-push-white">
        <div className="flex-1 flex items-center h-16 md:h-20">
          <Link to="/" aria-label="PUSH home" className="flex items-center">
            {(!isInitialLoad || logoReady) && (
              <motion.img 
                layoutId="nav-logo"
                src={pushLogo} 
                alt="PUSH" 
                className="h-16 md:h-20 w-auto" 
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 lg:gap-12">
          {links.filter(l => l.label !== 'Contact').map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-[11px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity ${isActive ? 'underline underline-offset-[6px]' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 justify-end">
          <NavLink to="/contact" className={({ isActive }) => `text-[11px] font-bold uppercase tracking-wider hover:opacity-70 transition-opacity ${isActive ? 'underline underline-offset-[6px]' : ''}`}>
            CONTACT
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(true)} className="push-label md:hidden" aria-expanded={open} aria-controls="push-menu">Menu</button>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="push-menu" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}
        className={`push-menu fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-xl px-5 pb-8 pt-4 transition-opacity duration-700 ease-push md:hidden ${open ? 'push-menu--open opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="flex items-center justify-between text-push-white h-16">
          <img src={pushLogo} alt="PUSH" className="h-16 w-auto" />
          <button onClick={() => setOpen(false)} className="push-label" tabIndex={open ? 0 : -1}>Close</button>
        </div>

        <nav className="flex flex-1 flex-col justify-center text-push-white">
          <ul>
            {links.map((l, i) => (
              <li key={l.to} className="push-menu__item" style={{ transitionDelay: open ? `${150 + i * 80}ms` : '0ms' }}>
                <NavLink to={l.to} end tabIndex={open ? 0 : -1}
                  className="flex items-baseline gap-4 text-[13vw] font-medium leading-[1.08] tracking-tight">
                  {({ isActive }) => (<>{isActive && <span aria-hidden>— </span>}{l.label}</>)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <img src={pushLogo} alt="PUSH" className="h-24 w-auto" />
        </div>
      </div>
    </>
  );
}
