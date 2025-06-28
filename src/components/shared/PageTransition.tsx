"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0.98,
    y: -20,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  duration: 0.5,
};

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  const pathname = usePathname();
  const [displayedPathname, setDisplayedPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== displayedPathname) {
      // Delay updating the displayed pathname to allow exit animation
      const timer = setTimeout(() => {
        setDisplayedPathname(pathname);
      }, 250);

      return (): void => clearTimeout(timer);
    }

    return undefined;
  }, [pathname, displayedPathname]);

  return (
    <div className="w-full min-h-screen pt-24">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate="in"
          className="w-full min-h-screen"
          exit="out"
          initial="initial"
          key={displayedPathname}
          transition={pageTransition}
          variants={pageVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
