import type { Transition, Variants } from "framer-motion";

/** Curva suave tipo producto (no bounce exagerado). */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const springSoft: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

/** Reveal al entrar en viewport (secciones generales). */
export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -8% 0px",
} as const;

/**
 * Solo Skills: dispara anticipado para que las cards no “esperen” al scrollear.
 * No usar en el resto de secciones.
 */
export const viewportEager = {
  once: true,
  amount: 0.05,
  margin: "120px 0px 120px 0px",
} as const;
