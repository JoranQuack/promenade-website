import Link from "next/link";
import BackgroundMedia from "@/components/ui/BackgroundMedia";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Align = "left" | "center" | "right";

const ALIGN_WRAPPER: Record<Align, string> = {
  left: "items-start text-left mr-auto",
  center: "items-center text-center mx-auto",
  right: "items-end text-right ml-auto",
};

const ALIGN_SCRIM: Record<Align, string> = {
  left: "bg-linear-to-r from-dark/85 via-dark/40 to-transparent",
  center: "bg-linear-to-t from-dark/85 via-dark/30 to-dark/40",
  right: "bg-linear-to-l from-dark/85 via-dark/40 to-transparent",
};

export default function CinematicSection({
  eyebrow,
  heading,
  body,
  videoSrc,
  imageSrc,
  align = "left",
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  videoSrc?: string;
  imageSrc?: string;
  align?: Align;
  ctaLabel?: string;
  ctaHref?: string;
}): React.ReactElement {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <BackgroundMedia
        alt={heading ?? "Promenade Quartet"}
        imageSrc={imageSrc}
        videoSrc={videoSrc}
      />

      <div className={`absolute inset-0 ${ALIGN_SCRIM[align]}`} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12">
        <div className={`flex flex-col max-w-xl gap-5 ${ALIGN_WRAPPER[align]}`}>
          {eyebrow && (
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-pred">
                {eyebrow}
              </span>
            </ScrollReveal>
          )}

          {heading && (
            <ScrollReveal delayMs={120}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-bright">
                {heading}
              </h2>
            </ScrollReveal>
          )}

          {body && (
            <ScrollReveal delayMs={240}>
              <p className="text-lg sm:text-xl font-light text-bright">
                {body}
              </p>
            </ScrollReveal>
          )}

          {ctaLabel && ctaHref && (
            <ScrollReveal delayMs={360}>
              <Link
                className="inline-block mt-2 rounded-full border border-bright/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-bright transition-colors duration-300 hover:bg-bright hover:text-dark"
                href={ctaHref}
              >
                {ctaLabel}
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
