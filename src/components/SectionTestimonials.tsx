import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/catalog';

export function SectionTestimonials() {
  return (
    <section className="bg-[#FAF7F2] text-[#141011] py-20 lg:py-28 border-b border-[#141011]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.24em] uppercase text-[#4A0E17] font-medium mb-3">
            Clientele Perspectives
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141011] text-balance">
            Worn by Collectors Around the World
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F2ECE1]/55 border border-[#C5A059]/45 p-8 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-5"
                  aria-label={`Rated ${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-[#C5A059] text-[#C5A059]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="font-display text-xl sm:text-[22px] leading-relaxed text-[#141011] italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-8 pt-6 border-t border-[#C5A059]/30">
                <p className="text-sm font-semibold text-[#141011]">{review.name}</p>
                <p className="mt-0.5 text-xs text-[#141011]/65">
                  {review.role} · {review.location}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-[#4A0E17]">
                  Acquired: {review.piecePurchased}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
