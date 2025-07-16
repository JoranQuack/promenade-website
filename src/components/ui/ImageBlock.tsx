"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const DEFAULT_IMAGE_WIDTH = 1500;
const DEFAULT_IMAGE_HEIGHT = 1000;
const PARALLAX_SCROLL_FACTOR = 0.3;
const MOUSE_SMOOTHING_FACTOR = 0.02;
const VIGNETTE_SMOOTHING_FACTOR = 0.01;

export default function ImageBlock({
  src,
  alt,
  width = DEFAULT_IMAGE_WIDTH,
  height = DEFAULT_IMAGE_HEIGHT,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}): React.ReactElement {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [smoothMousePosition, setSmoothMousePosition] = useState({
    x: 50,
    y: 50,
  });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [vignetteOpacity, setVignetteOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animate = (): void => {
      setSmoothMousePosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * MOUSE_SMOOTHING_FACTOR,
        y: prev.y + (mousePosition.y - prev.y) * MOUSE_SMOOTHING_FACTOR,
      }));

      const targetOpacity = isMouseInside ? 0.5 : 0;

      setVignetteOpacity(
        (prev) => prev + (targetOpacity - prev) * VIGNETTE_SMOOTHING_FACTOR * 2
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return (): void => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMouseInside]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = (): void => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = (): void => {
    setMousePosition({ x: 50, y: 50 });
    setIsMouseInside(false);
  };

  return (
    <div
      className="flex justify-center items-center w-full mb-6 h-96 overflow-hidden rounded-2xl relative bg-black"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        alt={alt}
        className="w-full absolute opacity-75 hover:opacity-60 transition-opacity duration-1000"
        height={height}
        src={src}
        style={{
          transform: `translateY(${scrollY * PARALLAX_SCROLL_FACTOR}px)`,
          top: "-20%",
          height: "300%",
          objectFit: "cover",
        }}
        width={width}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: `blur(${vignetteOpacity * 8}px)`,
          maskImage: `radial-gradient(circle 600px at ${smoothMousePosition.x}% ${smoothMousePosition.y}%, transparent 0%, transparent 10%, black 40%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 600px at ${smoothMousePosition.x}% ${smoothMousePosition.y}%, transparent 0%, transparent 10%, black 40%, black 100%)`,
        }}
      />

      <span className="z-0 text-6xl font-thin tracking-wider">
        {alt.toUpperCase()}
      </span>
    </div>
  );
}
