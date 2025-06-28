"use client";

import Image from "next/image";
import Link from "next/link";

import { useCurrentPage } from "./CurrentPageContext";

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
    title: "SHOP",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export function Header(): React.ReactElement {
  const { currentPage } = useCurrentPage();

  return (
    <div className="flex justify-center w-full z-10 sticky top-0 left-0">
      <header className="w-8/12 bg-black/20 backdrop-blur-md flex items-center justify-between rounded-b-2xl p-5 px-8 fixed z-10">
        <Link className="" href="/">
          <Image
            alt="logo"
            className=""
            height={200}
            src="/logo.png"
            width={180}
          />
        </Link>

        <nav className="flex space-x-8">
          {routes.map((route) => (
            <Link
              className={`text-bright hover:opacity-50 duration-300 text-lg leading-3 ${
                currentPage === route.title
                  ? "text-pred font-light"
                  : "text-bright font-thin"
              }`}
              href={route.href}
              key={route.title}
            >
              {route.title}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
