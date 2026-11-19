import { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0B090A]/95 backdrop-blur-md border-b border-[#C5A059]/25'
          : 'bg-gradient-to-b from-[#0B090A]/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-2xl md:text-[26px] font-semibold tracking-[0.22em] text-[#FAF7F2] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm"
        >
          VELORA
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium tracking-[0.14em] uppercase text-[#FAF7F2]/85 hover:text-[#E2C37E] transition-colors duration-200 whitespace-nowrap shrink-0 py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C5A059] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action (Shopping Bag) + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping bag, ${cartCount} items`}
            className="inline-flex items-center gap-2.5 px-4 py-2 min-h-[40px] border border-[#C5A059]/50 bg-[#0B090A]/40 hover:bg-[#4A0E17] hover:border-[#C5A059] text-[#FAF7F2] text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <ShoppingBag className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
            <span className="hidden sm:inline">Bag</span>
            <span className="tabular-nums text-[#E2C37E]">({cartCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#FAF7F2] hover:text-[#E2C37E] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-[#0B090A]/98 border-b border-[#C5A059]/25 px-6 py-5 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium tracking-[0.16em] uppercase text-[#FAF7F2]/90 hover:text-[#E2C37E] border-b border-[#FAF7F2]/10 last:border-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
