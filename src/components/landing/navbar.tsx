"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { useTheme } from "@/components/theme-provider";

const WA_LINK = "https://wa.me/6285189897289";
const DEMO_LINK = "https://chronos.katalisdev.my.id";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
];

export default function Navbar() {
  const { isScrolled } = useScroll(10);
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 lg:h-20 transition-all duration-500",
        isScrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-xs"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-baseline gap-1.5 shrink-0">
          <span className="text-lg font-semibold tracking-tight">Chronos</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">by Katalis</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label={theme === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </button>

          <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <Button variant="outline" size="default">
              Demo
            </Button>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
            <Button variant="default" size="default">
              Mulai Trial
            </Button>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-72 bg-background border-l border-border shadow-xl z-50 p-6 lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Demo
                  </Button>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="default" size="lg" className="w-full">
                    Mulai Trial
                  </Button>
                </a>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border"
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
