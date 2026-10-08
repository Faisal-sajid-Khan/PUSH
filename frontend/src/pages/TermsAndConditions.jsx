import Reveal from '../components/Reveal.jsx';
import WordPullUp from '../components/WordPullUp.jsx';
import { useState, useEffect } from 'react';

export default function TermsAndConditions() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = "Terms & Conditions | PUSH Branding Studio";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Read the terms governing the use of the PUSH Branding Studio website.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      metaDesc.content = "Read the terms governing the use of the PUSH Branding Studio website.";
      document.head.appendChild(metaDesc);
    }

    // Force scroll to top when page mounts since react-router doesn't do this automatically
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);

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

  const sections = [
    { id: 'about', title: '1. About PUSH' },
    { id: 'website-use', title: '2. Website Use' },
    { id: 'website-info', title: '3. Website Information' },
    { id: 'portfolio', title: '4. Portfolio and Project Showcase' },
    { id: 'ip', title: '5. Intellectual Property' },
    { id: 'client-work', title: '6. Client Work and Ownership' },
    { id: 'third-party-materials', title: '7. Third-Party Materials' },
    { id: 'third-party-websites', title: '8. Third-Party Websites' },
    { id: 'contact-forms', title: '9. Contact Forms and Enquiries' },
    { id: 'no-direct-payments', title: '10. No Direct Payments' },
    { id: 'no-professional-advice', title: '11. No Professional Advice' },
    { id: 'disclaimer', title: '12. Disclaimer of Warranties' },
    { id: 'limitation-of-liability', title: '13. Limitation of Liability' },
    { id: 'indemnification', title: '14. Indemnification' },
    { id: 'availability', title: '15. Website Availability' },
    { id: 'changes', title: '16. Changes to These Terms' },
    { id: 'governing-law', title: '17. Governing Law' },
    { id: 'severability', title: '18. Severability' },
    { id: 'entire-agreement', title: '19. Entire Agreement' },
    { id: 'contact', title: '20. Contact Us' },
  ];

  return (
    <div className="bg-push-white min-h-screen">
      <section className="flex min-h-[60svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 bg-push-black text-push-white">
        <span className="push-label text-push-mid mb-6">LEGAL</span>
        <WordPullUp 
          words="Terms & Conditions" 
          trigger={ready}
          className="push-display text-[12vw] md:text-[8vw] lg:text-[7vw] mb-6" 
        />
        <Reveal delay={200}>
          <p className="max-w-2xl text-lg md:text-xl text-push-white/80">
            The terms that govern your use of the PUSH Branding Studio website.
          </p>
          <p className="mt-4 text-sm text-push-mid">Last Updated: October 2026</p>
        </Reveal>
      </section>

      <section className="px-5 py-24 md:px-10 text-push-black">
        <div className="max-w-[1400px] mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32 max-h-[80vh] overflow-y-auto pb-8">
            <h3 className="push-label mb-6 text-push-mid">Contents</h3>
            <ul className="space-y-4 text-sm font-medium">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a 
                    href={`#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(sec.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-push-charcoal/60 hover:text-push-black transition-colors"
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Legal Content */}
          <div className="lg:col-span-8 space-y-16">
            
            <Reveal id="about" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">1. About PUSH</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH Branding Studio is a global branding and digital design studio.</p>
                <p className="font-bold text-push-black mt-6">Services include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Brand Strategy & Brand Identity</li>
                  <li>Rebranding</li>
                  <li>Social Media & Copywriting</li>
                  <li>Advertising Campaigns</li>
                  <li>UI/UX Design & Web Development</li>
                  <li>E-Commerce</li>
                  <li>Content Production & IT Solutions</li>
                </ul>
                <p className="mt-6">This website is primarily a portfolio, informational, and business-enquiry platform.</p>
              </div>
            </Reveal>

            <Reveal id="website-use" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">2. Website Use</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Users may use the website only for lawful purposes. Users must not:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use the website for unlawful or fraudulent activities</li>
                  <li>Attempt unauthorized access or interfere with website security</li>
                  <li>Copy website content without permission</li>
                  <li>Scrape website content without authorization</li>
                  <li>Upload malicious code or misrepresent their identity</li>
                </ul>
              </div>
            </Reveal>

            <Reveal id="website-info" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">3. Website Information</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH makes reasonable efforts to keep information accurate but does not guarantee that all information will always be complete, accurate, current, error-free, or available.</p>
              </div>
            </Reveal>

            <Reveal id="portfolio" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">4. Portfolio and Project Showcase</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH may showcase completed projects and client work as examples of its capabilities. Third-party logos, trademarks, and brand assets shown in our portfolio remain the property of their respective owners.</p>
              </div>
            </Reveal>

            <Reveal id="ip" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">5. Intellectual Property</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>We protect our branding, logos, website designs, graphics, illustrations, photography, videos, written content, case studies, UI/UX designs, code, creative concepts, and other proprietary materials.</p>
                <p>These materials may not be copied, reproduced, distributed, modified, sold, licensed, or commercially exploited without our written permission.</p>
              </div>
            </Reveal>

            <Reveal id="client-work" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">6. Client Work and Ownership</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Ownership and usage rights for client projects are governed by the individual agreement, proposal, contract, or statement of work entered into between PUSH and the client.</p>
              </div>
            </Reveal>

            <Reveal id="third-party-materials" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">7. Third-Party Materials</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Any third-party materials, trademarks, or assets displayed on this website remain the property of their respective owners.</p>
              </div>
            </Reveal>

            <Reveal id="third-party-websites" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">8. Third-Party Websites</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH may link to external websites and is not responsible for their content, availability, security, or practices.</p>
              </div>
            </Reveal>

            <Reveal id="contact-forms" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">9. Contact Forms and Enquiries</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Submitting an enquiry through our contact forms does not automatically create a client relationship, contract, partnership, employment relationship, or other legal relationship.</p>
                <p>A project only begins when PUSH and the client agree to applicable scope, pricing, deliverables, timelines, and contractual terms.</p>
              </div>
            </Reveal>

            <Reveal id="no-direct-payments" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">10. No Direct Payments</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>This website currently functions primarily as a portfolio and lead-generation platform. It does not currently provide direct online purchasing or payment for PUSH services. Project pricing and payment terms are agreed separately with clients.</p>
              </div>
            </Reveal>

            <Reveal id="no-professional-advice" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">11. No Professional Advice</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>The information on the website is for general informational and educational purposes only and should not be treated as legal, financial, accounting, investment, medical, or other professional advice.</p>
              </div>
            </Reveal>

            <Reveal id="disclaimer" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">12. Disclaimer of Warranties</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>This website is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, PUSH disclaims all warranties, express or implied, regarding the website and your use thereof.</p>
              </div>
            </Reveal>

            <Reveal id="limitation-of-liability" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">13. Limitation of Liability</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>To the maximum extent permitted by law, PUSH is not responsible for any indirect, incidental, consequential, special, or exemplary damages resulting from your use of the website. This limitation applies subject to any reasonable exceptions for liabilities that cannot legally be excluded.</p>
              </div>
            </Reveal>

            <Reveal id="indemnification" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">14. Indemnification</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>You agree to indemnify, defend, and hold harmless PUSH from any claims, damages, liabilities, or expenses arising from your unlawful use of the website, your violation of these Terms, or your infringement of any third-party rights.</p>
              </div>
            </Reveal>

            <Reveal id="availability" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">15. Website Availability</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>The website may occasionally be unavailable because of maintenance, updates, hosting issues, security incidents, technical failures, network problems, or events outside PUSH's reasonable control.</p>
              </div>
            </Reveal>

            <Reveal id="changes" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">16. Changes to These Terms</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH may update these Terms at any time. The latest version will always be published on the website, and your continued use of the website constitutes acceptance of those changes.</p>
              </div>
            </Reveal>

            <Reveal id="governing-law" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">17. Governing Law</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p><strong>Governing Law:</strong> Maharashtra, India</p>
                <p><strong>Jurisdiction:</strong> Maharashtra, India</p>
              </div>
            </Reveal>

            <Reveal id="severability" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">18. Severability</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.</p>
              </div>
            </Reveal>

            <Reveal id="entire-agreement" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">19. Entire Agreement</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>These Terms govern your use of the website and do not replace separate contracts, statements of work, or service agreements entered into between PUSH and its clients.</p>
              </div>
            </Reveal>

            <Reveal id="contact" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">20. Contact Us</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>If you have any questions or concerns about these Terms, please reach out to us via our <a href="/#/contact" className="underline hover:text-push-black">Contact page</a>.</p>
                <p><strong>PUSH Branding Studio</strong></p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
