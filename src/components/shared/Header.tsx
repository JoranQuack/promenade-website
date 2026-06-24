"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { scrollToElement } from "@/lib/lenis";

const SCROLL_SPY_ROOT_MARGIN = "-50% 0px -50% 0px";

type Route = {
  title: string;
  href: string;
  openInNewTab?: boolean;
};

export default function Header({
  routes,
  logoPath,
}: {
  routes: Route[];
  logoPath?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [frozenScrolledState, setFrozenScrolledState] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const tailwindColor = "var(--color-bright)";
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

  useEffect(() => {
    const sectionIds = routes
      .filter((route) => route.href.startsWith("#"))
      .map((route) => route.href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: SCROLL_SPY_ROOT_MARGIN, threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [routes]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    if (!href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    scrollToElement(target);
    window.history.replaceState(null, "", href);
    setActiveId(target.id);
    setMenuOpen(false);
  };

  return (
    <div>
      <header
        className={`w-full flex items-center justify-between px-8 fixed z-60 top-0 duration-500 transition-all
          ${isCompactHeader ? "bg-black/40 backdrop-blur-md h-20" : "bg-transparent backdrop-blur-none h-28"}
              `}
      >
        <Link href="#home" onClick={(event) => handleNavClick(event, "#home")}>
          {logoPath && (
            <Image
              alt="logo"
              className=""
              height={200}
              loading="eager"
              priority
              src={logoPath}
              style={{ height: "auto" }}
              width={180}
            />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {routes.map((route) => {
            const isCurrent =
              route.href.startsWith("#") && activeId === route.href.slice(1);
            return (
              <Link
                className={`text-bright hover:opacity-50 duration-300 text-lg leading-3 ${
                  isCurrent ? "text-pred font-light" : "text-bright font-thin"
                }`}
                href={route.href}
                key={route.title}
                onClick={(event) => handleNavClick(event, route.href)}
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
        {routes.map((route) => {
          const isCurrent =
            route.href.startsWith("#") && activeId === route.href.slice(1);
          return (
            <Link
              className={`text-bright text-2xl ${
                isCurrent ? "text-pred font-light" : "text-bright font-thin"
              }`}
              href={route.href}
              key={route.title}
              onClick={(event) => handleNavClick(event, route.href)}
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
