"use client";

import { motion } from "framer-motion";
import { Monitor, CreditCard, Timer, BarChart3, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Monitor,
    title: "Self-Checkout",
    desc: "Pelanggan bisa memilih dan memulai sesi rental secara mandiri tanpa bantuan staf.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Digital",
    desc: "Terima pembayaran otomatis via QRIS melalui Mobile Banking, dan E-Wallet.",
  },
  {
    icon: Timer,
    title: "Auto Timer",
    desc: "Waktu rental terhitung otomatis. Perangkat otomatis mati saat waktu habis, tanpa perlu intervensi operator.",
  },
  {
    icon: Monitor,
    title: "Monitoring Perangkat",
    desc: "Pantau status perangkat secara real-time, termasuk status online/offline, dan statistik penggunaan perangkat.",
  },
  {
    icon: BarChart3,
    title: "Revenue Monitoring",
    desc: "Laporan pendapatan harian, mingguan, dan bulanan dengan grafik interaktif.",
  },
  {
    icon: Users,
    title: "Manajemen Operator",
    desc: "Kelola akses operator, pantau aktivitas, dan atur hak akses dengan mudah.",
  },
];

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
          <motion.span variants={fadeInUp} className="text-xs font-medium text-primary uppercase tracking-widest">
            Fitur
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Semua yang Anda Butuhkan
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground">
            Platform all-in-one untuk mengelola bisnis rental PlayStation Anda secara otomatis.
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
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm transition-colors duration-300 hover:border-border/80"
              >
                <motion.div
                  className="flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-5 group-hover:bg-primary/10 transition-colors duration-300"
                  variants={iconVariants}
                >
                  <Icon className="size-6" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
