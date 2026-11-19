import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { PRODUCTS, type Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

interface SectionBestSellersProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export function SectionBestSellers({ onSelectProduct, onAddToCart }: SectionBestSellersProps) {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 6);

  return (
    <section id="shop" className="bg-[#FAF7F2] text-[#141011] py-20 lg:py-28 border-b border-[#141011]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-[#4A0E17] font-medium mb-3">
              Curated Icons · Most Requested
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141011] text-balance">
              House Best Sellers
            </h2>
          </div>

          <p className="text-[15px] text-[#141011]/70 max-w-md">
            Signature VELORA silhouettes cherished by collectors worldwide, each tailored in small
            numbered runs.
          </p>
        </div>

        {/* 6-Item Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#F2ECE1]/65 border border-[#141011]/10 flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/3] overflow-hidden bg-[#141011] cursor-pointer"
              >
                <LuxuryImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#141011]/65">
                    <span className="tracking-[0.14em] uppercase">{product.category}</span>
                    <div className="flex items-center gap-1 text-[#4A0E17] tabular-nums">
                      <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-medium">{product.rating.toFixed(1)}</span>
                      <span className="text-[#141011]/50">({product.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-medium text-[#141011] leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="text-left hover:text-[#4A0E17] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </button>
                  </h3>

                  <p className="mt-1.5 text-xs text-[#141011]/65">{product.fabric}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#141011]/10 flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-[#141011] tabular-nums">
                    ${product.price.toLocaleString('en-US')}
                  </span>

                  <button
                    type="button"
                    onClick={() => onAddToCart(product, product.sizes[1] || product.sizes[0])}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4A0E17] hover:bg-[#661421] text-[#FAF7F2] text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E2C37E]" strokeWidth={1.5} />
                    <span>Add to Cart</span>
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
