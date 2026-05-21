"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useTheme } from "@/components/theme-provider";
import { appleEase } from "@/lib/animations";

const WA_LINK = "https://wa.me/6285189897289";
const DEMO_LINK = "https://chronos.katalisdev.my.id";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
];

const menuItemVariants = {
  closed: { opacity: 0, x: 20, filter: "blur(4px)" },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { delay: 0.1 + i * 0.07, duration: 0.5, ease: appleEase },
  }),
  exit: { opacity: 0, x: 20, filter: "blur(4px)", transition: { duration: 0.2 } },
};

export default function Navbar() {
  const { isScrolled } = useScroll(10);
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 lg:h-20 will-change-transform",
        isScrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-xs"
          : "bg-transparent border-transparent"
      )}
      style={{ transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease" }}
    >
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-baseline gap-1.5 shrink-0 group">
          <span className="text-lg font-semibold tracking-tight">Chronos</span>
          <span className="text-sm text-muted-foreground hidden sm:inline transition-opacity duration-300 group-hover:opacity-70">
            by Katalis
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 py-1"
            >
              {link.label}
              <motion.span
                className="absolute left-0 -bottom-0.5 h-px bg-foreground w-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: appleEase }}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 relative"
            aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3, ease: appleEase }}
              className="block"
            >
              {theme === "light" ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </motion.span>
          </button>

          <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <Button variant="outline" size="default" className="transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Demo
            </Button>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <Button variant="default" size="default" className="transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Mulai Trial
            </Button>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: appleEase }}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.35, ease: appleEase }}
              className="fixed right-4 top-16 w-[calc(100vw-32px)] max-w-sm bg-background/95 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl z-50 lg:hidden overflow-hidden"
            >
              <div className="p-5 pt-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="exit"
                      className="block py-3 px-3 text-base text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200 font-medium"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4, ease: appleEase }}
                  className="mt-5 pt-5 border-t border-border/50 space-y-3"
                >
                  <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" size="lg" className="w-full h-11 text-sm rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
                      Demo
                    </Button>
                  </a>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="default" size="lg" className="w-full h-11 text-sm rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
                      Mulai Trial
                    </Button>
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl border border-border/60 hover:bg-muted/50"
                  >
                    {theme === "light" ? (
                      <>
                        <Moon className="size-4" /> Mode Gelap
                      </>
                    ) : (
                      <>
                        <Sun className="size-4" /> Mode Terang
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
