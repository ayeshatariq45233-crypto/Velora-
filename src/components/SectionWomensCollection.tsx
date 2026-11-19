import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS, WOMENS_GALLERY, type Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

interface SectionWomensCollectionProps {
  onSelectProduct: (product: Product) => void;
}

export function SectionWomensCollection({ onSelectProduct }: SectionWomensCollectionProps) {
  const handleInspect = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) onSelectProduct(found);
  };

  const [featured, second, third] = WOMENS_GALLERY;

  return (
    <section className="bg-[#FAF7F2] text-[#141011] py-20 lg:py-28 border-b border-[#141011]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.24em] uppercase text-[#4A0E17] font-medium mb-3">
              Womenswear Atelier
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141011] text-balance">
              Women’s Luxury Collection
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-[#141011]/75 max-w-md lg:justify-self-end">
            Fluid champagne silks, Lyon velvet evening tailoring, and sculpted daywear crafted to
            move with quiet authority from gallery opening to midnight gala.
          </p>
        </div>

        {/* Asymmetrical Editorial Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Large Portrait Feature */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 group relative overflow-hidden bg-[#141011] border border-[#C5A059]/30 min-h-[520px]"
          >
            <LuxuryImage
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/90 via-[#0B090A]/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-[#E2C37E]">
                  {featured.fabricNote}
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-[#FAF7F2]">
                  {featured.title}
                </h3>
                <p className="mt-1 text-sm text-[#FAF7F2]/75">
                  {featured.subtitle} · <span className="tabular-nums">${featured.price.toLocaleString('en-US')}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleInspect(featured.productId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A0E17] hover:bg-[#661421] border border-[#C5A059]/50 text-[#FAF7F2] text-xs font-medium tracking-[0.16em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
              >
                <span>View Piece</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E2C37E]" />
              </button>
            </div>
          </motion.div>

          {/* Stacked Right Column Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {[second, third].map((look, index) => (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (index + 1) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex-1 min-h-[260px] overflow-hidden bg-[#141011] border border-[#C5A059]/30"
              >
                <LuxuryImage
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B090A]/90 via-[#0B090A]/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[#E2C37E]">
                      {look.fabricNote}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-medium text-[#FAF7F2]">
                      {look.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#FAF7F2]/75">
                      {look.subtitle} · <span className="tabular-nums">${look.price.toLocaleString('en-US')}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInspect(look.productId)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B090A]/75 hover:bg-[#4A0E17] border border-[#C5A059]/45 text-[#FAF7F2] text-[11px] font-medium tracking-[0.16em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
                  >
                    <span>Shop Look</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E2C37E]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
