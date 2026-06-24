import { groq } from "next-sanity";
import AboutSection from "@/components/site/AboutSection";
import CinematicSection from "@/components/site/CinematicSection";
import ContactSection from "@/components/site/ContactSection";
import EventsSection from "@/components/site/EventsSection";
import Hero from "@/components/site/Hero";
import MusicSection from "@/components/site/MusicSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type FileAsset = { asset?: { url?: string } };

const homepageQuery = groq`*[_type == "homepage"][0]{
  heroEyebrow,
  heading,
  subheading,
  heroVideo{ asset->{url} },
  heroPoster,
  scrollSections[]{
    _key,
    eyebrow,
    heading,
    body,
    backgroundVideo{ asset->{url} },
    backgroundImage,
    align,
    ctaLabel,
    ctaHref
  }
}`;

const aboutQuery = groq`*[_type == "about"][0]{
  eyebrow, heading, heroVideo{ asset->{url} }, heroImage, intro, body
}`;

const membersQuery = groq`*[_type == "member"] | order(order asc){
  _id, name, voice, bio, website, photo
}`;

const musicPageQuery = groq`*[_type == "musicPage"][0]{
  eyebrow, heroVideo{ asset->{url} }, heroImage, title, intro
}`;

const tracksQuery = groq`*[_type == "track"] | order(order asc){
  _id, title, "audioFileUrl": audioFile.asset->url
}`;

const eventsPageQuery = groq`*[_type == "eventsPage"][0]{
  eyebrow, heroVideo{ asset->{url} }, heroImage, title, intro
}`;

const eventsQuery = groq`*[_type == "event"] | order(date asc){
  _id, date, title, location, description
}`;

const contactQuery = groq`*[_type == "contact"][0]{
  eyebrow, heroVideo{ asset->{url} }, heroImage, title, email, intro,
  nameLabel, emailLabel, messageLabel, submitLabel
}`;

type ScrollSectionDoc = {
  _key: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  backgroundVideo?: FileAsset;
  backgroundImage?: unknown;
  align?: "auto" | "left" | "center" | "right";
  ctaLabel?: string;
  ctaHref?: string;
};

type HomepageDoc = {
  heroEyebrow?: string;
  heading?: string;
  subheading?: string;
  heroVideo?: FileAsset;
  heroPoster?: unknown;
  scrollSections?: ScrollSectionDoc[];
};

type AboutDoc = {
  eyebrow?: string;
  heading?: string;
  heroVideo?: FileAsset;
  heroImage?: unknown;
  intro?: string;
  body?: string;
};

type MemberDoc = {
  _id: string;
  name: string;
  voice: string;
  bio: string;
  website?: string;
  photo?: unknown;
};

type MusicPageDoc = {
  eyebrow?: string;
  heroVideo?: FileAsset;
  heroImage?: unknown;
  title?: string;
  intro?: string;
};

type TrackDoc = {
  _id: string;
  title: string;
  audioFileUrl?: string;
};

type EventsPageDoc = {
  eyebrow?: string;
  heroVideo?: FileAsset;
  heroImage?: unknown;
  title?: string;
  intro?: string;
};

type EventDoc = {
  _id: string;
  date: string;
  title: string;
  location: string;
  description: string;
};

type ContactDoc = {
  eyebrow?: string;
  heroVideo?: FileAsset;
  heroImage?: unknown;
  title?: string;
  email?: string;
  intro?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  submitLabel?: string;
};

export default async function Home(): Promise<React.ReactElement> {
  const [homepage, about, members, musicPage, tracks, eventsPage, events, contact] =
    await Promise.all([
      client.fetch<HomepageDoc>(homepageQuery),
      client.fetch<AboutDoc>(aboutQuery),
      client.fetch<MemberDoc[]>(membersQuery),
      client.fetch<MusicPageDoc>(musicPageQuery),
      client.fetch<TrackDoc[]>(tracksQuery),
      client.fetch<EventsPageDoc>(eventsPageQuery),
      client.fetch<EventDoc[]>(eventsQuery),
      client.fetch<ContactDoc>(contactQuery),
    ]);

  const heroPosterSrc = homepage?.heroPoster
    ? urlFor(homepage.heroPoster).width(2400).url()
    : undefined;

  const storySections = homepage?.scrollSections ?? [];

  const normalizedMembers = members.map((member) => ({
    _id: member._id,
    name: member.name,
    voice: member.voice,
    bio: member.bio,
    website: member.website,
    photoSrc: member.photo ? urlFor(member.photo).width(1200).url() : "",
  }));

  return (
    <div className="-mt-28">
      <div id="home">
        <Hero
          eyebrow={homepage?.heroEyebrow}
          heading={homepage?.heading}
          posterSrc={heroPosterSrc}
          subheading={homepage?.subheading}
          videoSrc={homepage?.heroVideo?.asset?.url}
        />
      </div>

      {storySections.map((section, index) => {
        const align: "left" | "center" | "right" =
          section.align === "left" ||
          section.align === "center" ||
          section.align === "right"
            ? section.align
            : index % 2 === 0
              ? "left"
              : "right";

        return (
          <CinematicSection
            key={section._key}
            align={align}
            body={section.body}
            ctaHref={section.ctaHref}
            ctaLabel={section.ctaLabel}
            eyebrow={section.eyebrow}
            heading={section.heading}
            imageSrc={
              section.backgroundImage
                ? urlFor(section.backgroundImage).width(2400).url()
                : undefined
            }
            videoSrc={section.backgroundVideo?.asset?.url}
          />
        );
      })}

      <div id="about">
        <AboutSection
          body={about?.body}
          eyebrow={about?.eyebrow}
          heading={about?.heading}
          imageSrc={
            about?.heroImage ? urlFor(about.heroImage).width(2400).url() : undefined
          }
          intro={about?.intro}
          members={normalizedMembers}
          videoSrc={about?.heroVideo?.asset?.url}
        />
      </div>

      <div id="music">
        <MusicSection
          eyebrow={musicPage?.eyebrow}
          imageSrc={
            musicPage?.heroImage
              ? urlFor(musicPage.heroImage).width(2400).url()
              : undefined
          }
          intro={musicPage?.intro}
          title={musicPage?.title}
          tracks={tracks}
          videoSrc={musicPage?.heroVideo?.asset?.url}
        />
      </div>

      <div id="events">
        <EventsSection
          events={events}
          eyebrow={eventsPage?.eyebrow}
          imageSrc={
            eventsPage?.heroImage
              ? urlFor(eventsPage.heroImage).width(2400).url()
              : undefined
          }
          intro={eventsPage?.intro}
          title={eventsPage?.title}
          videoSrc={eventsPage?.heroVideo?.asset?.url}
        />
      </div>

      <div id="contact">
        <ContactSection
          email={contact?.email}
          emailLabel={contact?.emailLabel}
          eyebrow={contact?.eyebrow}
          imageSrc={
            contact?.heroImage
              ? urlFor(contact.heroImage).width(2400).url()
              : undefined
          }
          intro={contact?.intro}
          messageLabel={contact?.messageLabel}
          nameLabel={contact?.nameLabel}
          submitLabel={contact?.submitLabel}
          title={contact?.title}
          videoSrc={contact?.heroVideo?.asset?.url}
        />
      </div>
    </div>
  );
}
