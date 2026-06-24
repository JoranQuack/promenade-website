"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { setLenisInstance } from "@/lib/lenis";

const SCROLL_DURATION_SECONDS = 1.4;
const HASH_SCROLL_DELAY_MS = 200;

export default function SmoothScroll(): null {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ duration: SCROLL_DURATION_SECONDS });
    setLenisInstance(lenis);

    let frameId: number;
    const raf = (time: number): void => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        const timer = setTimeout(() => {
          lenis.scrollTo(target, { immediate: false });
        }, HASH_SCROLL_DELAY_MS);
        return () => {
          clearTimeout(timer);
          cancelAnimationFrame(frameId);
          setLenisInstance(null);
          lenis.destroy();
        };
      }
    }

    return () => {
      cancelAnimationFrame(frameId);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
