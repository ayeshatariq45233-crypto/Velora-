import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function LuxuryImage({ src, alt, className = '', priority = false }: LuxuryImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#2E070D] via-[#141011] to-[#0B090A] text-[#E2C37E]/80 p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 mb-3 text-[#C5A059]/70" strokeWidth={1.25} />
        <span className="font-display text-lg tracking-widest uppercase text-[#FAF7F2]/80">VELORA</span>
        <span className="mt-1 text-xs text-[#FAF7F2]/60 max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
