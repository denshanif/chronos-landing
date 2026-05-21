"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const plans = [
  {
    name: "Newbie",
    desc: "Cocok untuk pemilik 1-2 unit PlayStation.",
    features: [
      "Manajemen 2 perangkat",
      "Self-checkout pelanggan",
      "Pembayaran QRIS otomatis",
      "Timer rental otomatis",
      "Laporan harian sederhana",
    ],
    cta: "Mulai Trial",
    popular: false,
  },
  {
    name: "Pro Player",
    desc: "Untuk rental dengan 3-6 unit PlayStation.",
    features: [
      "Manajemen 6 perangkat",
      "Self-checkout penuh",
      "Pembayaran QRIS otomatis",
      "Timer otomatis + notifikasi",
      "Dashboard dan monitor pendapatan",
      "Manajemen operator",
    ],
    cta: "Mulai Trial",
    popular: true,
  },
  {
    name: "God Mode",
    desc: "Untuk usaha rental skala besar 7+ unit.",
    features: [
      "Manajemen unlimited perangkat",
      "Semua fitur Business",
      "Monitoring perangkat real-time",
      "Manajemen operator penuh",
      "Prioritas support",
    ],
    cta: "Hubungi Kami",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-24 sm:py-32 scroll-mt-20 lg:scroll-mt-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span variants={fadeInUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Harga
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Pilih Paket yang Tepat
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground">
            Mulai trial gratis 14 hari tanpa kartu kredit. Hubungi kami untuk informasi harga dan kebutuhan khusus.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-primary/30 bg-primary/[0.02] shadow-sm shadow-primary/5"
                  : "border-border/50 bg-white dark:bg-card hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Paling Populer
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-muted-foreground italic">Harga custom — hubungi kami</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg className="mt-0.5 size-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "default" : "outline"} className="w-full h-11" size="lg">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
