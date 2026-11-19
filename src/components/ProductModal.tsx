import { useEffect, useState } from 'react';
import { ShoppingBag, Star, X } from 'lucide-react';
import type { Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[1] || product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B090A]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] text-[#141011] border border-[#C5A059]/50 grid grid-cols-1 md:grid-cols-12 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 bg-[#0B090A]/85 hover:bg-[#4A0E17] text-[#FAF7F2] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="md:col-span-6 bg-[#141011] aspect-[3/4] md:aspect-auto">
          <LuxuryImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="md:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#4A0E17] font-medium">
              {product.category} · {product.origin}
            </p>

            <h2 className="mt-2 font-display text-3xl font-medium text-[#141011] leading-tight">
              {product.name}
            </h2>

            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="text-xl font-semibold text-[#141011] tabular-nums">
                ${product.price.toLocaleString('en-US')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#141011]/70 tabular-nums">
                <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <div className="w-12 h-[1px] bg-[#C5A059] my-5" />

            <p className="text-sm leading-relaxed text-[#141011]/80">{product.description}</p>

            <p className="mt-4 text-xs text-[#141011]/70">
              <span className="font-semibold text-[#141011]">Composition:</span> {product.fabric}
            </p>

            {/* Size Selector */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.16em] uppercase text-[#141011]/70 font-medium mb-2.5">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] h-10 px-3 text-xs font-medium border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#4A0E17] text-[#FAF7F2] border-[#4A0E17]'
                          : 'bg-transparent text-[#141011] border-[#141011]/25 hover:border-[#4A0E17]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[#141011]/12">
            <button
              type="button"
              onClick={() => {
                onAddToCart(product, selectedSize || product.sizes[0]);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 min-h-[46px] bg-[#4A0E17] hover:bg-[#661421] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#E2C37E]" strokeWidth={1.5} />
              <span>Add to Shopping Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
