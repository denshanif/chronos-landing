"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

const WA_LINK = "https://wa.me/6285189897289";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border/50 bg-card p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Siap Memulai Otomatisasi Rental PlayStation Anda?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Mulai dengan trial, tanpa biaya komitmen di awal. Kami siap bantu setup dan pastikan Anda merasakan kemudahan mengelola rental PlayStation secara otomatis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="px-8 text-base h-12">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
