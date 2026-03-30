"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

const routes = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "MUSIC",
    href: "/music",
  },
  {
    title: "EVENTS",
    href: "/events",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
  {
    title: "SHOP ↗",
    href: "https://promenadequartet.digitees.co.nz/",
  },
];

export function Header(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tailwindColor = "var(--color-bright)";
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <header
        className={`w-full flex items-center justify-between px-8 fixed z-10 top-0 duration-500 transition-all
                ${scrolled ? "bg-black/40 backdrop-blur-md h-20" : "bg-transparent backdrop-blur-none h-28"}
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
          {routes.map((route) => {
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
                key={route.title}
                target={route.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  route.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {route.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            color={tailwindColor}
          />
          {/* Mobile Slide-down Menu */}
          <nav
            className={`fixed left-0 w-screen bg-black/80 backdrop-blur-md flex flex-col gap-8 items-center justify-center z-50 transition-all duration-300 top-20 h-full
              ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
            `}
          >
            {routes.map((route) => {
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
                  key={route.title}
                  onClick={() => setMenuOpen(false)}
                  target={route.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    route.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {route.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </div>
  );
}
