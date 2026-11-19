import { motion } from 'motion/react';
import { CRAFTSMANSHIP_IMAGE, CRAFTSMANSHIP_PILLARS } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

export function SectionCraftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="bg-gradient-to-b from-[#170609] via-[#0B090A] to-[#0B090A] text-[#FAF7F2] py-20 lg:py-28 border-b border-[#C5A059]/25"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Gold-Accented Craftsmanship Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs tracking-[0.26em] uppercase text-[#E2C37E] font-medium mb-3">
              Savoir-Faire · Atelier Standards
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-[#FAF7F2] text-balance">
              The Art of Craftsmanship
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#FAF7F2]/75 max-w-xl">
              Behind every VELORA garment lies a quiet discipline: hand-drawn chalk patterns,
              double-faced Italian cashmere split and blind-stitched by hand, and pure silk threads
              tensioned for decades of wear.
            </p>

            <div className="mt-10 divide-y divide-[#C5A059]/20 border-t border-b border-[#C5A059]/20">
              {CRAFTSMANSHIP_PILLARS.map((pillar) => (
                <div key={pillar.index} className="py-5 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 font-display text-xl text-[#E2C37E] tabular-nums">
                    {pillar.index}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-display text-xl font-medium text-[#FAF7F2]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#FAF7F2]/70">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Macro Atelier Photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-[#C5A059]/40 bg-[#0B090A]">
              <LuxuryImage
                src={CRAFTSMANSHIP_IMAGE}
                alt="Master tailor hand-stitching champagne gold silk thread onto deep burgundy cashmere lapel"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.16em] uppercase text-[#E2C37E]/85">
              <span>Biella Cashmere · Como Silk · Lyon Velvet</span>
              <span>Hand-Finished in Italy &amp; France</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
