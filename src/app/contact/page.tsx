import ImageBlock from "@/components/ui/ImageBlock";
import { getContactContent } from "@/lib/content";

export default function ContactPage() {
  const content = getContactContent();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-2xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        <ImageBlock alt={content.bannerLabel} src={content.bannerImage} />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">
          {content.pageTitle}
        </h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          {content.pageSubtitle}
          <a
            href={`mailto:${content.emailAddress}`}
            className="underline text-pred ml-1"
          >
            {content.emailLabel}
          </a>
          .
        </p>
        <a
          className="bg-pred text-bright rounded p-3 px-8 font-semibold hover:opacity-80 transition"
          href={`mailto:${content.emailAddress}`}
        >
          {content.ctaLabel}
        </a>
      </main>
    </div>
  );
}
