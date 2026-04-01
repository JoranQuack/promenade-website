import { groq } from "next-sanity";
import AboutMembers from "@/components/site/AboutMembers";
import ImageBlock from "@/components/ui/ImageBlock";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const aboutQuery = groq`*[_type == "about"][0]{heroImage, heroImagePath, intro, body}`;
const membersQuery = groq`*[_type == "member"] | order(order asc){
  _id,
  name,
  voice,
  bio,
  website,
  photoPath,
  photo
}`;

type MemberDoc = {
  _id: string;
  name: string;
  voice: string;
  bio: string;
  website?: string;
  photoPath?: string;
  photo?: unknown;
};

export default async function About(): Promise<React.ReactElement> {
  const [about, members] = await Promise.all([
    client.fetch<{
      heroImage?: unknown;
      heroImagePath?: string;
      intro?: string;
      body?: string;
    }>(aboutQuery),
    client.fetch<MemberDoc[]>(membersQuery),
  ]);

  const heroImageSrc = about?.heroImage
    ? urlFor(about.heroImage).width(2000).url()
    : about?.heroImagePath;

  const normalizedMembers = members.map((member) => ({
    _id: member._id,
    name: member.name,
    voice: member.voice,
    bio: member.bio,
    website: member.website,
    photoSrc: member.photo
      ? urlFor(member.photo).width(1200).url()
      : (member.photoPath ?? ""),
  }));

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-7xl px-2 sm:px-4">
        {heroImageSrc && <ImageBlock alt="about" src={heroImageSrc} />}

        <p className="text-2xl text-center mb-2">{about?.intro}</p>

        <p className="font-light mb-6">{about?.body}</p>

        <AboutMembers members={normalizedMembers} />
      </main>
    </div>
  );
}
