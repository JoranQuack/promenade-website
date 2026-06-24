"use client";

import { useEffect, useState } from "react";
import BackgroundMedia from "@/components/ui/BackgroundMedia";

const INTRO_DELAY_MS = 150;

export default function Hero({
  eyebrow,
  heading,
  subheading,
  videoSrc,
  posterSrc,
}: {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  videoSrc?: string;
  posterSrc?: string;
}): React.ReactElement {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), INTRO_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundMedia
        alt={heading ?? "Promenade Quartet"}
        imageSrc={posterSrc}
        priority
        videoSrc={videoSrc}
      />

      <div className="absolute inset-0 bg-linear-to-b from-dark/70 via-dark/30 to-dark" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        {eyebrow && (
          <span
            className={`mb-4 text-sm sm:text-base font-medium uppercase tracking-[0.3em] text-pred transition-all duration-1000 ease-out motion-reduce:transition-none ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {eyebrow}
          </span>
        )}

        <h1
          className={`text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tight text-bright transition-all duration-1000 ease-out delay-150 motion-reduce:transition-none ${
            isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {heading}
        </h1>

        {subheading && (
          <p
            className={`mt-6 max-w-xl text-lg sm:text-xl font-thin text-bright transition-all duration-1000 ease-out delay-300 motion-reduce:transition-none ${
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {subheading}
          </p>
        )}
      </div>

      <div
        className={`absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-700 motion-reduce:transition-none ${
          isRevealed ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-bright/70">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-bright/20">
          <span className="absolute inset-x-0 top-0 h-1/2 w-px animate-scroll-cue bg-bright" />
        </span>
      </div>
    </section>
  );
}
