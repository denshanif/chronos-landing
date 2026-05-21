"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const footerLinks = [
  {
    title: "Produk",
    links: [
      { label: "Fitur", href: "#fitur" },
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Harga", href: "#harga" },
    ],
  },
];

const footerBottomLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              <div className="md:col-span-2">
                <motion.div variants={fadeInUp}>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-lg font-semibold tracking-tight text-white">
                      Chronos
                    </span>
                    <span className="text-sm text-neutral-500">by Katalis</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                    Platform otomatisasi rental PlayStation berbasis IoT untuk memudahkan
                    pengelolaan bisnis Anda dengan fitur self-checkout, pembayaran QRIS,
                    dan monitoring real-time.
                  </p>
                </motion.div>
              </div>

              {footerLinks.map((group) => (
                <div key={group.title}>
                  <motion.div variants={fadeInUp}>
                    <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-5">
                      {group.title}
                    </h4>
                    <ul className="space-y-3.5">
                      {group.links.map((link, i) => (
                        <motion.li
                          key={link.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <a
                            href={link.href}
                            className="text-sm text-neutral-400 hover:text-white transition-all duration-300 relative inline-block group"
                          >
                            {link.label}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="border-t border-neutral-800 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Katalis. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerBottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
