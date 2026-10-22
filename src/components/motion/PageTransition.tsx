"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";

// The first page load is not animated, so the hero (LCP element) paints immediately
// without waiting for JavaScript; only client-side navigations fade in.
let firstLoad = true;
import { easeCraft } from "./Reveal";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const animateIn = !firstLoad;
  useEffect(() => {
    firstLoad = false;
  }, []);

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeCraft }}
    >
      {children}
    </motion.div>
  );
}
