"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardWidth = isMobile ? window.innerWidth - 64 : 0;

  const handleDragEnd = useCallback(
    (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
      const threshold = 60;
      const swipe = info.offset.x;

      if (Math.abs(swipe) > threshold || Math.abs(info.velocity.x) > 200) {
        const next = swipe > 0
          ? Math.max(0, activeIndex - 1)
          : Math.min(testimonials.length - 1, activeIndex + 1);
        setActiveIndex(next);
        controls.start({ x: -next * cardWidth, transition: { type: "spring", stiffness: 300, damping: 30 } });
      } else {
        controls.start({ x: -activeIndex * cardWidth, transition: { type: "spring", stiffness: 300, damping: 30 } });
      }
    },
    [activeIndex, cardWidth, controls]
  );

  useEffect(() => {
    if (isMobile) {
      controls.start({ x: -activeIndex * cardWidth, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  }, [activeIndex, isMobile, cardWidth, controls]);

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
          <motion.h2 variants={blurRevealUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Dipercaya Pebisnis Rental
          </motion.h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto overflow-hidden md:overflow-visible">
          <motion.div
            ref={trackRef}
            animate={controls}
            drag={isMobile ? "x" : false}
            dragConstraints={isMobile ? { left: -(testimonials.length - 1) * cardWidth, right: 0 } : undefined}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="flex md:grid md:grid-cols-3 md:gap-6"
            style={isMobile ? { gap: 24 } : undefined}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={!isMobile ? cardVariants : undefined}
                initial={!isMobile ? "initial" : undefined}
                whileInView={!isMobile ? "animate" : undefined}
                viewport={!isMobile ? { once: true, margin: "-50px" } : undefined}
                className={cn(
                  "rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shrink-0",
                  isMobile ? "w-[calc(100vw-64px)]" : ""
                )}
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
          </motion.div>
        </div>

        {isMobile && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative h-2 rounded-full transition-all duration-500"
                style={{
                  width: i === activeIndex ? 24 : 6,
                  background: i === activeIndex
                    ? "var(--primary)"
                    : "var(--muted-foreground)",
                  opacity: i === activeIndex ? 1 : 0.3,
                }}
              >
                {i === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
