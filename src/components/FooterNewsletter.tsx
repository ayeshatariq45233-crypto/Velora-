import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'subscribed'>('idle');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      return;
    }
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#0B090A] text-[#FAF7F2] pt-20 pb-12 border-t border-[#C5A059]/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Newsletter & Brand Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF7F2]/10">
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="font-display text-3xl tracking-[0.24em] font-semibold text-[#FAF7F2]"
            >
              VELORA
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[#FAF7F2]/70 max-w-md">
              An international luxury fashion house uniting Parisian evening elegance with Milanese
              tailoring. Small-batch couture and ready-to-wear crafted from noble natural fibers.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#contact"
                aria-label="VELORA on Instagram"
                className="inline-flex items-center justify-center w-10 h-10 border border-[#C5A059]/35 hover:border-[#E2C37E] hover:bg-[#4A0E17] text-[#FAF7F2] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:concierge@velora-maison.com"
                aria-label="Email VELORA Concierge"
                className="inline-flex items-center justify-center w-10 h-10 border border-[#C5A059]/35 hover:border-[#E2C37E] hover:bg-[#4A0E17] text-[#FAF7F2] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-xs tracking-[0.24em] uppercase text-[#E2C37E] font-medium mb-2">
              Private Client Dispatch
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#FAF7F2]">
              Receive seasonal lookbooks and private salon invitations.
            </h2>

            <form onSubmit={handleSubscribe} noValidate className="mt-6 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="velora-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="velora-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="flex-1 min-h-[46px] px-4 bg-[#141011] border border-[#C5A059]/35 focus:border-[#E2C37E] text-sm text-[#FAF7F2] placeholder:text-[#FAF7F2]/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-[#4A0E17] hover:bg-[#661421] border border-[#C5A059]/60 text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
                </button>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-2.5 text-xs text-[#E57373]">
                  Please enter a valid email address to join the VELORA private list.
                </p>
              )}

              {status === 'subscribed' && (
                <p
                  role="status"
                  className="mt-2.5 inline-flex items-center gap-2 text-xs text-[#E2C37E]"
                >
                  <Check className="w-4 h-4" />
                  <span>Thank you. Your invitation to the VELORA Private Client List is confirmed.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Navigation & Atelier Contact Columns */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#FAF7F2]/10">
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#E2C37E] font-medium mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/75">
              <li>
                <a href="#home" className="hover:text-[#E2C37E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#E2C37E] transition-colors">
                  New Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E2C37E] transition-colors">
                  About VELORA
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-[#E2C37E] transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-[#E2C37E] transition-colors">
                  Craftsmanship
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#E2C37E] font-medium mb-4">
              Client Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/75">
              <li>Complimentary Express Courier</li>
              <li>Private Virtual &amp; Salon Fittings</li>
              <li>Made-to-Measure Tailoring</li>
              <li>Garment Care &amp; Preservation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#E2C37E] font-medium mb-4">
              Flagship Salons
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>24 Rue du Faubourg Saint-Honoré, Paris</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Via Montenapoleone 18, Milan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#E2C37E] font-medium mb-4">
              Private Concierge
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/75">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                <span className="tabular-nums">+33 1 42 68 55 90</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                <span>concierge@velora-maison.com</span>
              </li>
              <li className="text-xs text-[#FAF7F2]/55 pt-1">
                Monday – Saturday · 10:00 – 19:00 CET
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/55">
          <p>&copy; {new Date().getFullYear()} VELORA Maison de Couture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Paris · Milan · New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
