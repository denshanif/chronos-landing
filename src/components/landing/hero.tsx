"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 40]);
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-neutral-50/80 to-white overflow-hidden">
      <Container className="relative z-10 pt-20 pb-16 sm:pb-20 lg:pt-24 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            Otomatisasi Rental PS berbasis IoT
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Rental PlayStation kini lebih{" "}
            <span className="text-primary">Mudah, Cepat, dan Pintar.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Dengan fitur Self-checkout, pembayaran QRIS, dan kontrol otomatis dalam satu sistem pintar.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="default" size="lg" className="px-8 text-base h-12">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-base h-12">
              Lihat Cara Kerja
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 sm:mt-20 lg:mt-24 w-full"
          >
            <motion.div className="relative max-w-5xl mx-auto" style={{ y: parallaxY }}>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-black/[0.03] rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-2xl border border-border/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden bg-white max-w-[88%] lg:max-w-[78%]"
                >
                  <div className="h-8 sm:h-9 bg-muted/30 border-b border-border/30 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-red-400/60" />
                      <div className="size-2.5 rounded-full bg-yellow-400/60" />
                      <div className="size-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="ml-3 h-5 flex-1 max-w-[180px] rounded-md bg-muted/50" />
                  </div>
                  <Image
                    src="/images/preview-2.png"
                    alt="Chronos Analytics — Monitoring pendapatan real-time"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative -mt-16 sm:-mt-20 md:-mt-28 ml-auto rounded-2xl border border-border/20 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.2)] overflow-hidden bg-white max-w-[88%] lg:max-w-[78%]"
                >
                  <div className="h-8 sm:h-9 bg-muted/30 border-b border-border/30 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="size-2.5 rounded-full bg-red-400/60" />
                      <div className="size-2.5 rounded-full bg-yellow-400/60" />
                      <div className="size-2.5 rounded-full bg-green-400/60" />
                    </div>
                    <div className="ml-3 h-5 flex-1 max-w-[240px] rounded-md bg-muted/50" />
                  </div>
                  <Image
                    src="/images/preview-1.png"
                    alt="Chronos Dashboard — Tampilan utama sistem"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
