import {
  getDocumentBySlug,
  getDocuments,
  getSingletonBySlug,
} from "outstatic/server";

export type NavItem = {
  title: string;
  href: string;
  order: number;
  openInNewTab: boolean;
};

export type Member = {
  slug: string;
  name: string;
  image: string;
  voice: string;
  bio: string;
  website: string;
  websiteLabel: string;
  order: number;
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  order: number;
};

export type Track = {
  slug: string;
  title: string;
  description: string;
  audioFile: string;
  externalLabel: string;
  externalHref: string;
  order: number;
};

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
};

export type AboutContent = {
  bannerImage: string;
  bannerLabel: string;
  introTitle: string;
  introParagraph: string;
  bodyParagraph: string;
};

export type MusicContent = {
  bannerImage: string;
  bannerLabel: string;
  pageTitle: string;
  pageSubtitle: string;
};

export type EventsContent = {
  bannerImage: string;
  bannerLabel: string;
  pageTitle: string;
  pageSubtitle: string;
};

export type ContactContent = {
  bannerImage: string;
  bannerLabel: string;
  pageTitle: string;
  pageSubtitle: string;
  emailLabel: string;
  emailAddress: string;
  ctaLabel: string;
};

const DEFAULT_HOME: HomeContent = {
  heroTitle: "Welcome to Promenade Quartet",
  heroSubtitle: "A barbershop quartet based in Christchurch, New Zealand.",
};

const DEFAULT_ABOUT: AboutContent = {
  bannerImage: "/about.jpg",
  bannerLabel: "about",
  introTitle:
    "We are a barbershop quartet based in Christchurch, New Zealand, dedicated to bringing joy through music and harmony and friendship and community and music.",
  introParagraph:
    "We are a barbershop quartet based in Christchurch, New Zealand, dedicated to bringing joy through music and harmony and friendship and community and music.",
  bodyParagraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur aliquam eius quod unde, nemo qui, autem, nulla asperiores consectetur esse architecto? Perspiciatis commodi, ullam rem iusto voluptatum modi hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae amet eaque, neque at dolor. Vero commodi officiis temporibus quo ut labore atque alias ab. Ad voluptas ipsam minima incidunt?",
};

const DEFAULT_MUSIC: MusicContent = {
  bannerImage: "/music.jpg",
  bannerLabel: "music",
  pageTitle: "Music",
  pageSubtitle:
    "Listen to and explore our music releases below! More coming soon.",
};

const DEFAULT_EVENTS: EventsContent = {
  bannerImage: "/events.jpg",
  bannerLabel: "events",
  pageTitle: "Events",
  pageSubtitle: "Stay tuned for upcoming events and performances!",
};

const DEFAULT_CONTACT: ContactContent = {
  bannerImage: "/contact.jpg",
  bannerLabel: "contact",
  pageTitle: "Contact",
  pageSubtitle: "For bookings and inquiries, please email us at",
  emailLabel: "info@promenadequartet.com",
  emailAddress: "info@promenadequartet.com",
  ctaLabel: "Email Us",
};

function readString(
  record: Record<string, unknown> | null,
  key: string,
  fallback: string,
): string {
  const value = record?.[key];

  return typeof value === "string" && value.trim().length > 0
    ? value
    : fallback;
}

function readNumber(
  record: Record<string, unknown>,
  key: string,
  fallback: number,
): number {
  const value = record[key];

  return typeof value === "number" ? value : fallback;
}

function readBoolean(
  record: Record<string, unknown>,
  key: string,
  fallback: boolean,
): boolean {
  const value = record[key];

  return typeof value === "boolean" ? value : fallback;
}

export function getNavigation(): NavItem[] {
  const docsResult = getDocuments("navigation", [
    "slug",
    "title",
    "href",
    "openInNewTab",
    "order",
  ]) as unknown;
  const docs = Array.isArray(docsResult)
    ? (docsResult as Record<string, unknown>[])
    : [];

  return docs
    .map((doc, index) => ({
      title: readString(doc, "title", "Link"),
      href: readString(doc, "href", "/"),
      order: readNumber(doc, "order", index + 1),
      openInNewTab: readBoolean(doc, "openInNewTab", false),
    }))
    .sort((a, b) => a.order - b.order);
}

export function getMembers(): Member[] {
  const docsResult = getDocuments("members", [
    "slug",
    "name",
    "voice",
    "image",
    "bio",
    "website",
    "websiteLabel",
    "order",
  ]) as unknown;
  const docs = Array.isArray(docsResult)
    ? (docsResult as Record<string, unknown>[])
    : [];

  return docs
    .map((doc, index) => ({
      slug: readString(doc, "slug", `member-${index + 1}`),
      name: readString(doc, "name", "Member"),
      image: readString(doc, "image", "/logo.png"),
      voice: readString(doc, "voice", "Voice"),
      bio: readString(doc, "bio", ""),
      website: readString(doc, "website", ""),
      websiteLabel: readString(doc, "websiteLabel", "Visit Website"),
      order: readNumber(doc, "order", index + 1),
    }))
    .sort((a, b) => a.order - b.order);
}

export function getEvents(): EventItem[] {
  const docsResult = getDocuments("events", [
    "slug",
    "title",
    "date",
    "location",
    "description",
    "order",
  ]) as unknown;
  const docs = Array.isArray(docsResult)
    ? (docsResult as Record<string, unknown>[])
    : [];

  return docs
    .map((doc, index) => ({
      slug: readString(doc, "slug", `event-${index + 1}`),
      title: readString(doc, "title", "Event"),
      date: readString(doc, "date", ""),
      location: readString(doc, "location", ""),
      description: readString(doc, "description", ""),
      order: readNumber(doc, "order", index + 1),
    }))
    .sort((a, b) => a.order - b.order);
}

export function getTracks(): Track[] {
  const docsResult = getDocuments("tracks", [
    "slug",
    "title",
    "description",
    "audioFile",
    "externalLabel",
    "externalHref",
    "order",
  ]) as unknown;
  const docs = Array.isArray(docsResult)
    ? (docsResult as Record<string, unknown>[])
    : [];

  return docs
    .map((doc, index) => ({
      slug: readString(doc, "slug", `track-${index + 1}`),
      title: readString(doc, "title", "Track"),
      description: readString(doc, "description", ""),
      audioFile: readString(doc, "audioFile", ""),
      externalLabel: readString(doc, "externalLabel", "Listen"),
      externalHref: readString(doc, "externalHref", ""),
      order: readNumber(doc, "order", index + 1),
    }))
    .sort((a, b) => a.order - b.order);
}

export function getHomeContent(): HomeContent {
  const singleton = getSingletonBySlug("home") as Record<
    string,
    unknown
  > | null;

  return {
    heroTitle: readString(singleton, "heroTitle", DEFAULT_HOME.heroTitle),
    heroSubtitle: readString(
      singleton,
      "heroSubtitle",
      DEFAULT_HOME.heroSubtitle,
    ),
  };
}

export function getAboutContent(): AboutContent {
  const singleton = getSingletonBySlug("about") as Record<
    string,
    unknown
  > | null;

  return {
    bannerImage: readString(
      singleton,
      "bannerImage",
      DEFAULT_ABOUT.bannerImage,
    ),
    bannerLabel: readString(
      singleton,
      "bannerLabel",
      DEFAULT_ABOUT.bannerLabel,
    ),
    introTitle: readString(singleton, "introTitle", DEFAULT_ABOUT.introTitle),
    introParagraph: readString(
      singleton,
      "introParagraph",
      DEFAULT_ABOUT.introParagraph,
    ),
    bodyParagraph: readString(
      singleton,
      "bodyParagraph",
      DEFAULT_ABOUT.bodyParagraph,
    ),
  };
}

export function getMusicContent(): MusicContent {
  const singleton = getSingletonBySlug("music") as Record<
    string,
    unknown
  > | null;

  return {
    bannerImage: readString(
      singleton,
      "bannerImage",
      DEFAULT_MUSIC.bannerImage,
    ),
    bannerLabel: readString(
      singleton,
      "bannerLabel",
      DEFAULT_MUSIC.bannerLabel,
    ),
    pageTitle: readString(singleton, "pageTitle", DEFAULT_MUSIC.pageTitle),
    pageSubtitle: readString(
      singleton,
      "pageSubtitle",
      DEFAULT_MUSIC.pageSubtitle,
    ),
  };
}

export function getEventsContent(): EventsContent {
  const singleton = getSingletonBySlug("events") as Record<
    string,
    unknown
  > | null;

  return {
    bannerImage: readString(
      singleton,
      "bannerImage",
      DEFAULT_EVENTS.bannerImage,
    ),
    bannerLabel: readString(
      singleton,
      "bannerLabel",
      DEFAULT_EVENTS.bannerLabel,
    ),
    pageTitle: readString(singleton, "pageTitle", DEFAULT_EVENTS.pageTitle),
    pageSubtitle: readString(
      singleton,
      "pageSubtitle",
      DEFAULT_EVENTS.pageSubtitle,
    ),
  };
}

export function getContactContent(): ContactContent {
  const singleton = getSingletonBySlug("contact") as Record<
    string,
    unknown
  > | null;

  return {
    bannerImage: readString(
      singleton,
      "bannerImage",
      DEFAULT_CONTACT.bannerImage,
    ),
    bannerLabel: readString(
      singleton,
      "bannerLabel",
      DEFAULT_CONTACT.bannerLabel,
    ),
    pageTitle: readString(singleton, "pageTitle", DEFAULT_CONTACT.pageTitle),
    pageSubtitle: readString(
      singleton,
      "pageSubtitle",
      DEFAULT_CONTACT.pageSubtitle,
    ),
    emailLabel: readString(singleton, "emailLabel", DEFAULT_CONTACT.emailLabel),
    emailAddress: readString(
      singleton,
      "emailAddress",
      DEFAULT_CONTACT.emailAddress,
    ),
    ctaLabel: readString(singleton, "ctaLabel", DEFAULT_CONTACT.ctaLabel),
  };
}

export function getTrackBySlug(slug: string): Track | null {
  const doc = getDocumentBySlug("tracks", slug) as Record<
    string,
    unknown
  > | null;

  if (!doc) {
    return null;
  }

  return {
    slug: readString(doc, "slug", slug),
    title: readString(doc, "title", "Track"),
    description: readString(doc, "description", ""),
    audioFile: readString(doc, "audioFile", ""),
    externalLabel: readString(doc, "externalLabel", "Listen"),
    externalHref: readString(doc, "externalHref", ""),
    order: readNumber(doc, "order", 1),
  };
}
