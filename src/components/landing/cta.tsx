"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { blurRevealUp, fadeInUp, staggerContainer, appleEase } from "@/lib/animations";

const WA_LINK = "https://api.whatsapp.com/send/?phone=6285189897289&text=Halo%2C%20saya%20tertarik%20untuk%20request%20trial%2Fdemo%20Chronos.%20Mohon%20informasinya%2C%20terima%20kasih.";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-3xl border border-border/50 bg-card p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 -z-0 opacity-[0.03]"
            animate={{
              background: [
                "radial-gradient(600px circle at 20% 50%, var(--primary), transparent)",
                "radial-gradient(600px circle at 80% 50%, var(--primary), transparent)",
                "radial-gradient(600px circle at 20% 50%, var(--primary), transparent)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: appleEase }}
          />
          <div className="relative z-10">
            <motion.h2
              variants={blurRevealUp}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Siap Memulai Otomatisasi Rental PlayStation Anda?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Mulai dengan <span className="text-foreground font-semibold">trial</span>, <span className="text-foreground font-semibold">tanpa biaya komitmen</span> di awal. Kami siap bantu setup dan pastikan Anda merasakan <span className="text-foreground font-semibold">kemudahan</span> mengelola rental PlayStation secara otomatis.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  size="lg"
                  className="px-8 text-base h-12 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Hubungi Kami
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
