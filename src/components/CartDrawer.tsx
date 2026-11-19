import { useEffect, useState, type FormEvent } from 'react';
import { Check, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import type { Product } from '../data/catalog';
import { LuxuryImage } from './LuxuryImage';

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [step, setStep] = useState<'bag' | 'checkout' | 'confirmed'>('bag');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && items.length > 0 && step === 'confirmed') {
      setStep('bag');
    }
  }, [isOpen, items.length, step]);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim() || !shippingAddress.trim()) {
      setFormError('Please complete your name, email, and delivery address.');
      return;
    }
    setFormError('');
    setOrderNumber(`VLR-${Math.floor(100000 + Math.random() * 900000)}`);
    onClearCart();
    setStep('confirmed');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
      className="fixed inset-0 z-50 flex justify-end bg-[#0B090A]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF7F2] text-[#141011] h-full flex flex-col border-l border-[#C5A059]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#141011]/12 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#4A0E17]" strokeWidth={1.5} />
            <h2 className="font-display text-2xl font-medium">
              {step === 'bag' && 'Shopping Bag'}
              {step === 'checkout' && 'Private Checkout'}
              {step === 'confirmed' && 'Order Confirmed'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close shopping bag"
            className="inline-flex items-center justify-center w-9 h-9 text-[#141011]/70 hover:text-[#4A0E17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {step === 'confirmed' ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#4A0E17] text-[#E2C37E] border border-[#C5A059]">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#4A0E17] font-medium">
                Order #{orderNumber} Confirmed
              </p>
              <h3 className="font-display text-3xl font-medium text-[#141011]">
                Thank you, {customerName}.
              </h3>
              <p className="text-sm leading-relaxed text-[#141011]/75 max-w-xs mx-auto">
                Our Milan atelier is preparing your garment presentation. Complimentary insured
                courier details have been dispatched to {customerEmail}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep('bag');
                  onClose();
                }}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#141011] hover:bg-[#4A0E17] text-[#FAF7F2] text-xs font-medium tracking-[0.16em] uppercase transition-colors cursor-pointer"
              >
                Continue Exploring
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <ShoppingBag className="w-8 h-8 mx-auto text-[#141011]/35" strokeWidth={1.25} />
              <p className="font-display text-2xl text-[#141011]">Your shopping bag is empty.</p>
              <p className="text-sm text-[#141011]/65 max-w-xs mx-auto">
                Explore our Autumn/Winter tailoring, silk gowns, and cashmere outerwear to begin
                curating your wardrobe.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-[#4A0E17] hover:bg-[#661421] text-[#FAF7F2] text-xs font-medium tracking-[0.16em] uppercase transition-colors cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          ) : step === 'bag' ? (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-[#141011]/10"
                >
                  <div className="w-20 h-24 bg-[#141011] shrink-0 overflow-hidden">
                    <LuxuryImage
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-medium text-[#141011] leading-snug">
                          {item.product.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id, item.size)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-[#141011]/45 hover:text-[#4A0E17] transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="mt-0.5 text-xs text-[#141011]/60">Size {item.size}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#141011]/20">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#141011]/5 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#141011]/5 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-[#141011] tabular-nums">
                        ${(item.product.price * item.quantity).toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form id="velora-checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label htmlFor="checkout-name" className="block text-xs uppercase tracking-[0.14em] text-[#141011]/70 mb-1.5">
                  Full Name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Camille Laurent"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#141011]/20 focus:border-[#4A0E17] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="checkout-email" className="block text-xs uppercase tracking-[0.14em] text-[#141011]/70 mb-1.5">
                  Email Address
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="client@domain.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#141011]/20 focus:border-[#4A0E17] text-sm focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="checkout-address" className="block text-xs uppercase tracking-[0.14em] text-[#141011]/70 mb-1.5">
                  Delivery Address
                </label>
                <textarea
                  id="checkout-address"
                  rows={3}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Street, City, Postal Code, Country"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#141011]/20 focus:border-[#4A0E17] text-sm focus:outline-none"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs text-[#8C1D2D]">
                  {formError}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && step !== 'confirmed' && (
          <div className="px-6 py-5 border-t border-[#141011]/12 bg-[#F2ECE1] space-y-4">
            <div className="flex items-center justify-between text-xs text-[#141011]/70">
              <span>Complimentary Insured Express Courier</span>
              <span className="text-[#4A0E17] font-medium">Included</span>
            </div>

            <div className="flex items-center justify-between text-base font-semibold text-[#141011]">
              <span>Subtotal</span>
              <span className="tabular-nums">${subtotal.toLocaleString('en-US')} USD</span>
            </div>

            {step === 'bag' ? (
              <button
                type="button"
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 min-h-[46px] bg-[#4A0E17] hover:bg-[#661421] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors cursor-pointer"
              >
                Proceed to Private Checkout
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('bag')}
                  className="px-4 py-3.5 border border-[#141011]/25 text-xs font-medium tracking-[0.14em] uppercase text-[#141011] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="velora-checkout-form"
                  className="flex-1 py-3.5 min-h-[46px] bg-[#4A0E17] hover:bg-[#661421] text-[#FAF7F2] text-xs font-medium tracking-[0.18em] uppercase transition-colors cursor-pointer"
                >
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
