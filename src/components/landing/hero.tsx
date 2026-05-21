"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
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
            IoT-Powered Rental Automation
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Rental PlayStation{" "}
            <span className="text-primary">Kini Bisa Berjalan Sendiri.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Self-checkout, pembayaran digital, dan kontrol otomatis dalam satu sistem pintar.
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
            <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-blue-100/40 via-white to-blue-50/30 border border-border/50 shadow-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-10 w-full h-full">
                  <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 p-4 sm:p-6 shadow-sm">
                    <div className="h-2 w-16 bg-primary/20 rounded-full mb-3" />
                    <div className="h-2 w-24 bg-muted rounded-full mb-2" />
                    <div className="h-2 w-20 bg-muted rounded-full" />
                  </div>
                  <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 p-4 sm:p-6 shadow-sm translate-y-4 sm:translate-y-8">
                    <div className="h-2 w-12 bg-primary/20 rounded-full mb-3" />
                    <div className="h-2 w-20 bg-muted rounded-full mb-2" />
                    <div className="h-2 w-16 bg-muted rounded-full" />
                  </div>
                  <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 p-4 sm:p-6 shadow-sm -translate-y-2">
                    <div className="h-2 w-14 bg-primary/20 rounded-full mb-3" />
                    <div className="h-2 w-22 bg-muted rounded-full mb-2" />
                    <div className="h-2 w-18 bg-muted rounded-full" />
                  </div>
                  <div className="rounded-xl bg-primary/5 backdrop-blur-sm border border-primary/10 p-4 sm:p-6 shadow-sm">
                    <div className="h-2 w-14 bg-primary/20 rounded-full mb-3" />
                    <div className="h-3 w-full bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-2" />
                    <div className="flex justify-between">
                      <div className="h-2 w-12 bg-muted rounded-full" />
                      <div className="h-2 w-8 bg-primary/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
