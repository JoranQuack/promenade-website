import ImageBlock from "@/components/ui/ImageBlock";
import MembersShowcase from "@/components/about/MembersShowcase";
import { getAboutContent, getMembers } from "@/lib/content";

export default function About(): React.ReactElement {
  const content = getAboutContent();
  const members = getMembers();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-7xl px-2 sm:px-4">
        <ImageBlock alt={content.bannerLabel} src={content.bannerImage} />

        <p className="text-2xl text-center mb-2">{content.introTitle}</p>

        <p className="font-light mb-4">{content.introParagraph}</p>

        <p className="font-light mb-6">{content.bodyParagraph}</p>

        <MembersShowcase members={members} />
      </main>
    </div>
  );
}
