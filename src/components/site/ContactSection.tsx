import CinematicSection from "@/components/site/CinematicSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactSection({
  eyebrow,
  title,
  intro,
  email,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  videoSrc,
  imageSrc,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  email?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitLabel?: string;
  videoSrc?: string;
  imageSrc?: string;
}): React.ReactElement {
  return (
    <>
      <CinematicSection
        align="center"
        eyebrow={eyebrow}
        heading={title}
        imageSrc={imageSrc}
        videoSrc={videoSrc}
      />

      <div className="bg-dark px-6 py-20 sm:px-12">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          {intro && (
            <ScrollReveal>
              <p className="mb-8 text-center text-lg text-bright">
                {intro}{" "}
                <a className="text-pred underline" href={`mailto:${email ?? ""}`}>
                  {email}
                </a>
                .
              </p>
            </ScrollReveal>
          )}

          <ScrollReveal className="w-full" delayMs={120}>
            <form className="flex w-full flex-col gap-4 rounded-2xl bg-bright/5 p-6">
              <label className="flex flex-col">
                <span className="mb-1 text-bright">{nameLabel}</span>
                <input
                  className="rounded p-2 bg-dark text-bright"
                  required
                  type="text"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 text-bright">{emailLabel}</span>
                <input
                  className="rounded p-2 bg-dark text-bright"
                  required
                  type="email"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 text-bright">{messageLabel}</span>
                <textarea
                  className="rounded p-2 bg-dark text-bright"
                  required
                  rows={4}
                />
              </label>
              <button
                className="rounded-full bg-pred p-3 font-semibold uppercase tracking-[0.2em] text-bright transition hover:opacity-80"
                type="submit"
              >
                {submitLabel}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
