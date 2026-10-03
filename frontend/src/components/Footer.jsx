import { Link } from 'react-router-dom';
import pushLogo from '../assets/PUSH_logo_primary_white.png';

export default function Footer() {
  const socialLinks = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, 
      href: "https://www.instagram.com/pushbrandingstudio/", 
      label: "Instagram" 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, 
      href: "https://www.linkedin.com/company/arpush/home/", 
      label: "LinkedIn" 
    },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/approach", label: "Approach" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-push-black px-5 pb-10 pt-16 md:px-10 text-push-white overflow-hidden relative">
      {/* Structured Footer Area */}
      <div>
        <div className="md:flex md:items-center md:justify-between relative top-[62px]">
          {/* Exact offsets to counter the 27.6% invisible left-padding inside the image file */}
          <Link to="/" className="relative flex items-center h-16 w-64 md:w-80 -ml-[110px] md:-ml-[166px]" aria-label="PUSH">
            <img src={pushLogo} alt="PUSH" className="absolute left-0 w-[400px] md:w-[600px] h-auto max-w-none pointer-events-none" />
          </Link>
          <ul className="flex list-none mt-8 md:mt-0 space-x-4 relative z-10">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-push-charcoal transition-colors hover:bg-push-olive text-push-white"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-push-charcoal mt-12 pt-12 md:mt-16 md:pt-12 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end gap-x-8 gap-y-4">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 shrink-0">
                  <Link
                    to={link.href}
                    className="text-sm font-bold uppercase tracking-wider transition-colors hover:text-push-olive"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-8 lg:mt-6 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end gap-x-6 gap-y-2">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 shrink-0">
                  <Link
                    to={link.href}
                    className="text-xs text-push-mid hover:text-push-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 text-sm leading-6 text-push-mid whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>© {new Date().getFullYear()} PUSH Studio</div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
