"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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

export default function Testimonial() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-subtle">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span variants={fadeInUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Testimonial
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Dipercaya Pebisnis Rental
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="rounded-2xl border border-border/50 bg-white p-6 sm:p-8"
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
      </Container>
    </section>
  );
}
