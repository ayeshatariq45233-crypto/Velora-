import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, ShoppingBag } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

interface SectionNewCollectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

const FILTERS = ['All', 'Outerwear', 'Evening', 'Tailoring', 'Womenswear'] as const;

export function SectionNewCollection({ onSelectProduct, onAddToCart }: SectionNewCollectionProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('All');

  const newItems = PRODUCTS.filter((p) => p.isNew);
  const filteredItems =
    activeFilter === 'All' ? newItems : newItems.filter((item) => item.category === activeFilter);

  return (
    <section id="collections" className="bg-[#F2ECE1] text-[#141011] py-20 lg:py-28 border-b border-[#141011]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-[#4A0E17] font-medium mb-3">
              New Arrivals · Autumn / Winter
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141011] text-balance">
              The New Collection
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter new collection by category"
            className="flex flex-wrap items-center gap-1.5 border border-[#141011]/15 bg-[#FAF7F2] p-1"
          >
            {FILTERS.map((category) => {
              const active = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0E17] ${
                    active
                      ? 'bg-[#4A0E17] text-[#FAF7F2]'
                      : 'text-[#141011]/70 hover:text-[#141011]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#FAF7F2] border border-[#141011]/10 flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Image Canvas */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141011]">
                <LuxuryImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  aria-label={`Quick view ${product.name}`}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-2 bg-[#0B090A]/85 hover:bg-[#4A0E17] text-[#FAF7F2] border border-[#C5A059]/40 text-[11px] tracking-[0.14em] uppercase opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 cursor-pointer focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2C37E]"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E2C37E]" strokeWidth={1.5} />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Clean Unboxed Metadata */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#141011]/60">
                    {product.category} · {product.origin}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-medium text-[#141011] leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="text-left hover:text-[#4A0E17] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </button>
                  </h3>
                </div>

                <div className="mt-5 pt-4 border-t border-[#141011]/10 flex items-center justify-between gap-3">
                  <span className="text-[15px] font-medium text-[#141011] tabular-nums">
                    ${product.price.toLocaleString('en-US')}
                  </span>

                  <button
                    type="button"
                    onClick={() => onAddToCart(product, product.sizes[1] || product.sizes[0])}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#141011] hover:bg-[#4A0E17] text-[#FAF7F2] text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E2C37E]" strokeWidth={1.5} />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
