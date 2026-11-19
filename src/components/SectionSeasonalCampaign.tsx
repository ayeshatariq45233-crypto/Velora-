import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CAMPAIGN_BANNER_IMAGE } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

export function SectionSeasonalCampaign() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#0B090A] border-b border-[#C5A059]/25">
      <div className="absolute inset-0">
        <LuxuryImage
          src={CAMPAIGN_BANNER_IMAGE}
          alt="VELORA seasonal fashion campaign in a candlelit stone courtyard featuring burgundy velvet gown and black tailored overcoat"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/90 via-[#0B090A]/45 to-[#0B090A]/50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-[#E2C37E] font-medium mb-4">
            Exclusive Seasonal Campaign · Nocturne Editions
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-[#FAF7F2] text-balance">
            A New Season. A New Statement.
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#FAF7F2]/85 max-w-xl mx-auto">
            Shot at dusk beneath the colonnades of Villa Aurelia, our Winter Noir campaign pairs
            deep crimson silk velvet with architectural midnight wool.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#collections"
              className="inline-flex items-center gap-3 px-8 py-3.5 min-h-[44px] bg-[#0B090A]/70 hover:bg-[#4A0E17] border border-[#C5A059]/75 text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
            >
              <span>Discover Campaign Looks</span>
              <ArrowRight className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
