import { motion } from 'motion/react';
import { BRAND_ATELIER_IMAGE } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

export function SectionBrandIntro() {
  return (
    <section id="about" className="bg-[#FAF7F2] text-[#141011] py-20 lg:py-28 border-b border-[#141011]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Editorial Atelier Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-full min-h-[460px] lg:min-h-[600px] overflow-hidden border border-[#C5A059]/35 bg-[#141011]">
              <LuxuryImage
                src={BRAND_ATELIER_IMAGE}
                alt="Bespoke deep burgundy velvet and wool tailored garment in the VELORA Paris atelier"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.24em] uppercase text-[#4A0E17] font-medium mb-4">
              The Maison · Heritage &amp; Restraint
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-[#141011] text-balance">
              Born in European ateliers, defined by enduring proportion.
            </h2>

            <div className="w-16 h-[1px] bg-[#C5A059] my-7" />

            <div className="space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#141011]/80 max-w-xl">
              <p>
                VELORA was founded on an uncompromising conviction: true luxury announces itself
                through stillness, cloth, and silhouette rather than fleeting ornament. Between our
                design studio in Paris and our tailoring house in Milan, every garment is conceived
                as an heirloom piece.
              </p>
              <p>
                Working exclusively with small family-owned weavers in Biella, Como, and Lyon, we
                pair deep wine-toned cashmeres and luminous ivory silks with time-honored full-canvas
                construction—creating wardrobes that command every room effortlessly.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#141011]/12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-display text-3xl font-medium text-[#4A0E17] tabular-nums">42 hrs</p>
                <p className="mt-1 text-xs text-[#141011]/65">Hand-tailoring per coat</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-[#4A0E17] tabular-nums">100%</p>
                <p className="mt-1 text-xs text-[#141011]/65">Natural noble fibers</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-[#4A0E17] tabular-nums">3 Cities</p>
                <p className="mt-1 text-xs text-[#141011]/65">Paris · Milan · New York</p>
              </div>
            </div>

            <div className="mt-9">
              <a
                href="#craftsmanship"
                className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-[#4A0E17] hover:text-[#0B090A] border-b border-[#C5A059] pb-1.5 transition-colors"
              >
                Discover Our Craftsmanship
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
