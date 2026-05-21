"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Pelanggan Scan QR Perangkat",
      desc: "Pelanggan scan QR code di PlayStation, lalu sistem akan menampilkan halaman self-checkout dengan pilihan paket rental.",
    },
    {
      num: "02",
      title: "Pelanggan Pilih Paket & Bayar",
      desc: "Pelanggan pilih paket rental, lalu bayar otomatis via QRIS menggunakan Mobile Banking atau E-Wallet.",
    },
    {
      num: "03",
      title: "Sesi Rental Dimulai",
      desc: "Setelah pembayaran terkonfirmasi, timer rental otomatis berjalan. Perangkat aktif selama waktu yang dipilih.",
    },
    {
      num: "04",
      title: "Sesi Berakhir Otomatis",
      desc: "Saat waktu habis, perangkat otomatis mati. Tidak ada lagi waktu rental yang terbuang.",
    },
    {
      num: "05",
      title: "Monitoring & Laporan",
      desc: "Operator bisa pantau status perangkat, sesi aktif, dan laporan pendapatan secara real-time melalui dashboard admin.",
    },
  ];

  return (
    <section id="cara-kerja" className="py-24 sm:py-32 bg-section-subtle scroll-mt-20 lg:scroll-mt-24">
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

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

          <div className="space-y-16 sm:space-y-20 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16`}
                >
                  <div className="flex-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div
                        className={`inline-flex items-center gap-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                      >
                        <div className="size-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-primary">{step.num}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <p
                        className={`mt-3 text-muted-foreground leading-relaxed max-w-md ${
                          i % 2 === 0 ? "lg:text-right" : ""
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block flex-1" />
                </motion.div>

                <div className="hidden lg:flex absolute left-1/2 top-1.5 -translate-x-1/2 size-4 rounded-full border-2 border-primary/30 bg-background z-10">
                  <motion.div
                    className="size-1.5 rounded-full bg-primary/40 m-auto"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
