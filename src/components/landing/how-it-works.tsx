"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Pelanggan Check-In",
      desc: "Pelanggan memilih paket rental di layar monitor dan membayar via QRIS atau e-wallet.",
    },
    {
      num: "02",
      title: "Sistem Aktif Otomatis",
      desc: "PlayStation menyala, timer mulai berjalan, dan sesi tercatat di dashboard.",
    },
    {
      num: "03",
      title: "Monitor Real-Time",
      desc: "Pantau pendapatan, durasi pemakaian, dan status perangkat dari mana saja.",
    },
    {
      num: "04",
      title: "Selesai & Laporan",
      desc: "Timer habis, perangkat mati otomatis. Laporan harian terkirim ke email Anda.",
    },
  ];

  return (
    <section id="cara-kerja" className="py-24 sm:py-32 bg-gradient-subtle">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span variants={fadeInUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Cara Kerja
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Cara Kerja Chronos
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground">
            Empat langkah sederhana untuk mengotomatiskan bisnis rental PlayStation Anda.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
          <div className="space-y-12 sm:space-y-16 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-6xl sm:text-7xl font-bold text-primary/10 select-none">{step.num}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">{step.desc}</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="size-32 sm:size-40 rounded-2xl border border-border/50 bg-white shadow-sm flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-primary/30">{step.num}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
