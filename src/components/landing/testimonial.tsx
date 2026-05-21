"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { blurRevealUp, staggerContainer, appleEase } from "@/lib/animations";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Sejak pakai Chronos, saya bisa tidur nyenyak. Bisnis rental jalan sendiri, pendapatan masuk otomatis.",
    name: "Ahmad Rizki",
    role: "Pemilik Rizki Game Center, Bandung",
  },
  {
    quote: "Dulu harus jaga sampai malam. Sekarang cukup lihat dashboard dari rumah. Game changer banget!",
    name: "Dewi Sartika",
    role: "Owner Dewi Playstation, Jakarta",
  },
  {
    quote: "Fitur anti curangnya luar biasa. Timer otomatis bikin pelanggan jujur dan pendapatan naik 40%.",
    name: "Bambang Hartono",
    role: "Pengelola Hartono Gaming, Surabaya",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: appleEase },
  }),
};

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = window.innerWidth * 0.85 + 24;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, testimonials.length - 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-section-subtle">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span variants={blurRevealUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Testimonial
          </motion.span>
          <motion.h2 variants={blurRevealUp} className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Dipercaya Pebisnis Rental
          </motion.h2>
        </motion.div>

        {isMobile ? (
          <>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4"
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={cn(
                    "snap-center shrink-0 w-[85vw] max-w-sm rounded-2xl border bg-card p-6 sm:p-8 transition-all duration-300",
                    i === activeIndex
                      ? "border-primary/30 shadow-md"
                      : "border-border/50 opacity-70"
                  )}
                >
                  <svg className="size-6 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    scrollRef.current?.children?.[i]?.scrollIntoView({ behavior: "smooth", inline: "center" });
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-500",
                    i === activeIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8"
                whileHover={{ y: -4, transition: { duration: 0.3, ease: appleEase } }}
              >
                <svg className="size-6 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
