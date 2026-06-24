import type Lenis from "lenis";

let activeLenis: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null): void {
  activeLenis = lenis;
}

export function scrollToElement(target: HTMLElement, offset = 0): void {
  if (activeLenis) {
    activeLenis.scrollTo(target, { offset });
    return;
  }
  target.scrollIntoView({ behavior: "smooth" });
}
