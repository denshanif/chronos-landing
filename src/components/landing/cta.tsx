"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-primary/[0.02] to-primary/5 border border-primary/10 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.546_0.245_262.881_/_0.06),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Siap Mengotomatiskan Bisnis Rental Anda?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Mulai trial gratis 14 hari. Tidak perlu kartu kredit. Setup dalam 10 menit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="default" size="lg" className="px-8 text-base h-12">
                Request Demo Gratis
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-base h-12">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
