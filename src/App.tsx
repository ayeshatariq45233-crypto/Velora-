import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Product } from './data/catalog';
import { Navbar } from './components/Navbar';
import { SectionHero } from './components/SectionHero';
import { SectionBrandIntro } from './components/SectionBrandIntro';
import { SectionNewCollection } from './components/SectionNewCollection';
import { SectionWomensCollection } from './components/SectionWomensCollection';
import { SectionMensCollection } from './components/SectionMensCollection';
import { SectionBestSellers } from './components/SectionBestSellers';
import { SectionCraftsmanship } from './components/SectionCraftsmanship';
import { SectionSeasonalCampaign } from './components/SectionSeasonalCampaign';
import { SectionTestimonials } from './components/SectionTestimonials';
import { FooterNewsletter } from './components/FooterNewsletter';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, type CartItem } from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (entry) => entry.product.id === product.id && entry.size === size
      );
      if (existing) {
        return prev.map((entry) =>
          entry.product.id === product.id && entry.size === size
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });

    setToastMessage(`${product.name} (${size}) added to your bag`);
    window.setTimeout(() => {
      setToastMessage((current) =>
        current === `${product.name} (${size}) added to your bag` ? null : current
      );
    }, 3000);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141011]">
      <Navbar cartCount={totalCount} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <SectionHero />

        {/* 2. Brand Introduction */}
        <SectionBrandIntro />

        {/* 3. New Collection */}
        <SectionNewCollection
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Women's Luxury Collection */}
        <SectionWomensCollection onSelectProduct={setSelectedProduct} />

        {/* 5. Men's Signature Collection */}
        <SectionMensCollection
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Best Sellers */}
        <SectionBestSellers
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />

        {/* 7. The Art of Craftsmanship */}
        <SectionCraftsmanship />

        {/* 8. Exclusive Seasonal Campaign */}
        <SectionSeasonalCampaign />

        {/* 9. Customer Testimonials */}
        <SectionTestimonials />
      </main>

      {/* 10. Footer & Newsletter */}
      <FooterNewsletter />

      {/* Product Detail Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      {/* Subtle Add-to-Bag Feedback Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#0B090A] text-[#FAF7F2] border border-[#C5A059]/60 shadow-lg"
        >
          <Check className="w-4 h-4 text-[#E2C37E] shrink-0" />
          <span className="text-xs tracking-[0.04em]">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[11px] tracking-[0.14em] uppercase text-[#E2C37E] hover:underline whitespace-nowrap cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
