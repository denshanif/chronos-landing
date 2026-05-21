import type { Variants, Transition } from "framer-motion";

// ─── Apple Signature Easing ───
export const appleEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const appleEaseSpring: [number, number, number, number] = [0.34, 1.56, 0.64, 1]; // bouncy

// ─── Transitions ───
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: appleEase,
};

export const slowTransition: Transition = {
  duration: 0.9,
  ease: appleEase,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 20,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 26,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.08,
};

export const staggerTransitionSlow: Transition = {
  staggerChildren: 0.12,
};

// ─── Entrance Variants ───
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } },
  exit: { opacity: 0, y: 24 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: appleEase } },
};

export const blurReveal: Variants = {
  initial: { opacity: 0, filter: "blur(12px)", y: 12 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: appleEase },
  },
};

export const blurRevealUp: Variants = {
  initial: { opacity: 0, filter: "blur(8px)", y: 30 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.9, ease: appleEase },
  },
};

// ─── Stagger ───
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.14,
      staggerDirection: 1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: appleEase } },
};

// ─── Scale ───
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.92, y: 12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: appleEase },
  },
};

export const scaleInSpring: Variants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// ─── Floating ───
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: appleEase,
    },
  },
};

export const floatingFast: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: appleEase,
    },
  },
};

// ─── Slide ───
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: appleEase } },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: appleEase } },
};

// ─── Navlink underline hover (Apple-style) ───
export const navUnderline: Variants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: appleEase } },
};
