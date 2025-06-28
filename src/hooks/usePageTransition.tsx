"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

interface PageTransitionHook {
  navigateWithTransition: (href: string) => void;
  isTransitioning: boolean;
}

export function usePageTransition(): PageTransitionHook {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = (href: string): void => {
    if (href === pathname) {
      return;
    }

    setIsTransitioning(true);

    // Start the exit animation, then navigate after a delay
    setTimeout(() => {
      startTransition(() => {
        router.push(href);
        // Reset transition state after navigation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      });
    }, 300); // Half of the transition duration for exit
  };

  return {
    navigateWithTransition,
    isTransitioning: isTransitioning || isPending,
  };
}
