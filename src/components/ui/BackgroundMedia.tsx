"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LOAD_ROOT_MARGIN = "50% 0px";

export default function BackgroundMedia({
  videoSrc,
  imageSrc,
  alt,
  priority = false,
}: {
  videoSrc?: string;
  imageSrc?: string;
  alt: string;
  priority?: boolean;
}): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(priority);

  useEffect(() => {
    if (!videoSrc || shouldLoadVideo) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: LOAD_ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [videoSrc, shouldLoadVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-dark">
      {imageSrc && (
        <Image
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            videoSrc && shouldLoadVideo ? "opacity-0" : "opacity-100"
          }`}
          priority={priority}
          sizes="100vw"
          src={imageSrc}
        />
      )}
      {videoSrc && shouldLoadVideo && (
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          poster={imageSrc}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
