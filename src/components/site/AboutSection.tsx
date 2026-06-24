import AboutMembers from "@/components/site/AboutMembers";
import CinematicSection from "@/components/site/CinematicSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Member = {
  _id: string;
  name: string;
  voice: string;
  bio: string;
  photoSrc: string;
  website?: string;
};

export default function AboutSection({
  eyebrow,
  heading,
  intro,
  body,
  videoSrc,
  imageSrc,
  members,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  body?: string;
  videoSrc?: string;
  imageSrc?: string;
  members: Member[];
}): React.ReactElement {
  return (
    <>
      <CinematicSection
        align="center"
        body={intro}
        eyebrow={eyebrow}
        heading={heading}
        imageSrc={imageSrc}
        videoSrc={videoSrc}
      />

      <div className="bg-dark px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-7xl">
          {body && (
            <ScrollReveal className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-lg font-light text-bright">{body}</p>
            </ScrollReveal>
          )}

          <ScrollReveal>
            <AboutMembers members={members} />
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
