import Reveal from '../components/Reveal.jsx';
import WordPullUp from '../components/WordPullUp.jsx';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = "Privacy Policy | PUSH Branding Studio";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn how PUSH Branding Studio collects, uses, protects, and manages personal information.");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      metaDesc.content = "Learn how PUSH Branding Studio collects, uses, protects, and manages personal information.";
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
    { id: 'who-we-are', title: '1. Who We Are' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'cookies', title: '3. Cookies and Similar Technologies' },
    { id: 'how-we-use', title: '4. How We Use Your Information' },
    { id: 'how-we-share', title: '5. How We Share Information' },
    { id: 'international', title: '6. International Data Transfers' },
    { id: 'retention', title: '7. Data Retention' },
    { id: 'security', title: '8. Data Security' },
    { id: 'your-rights', title: '9. Your Privacy Rights' },
    { id: 'gdpr', title: '10. GDPR' },
    { id: 'california', title: '11. California Privacy Rights' },
    { id: 'children', title: '12. Children\'s Privacy' },
    { id: 'third-party', title: '13. Third-Party Websites' },
    { id: 'changes', title: '14. Changes to This Privacy Policy' },
    { id: 'contact', title: '15. Contact Us' },
  ];

  return (
    <div className="bg-push-white min-h-screen">
      <section className="flex min-h-[60svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 bg-push-black text-push-white">
        <span className="push-label text-push-mid mb-6">LEGAL</span>
        <WordPullUp 
          words="Privacy Policy" 
          trigger={ready}
          className="push-display text-[12vw] md:text-[8vw] lg:text-[7vw] mb-6" 
        />
        <Reveal delay={200}>
          <p className="max-w-2xl text-lg md:text-xl text-push-white/80">
            Your privacy matters to us. Here’s how PUSH collects, uses, and protects your information.
          </p>
          <p className="mt-4 text-sm text-push-mid">Last Updated: October 2026</p>
        </Reveal>
      </section>

      <section className="px-5 py-24 md:px-10 text-push-black">
        <div className="max-w-[1400px] mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32">
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
            
            <Reveal id="who-we-are" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">1. Who We Are</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>PUSH Branding Studio is a global branding and digital design studio helping founders and growing businesses build strong brands and digital experiences.</p>
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
                <p className="font-bold text-push-black mt-6">Business details:</p>
                <ul className="space-y-1">
                  <li><strong>Business Name:</strong> PUSH Branding Studio</li>
                </ul>
              </div>
            </Reveal>

            <Reveal id="information-we-collect" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">2. Information We Collect</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>We may collect information you voluntarily provide through contact forms and enquiries, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name, Email address, and Phone number</li>
                  <li>Company/business name and Job title</li>
                  <li>Project requirements and messages submitted through forms</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
                <p className="mt-6">We also automatically collect certain information when you visit our website, such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>IP address, Browser type, Device type, and Operating system</li>
                  <li>Pages visited, Time spent on pages, and Referring website</li>
                  <li>Approximate location and Website interaction information</li>
                </ul>
              </div>
            </Reveal>

            <Reveal id="cookies" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">3. Cookies and Similar Technologies</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Our website may use cookies and similar technologies to enhance your experience. These technologies are used for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Essential website functionality and Security</li>
                  <li>Analytics and understanding visitor behaviour</li>
                  <li>Improving website performance and user experience</li>
                  <li>Marketing and advertising (where applicable)</li>
                </ul>
                <p>You can control or disable cookies through your browser settings at any time.</p>
              </div>
            </Reveal>

            <Reveal id="how-we-use" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">4. How We Use Your Information</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>The information we collect may be used to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to your enquiries and understand project requirements</li>
                  <li>Communicate with you and provide proposals or consultations</li>
                  <li>Improve our services and our website</li>
                  <li>Understand website traffic and user behavior</li>
                  <li>Maintain security, prevent fraud, or prevent abuse</li>
                  <li>Meet legal requirements and protect our legitimate business interests</li>
                </ul>
              </div>
            </Reveal>

            <Reveal id="how-we-share" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">5. How We Share Information</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p><strong>PUSH does not sell your personal information.</strong></p>
                <p>Information may be shared with trusted service providers who assist us in operating our business, such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hosting providers and Analytics providers</li>
                  <li>Email providers and Cloud storage providers</li>
                  <li>CRM or enquiry-management platforms</li>
                  <li>IT/security providers and Professional advisers</li>
                </ul>
                <p>We may also disclose your information when we are legally required to do so.</p>
              </div>
            </Reveal>

            <Reveal id="international" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">6. International Data Transfers</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Because PUSH operates globally, your information may be processed or stored in countries outside of your own country of residence. Where legally required, we will ensure that appropriate safeguards are used to protect your data during transfer.</p>
              </div>
            </Reveal>

            <Reveal id="retention" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">7. Data Retention</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>We retain your personal information only for as long as is reasonably necessary to fulfill the purposes for which it was collected, including for our legitimate business, legal, security, and operational purposes.</p>
              </div>
            </Reveal>

            <Reveal id="security" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">8. Data Security</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>We implement reasonable technical and organisational measures to protect your personal information against unauthorized access, destruction, or alteration. However, please be aware that no internet transmission or digital storage system can be guaranteed to be completely secure.</p>
              </div>
            </Reveal>

            <Reveal id="your-rights" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">9. Your Privacy Rights</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Depending on applicable law, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access, Correction, or Deletion of your data</li>
                  <li>Restriction or Objection to processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of previously granted consent</li>
                  <li>Opting out of marketing communications</li>
                  <li>The right to complain to a data protection authority</li>
                </ul>
                <p>To exercise any of these rights, please contact us through our website's <a href="/#/contact" className="underline hover:text-push-black">Contact page</a>.</p>
              </div>
            </Reveal>

            <Reveal id="gdpr" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">10. GDPR</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>For users in the European Economic Area (EEA) and the UK, you have specific rights under the General Data Protection Regulation (GDPR). We process your personal data based on one or more of the following legal bases:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Consent:</strong> When you have explicitly given us permission.</li>
                  <li><strong>Contractual necessity:</strong> To fulfill a contract or take steps prior to entering into a contract.</li>
                  <li><strong>Legal obligations:</strong> When we are required to comply with the law.</li>
                  <li><strong>Legitimate interests:</strong> For our reasonable business purposes, provided they do not override your fundamental rights.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal id="california" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">11. California Privacy Rights</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>If you are a resident of California, you may have specific privacy rights under applicable state laws (such as the CCPA/CPRA). These may include the right to know what personal information we collect, the right to request deletion, and the right to opt-out of the sale of personal information.</p>
                <p><strong>PUSH does not sell personal information as that term is defined under applicable law.</strong></p>
              </div>
            </Reveal>

            <Reveal id="children" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">12. Children's Privacy</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Our website is not directed toward children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have inadvertently collected such data, we will delete it promptly.</p>
              </div>
            </Reveal>

            <Reveal id="third-party" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">13. Third-Party Websites</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>Our website may contain links to external third-party websites. Please note that we are not responsible for the privacy practices, content, or security of these external sites. We encourage you to read their respective privacy policies.</p>
              </div>
            </Reveal>

            <Reveal id="changes" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">14. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>We may update this Privacy Policy periodically to reflect changes in our practices or relevant laws. We will notify you of any significant changes by updating the "Last Updated" date at the top of this page.</p>
              </div>
            </Reveal>

            <Reveal id="contact" className="scroll-mt-32">
              <h2 className="push-display text-3xl md:text-5xl mb-6">15. Contact Us</h2>
              <div className="space-y-4 text-push-charcoal/80 leading-relaxed font-sans text-lg">
                <p>If you have any questions or concerns about this Privacy Policy, please reach out to us via our <a href="/#/contact" className="underline hover:text-push-black">Contact page</a>.</p>
                <p><strong>PUSH Branding Studio</strong></p>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>
    </div>
  );
}
