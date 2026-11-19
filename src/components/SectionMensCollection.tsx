import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { MENS_GALLERY, PRODUCTS, type Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

interface SectionMensCollectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export function SectionMensCollection({ onSelectProduct, onAddToCart }: SectionMensCollectionProps) {
  const handleInspect = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) onSelectProduct(found);
  };

  const handleQuickAdd = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) onAddToCart(found, found.sizes[1] || found.sizes[0]);
  };

  return (
    <section className="bg-[#0B090A] text-[#FAF7F2] py-20 lg:py-28 border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Masculine Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#E2C37E] font-medium mb-3">
              Sartorial Menswear · Milan
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF7F2] text-balance">
              Men’s Signature Collection
            </h2>
          </div>

          <p className="text-[15px] leading-relaxed text-[#FAF7F2]/75 max-w-md">
            Structured double-breasted tailoring in Super 160s Biella wool, Florentine oxblood
            suede outerwear, and crisp Sea-Island cotton shirting.
          </p>
        </div>

        {/* 3-Column Masculine Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MENS_GALLERY.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#141011] border border-[#C5A059]/20 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0B090A]">
                <LuxuryImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#141011] via-transparent to-transparent opacity-60"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#E2C37E]">
                    {item.fabricNote}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-[#FAF7F2]">
                    <button
                      type="button"
                      onClick={() => handleInspect(item.productId)}
                      className="text-left hover:text-[#E2C37E] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm text-[#FAF7F2]/70">{item.subtitle}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#FAF7F2]/10 flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-[#FAF7F2] tabular-nums">
                    ${item.price.toLocaleString('en-US')}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleInspect(item.productId)}
                      className="px-3.5 py-2 border border-[#FAF7F2]/25 hover:border-[#C5A059] text-[#FAF7F2]/85 hover:text-[#E2C37E] text-[11px] tracking-[0.14em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(item.productId)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A0E17] hover:bg-[#661421] border border-[#C5A059]/50 text-[#FAF7F2] text-[11px] font-medium tracking-[0.14em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E2C37E]" strokeWidth={1.5} />
                      <span>Acquire</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
