"use client";

import { motion } from "framer-motion";
import { Monitor, CreditCard, Timer, BarChart3, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { blurRevealUp, staggerContainer, fadeInUp, appleEase } from "@/lib/animations";

const features = [
  {
    icon: Monitor,
    title: "Self-Checkout",
    desc: "Pelanggan bisa memilih dan memulai sesi rental secara mandiri <span className=\"text-foreground font-semibold\">tanpa bantuan staf</span>.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Digital",
    desc: "Terima pembayaran otomatis via <span className=\"text-foreground font-semibold\">QRIS</span> melalui Mobile Banking, dan <span className=\"text-foreground font-semibold\">E-Wallet</span>.",
  },
  {
    icon: Timer,
    title: "Auto Timer",
    desc: "Waktu rental terhitung otomatis. Perangkat otomatis mati saat waktu habis, <span className=\"text-foreground font-semibold\">tanpa perlu intervensi operator</span>.",
  },
  {
    icon: Monitor,
    title: "Monitoring Perangkat",
    desc: "Pantau status perangkat secara <span className=\"text-foreground font-semibold\">real-time</span>, termasuk status <span className=\"text-foreground font-semibold\">online/offline</span>, dan statistik penggunaan perangkat.",
  },
  {
    icon: BarChart3,
    title: "Revenue Monitoring",
    desc: "Laporan pendapatan <span className=\"text-foreground font-semibold\">harian, mingguan, dan bulanan</span> dengan grafik interaktif.",
  },
  {
    icon: Users,
    title: "Manajemen Operator",
    desc: "Kelola akses operator, pantau aktivitas, dan atur hak akses dengan <span className=\"text-foreground font-semibold\">mudah</span>.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: appleEase },
  },
};

const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: 3,
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  },
};

export default function Features() {
  return (
    <section id="fitur" className="py-24 sm:py-32 scroll-mt-20 lg:scroll-mt-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <motion.span variants={blurRevealUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Fitur
          </motion.span>
          <motion.h2 variants={blurRevealUp} className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Semua yang Anda Butuhkan
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-base sm:text-lg text-muted-foreground">
            Platform <span className="text-foreground font-semibold">all-in-one</span> untuk mengelola bisnis rental PlayStation Anda secara <span className="text-foreground font-semibold">otomatis</span>.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm transition-shadow duration-500 hover:shadow-md hover:border-border/80"
              >
                <motion.div
                  className="flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-5 group-hover:bg-primary/10 transition-colors duration-300"
                  variants={iconVariants}
                >
                  <Icon className="size-6" />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.desc }} />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
