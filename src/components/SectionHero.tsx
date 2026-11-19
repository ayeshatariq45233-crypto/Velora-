import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

export function SectionHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-end pb-16 pt-28 md:items-center md:py-0 overflow-hidden bg-[#0B090A]"
    >
      {/* Background Campaign Photography */}
      <div className="absolute inset-0">
        <LuxuryImage
          src={HERO_IMAGE}
          alt="VELORA couture evening gown in deep burgundy silk and draped black cashmere coat"
          priority
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Measured contrast scrims for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B090A]/90 via-[#0B090A]/55 to-[#0B090A]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/85 via-transparent to-[#0B090A]/45"
        />
      </div>

      {/* Editorial Foreground */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.26em] uppercase text-[#E2C37E] mb-4">
            Autumn / Winter Couture · Paris &amp; Milan
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] font-medium leading-[1.03] tracking-[-0.01em] text-[#FAF7F2] text-balance">
            Elegance That Speaks.
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#FAF7F2]/85 max-w-xl font-normal">
            Crafted for permanence in deep burgundy silk, pure Inner Mongolian cashmere, and bespoke
            tailoring. Every silhouette balances quiet architectural strength with timeless grace.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 min-h-[44px] bg-[#4A0E17] hover:bg-[#661421] border border-[#C5A059]/60 text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
            </a>

            <a
              href="#shop"
              className="inline-flex items-center justify-center px-7 py-3.5 min-h-[44px] bg-[#0B090A]/55 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#0B090A] border border-[#FAF7F2]/40 hover:border-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
            >
              Shop Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quiet bottom editorial anchor */}
      <div className="hidden lg:flex absolute bottom-8 inset-x-0 z-10 max-w-7xl mx-auto px-8 items-center justify-between text-xs tracking-[0.2em] uppercase text-[#FAF7F2]/65">
        <span>Maison VELORA · Est. Milan</span>
        <span>Scroll to Discover</span>
      </div>
    </section>
  );
}
