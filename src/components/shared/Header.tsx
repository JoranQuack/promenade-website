"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

type HeaderRoute = {
  title: string;
  href: string;
  openInNewTab?: boolean;
};

type HeaderProps = {
  routes: HeaderRoute[];
};

export default function Header({ routes }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [frozenScrolledState, setFrozenScrolledState] = useState(false);
  const tailwindColor = "var(--color-bright)";
  const pathname = usePathname();
  const isCompactHeader = menuOpen ? frozenScrolledState : scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div>
      <header
        className={`w-full flex items-center justify-between px-8 fixed z-60 top-0 duration-500 transition-all
          ${isCompactHeader ? "bg-black/40 backdrop-blur-md h-20" : "bg-transparent backdrop-blur-none h-28"}
              `}
      >
        <Link href="/">
          <Image
            alt="logo"
            className=""
            height={200}
            src="/logo.png"
            width={180}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {routes.map((route, index) => {
            const isCurrent =
              route.href.startsWith("/") &&
              (route.href === "/"
                ? pathname === "/"
                : pathname.startsWith(route.href));
            return (
              <Link
                className={`text-bright hover:opacity-50 duration-300 text-lg leading-3 ${
                  isCurrent ? "text-pred font-light" : "text-bright font-thin"
                }`}
                href={route.href}
                key={`${route.href}-${route.title}-${index}`}
                target={route.openInNewTab ? "_blank" : undefined}
                rel={route.openInNewTab ? "noopener noreferrer" : undefined}
              >
                {route.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger kept in header so it stays aligned with header layout */}
        <div className="md:hidden relative z-70">
          <Hamburger
            toggled={menuOpen}
            toggle={(value) => {
              const nextOpen =
                typeof value === "function" ? value(menuOpen) : value;
              if (nextOpen && !menuOpen) {
                setFrozenScrolledState(scrolled);
              }
              setMenuOpen(nextOpen);
            }}
            color={tailwindColor}
          />
        </div>
      </header>

      {/* Fullscreen mobile navigation outside header for clean blur composition */}
      <nav
        className={`md:hidden fixed inset-0 w-screen h-screen bg-black/55 backdrop-blur-xl flex flex-col gap-8 items-center justify-center z-50 transition-all duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden={!menuOpen}
      >
        {routes.map((route, index) => {
          const isCurrent =
            route.href.startsWith("/") &&
            (route.href === "/"
              ? pathname === "/"
              : pathname.startsWith(route.href));
          return (
            <Link
              className={`text-bright text-2xl ${
                isCurrent ? "text-pred font-light" : "text-bright font-thin"
              }`}
              href={route.href}
              key={`${route.href}-${route.title}-${index}`}
              onClick={() => setMenuOpen(false)}
              target={route.openInNewTab ? "_blank" : undefined}
              rel={route.openInNewTab ? "noopener noreferrer" : undefined}
            >
              {route.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
