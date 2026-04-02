import ImageBlock from "@/components/ui/ImageBlock";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const contactQuery = groq`*[_type == "contact"][0]{
  heroImage,
  heroImagePath,
  title,
  intro,
  email,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel
}`;

export default async function ContactPage() {
  const contact = await client.fetch<{
    heroImage?: unknown;
    heroImagePath?: string;
    title?: string;
    intro?: string;
    email?: string;
    nameLabel?: string;
    emailLabel?: string;
    messageLabel?: string;
    submitLabel?: string;
  }>(contactQuery);

  const heroImageSrc = contact?.heroImage
    ? urlFor(contact.heroImage).width(2000).url()
    : contact?.heroImagePath;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-7xl px-2 sm:px-4 flex flex-col items-center">
        {heroImageSrc && <ImageBlock alt="contact" src={heroImageSrc} />}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">
          {contact?.title}
        </h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          {contact?.intro}
          <a
            href={`mailto:${contact?.email ?? ""}`}
            className="underline text-pred ml-1"
          >
            {contact?.email}
          </a>
          .
        </p>
        <form className="w-full flex flex-col gap-4 bg-black/40 rounded-xl p-6">
          <label className="flex flex-col">
            <span className="mb-1">{contact?.nameLabel}</span>
            <input
              type="text"
              className="rounded p-2 bg-dark text-bright"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">{contact?.emailLabel}</span>
            <input
              type="email"
              className="rounded p-2 bg-dark text-bright"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">{contact?.messageLabel}</span>
            <textarea
              className="rounded p-2 bg-dark text-bright"
              rows={4}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-pred text-bright rounded p-2 font-semibold hover:opacity-80 transition"
          >
            {contact?.submitLabel}
          </button>
        </form>
      </main>
    </div>
  );
}
