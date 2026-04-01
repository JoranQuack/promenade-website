import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-01";
const token =
  process.env.SANITY_WRITE_TOKEN ||
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_AUTH_TOKEN ||
  process.env.SANITY_STUDIO_API_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing env vars. Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and one of SANITY_WRITE_TOKEN | SANITY_API_WRITE_TOKEN | SANITY_AUTH_TOKEN | SANITY_STUDIO_API_TOKEN",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const documents = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "Promenade Quartet",
    siteDescription:
      "Promenade is a barbershop quartet based in Christchurch, New Zealand.",
    logoPath: "/logo.png",
    navigation: [
      { _key: "home", title: "HOME", href: "/", openInNewTab: false },
      { _key: "about", title: "ABOUT", href: "/about", openInNewTab: false },
      { _key: "music", title: "MUSIC", href: "/music", openInNewTab: false },
      { _key: "events", title: "EVENTS", href: "/events", openInNewTab: false },
      {
        _key: "contact",
        title: "CONTACT",
        href: "/contact",
        openInNewTab: false,
      },
      {
        _key: "shop",
        title: "SHOP ↗",
        href: "https://promenadequartet.digitees.co.nz/",
        openInNewTab: true,
      },
    ],
  },
  {
    _id: "homepage",
    _type: "homepage",
    heading: "Welcome to Promenade Quartet",
    subheading: "A barbershop quartet based in Christchurch, New Zealand.",
  },
  {
    _id: "aboutPage",
    _type: "about",
    heroImagePath: "/about.jpg",
    intro:
      "We are a barbershop quartet based in Christchurch, New Zealand, dedicated to bringing joy through music and harmony and friendship and community and music.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur aliquam eius quod unde, nemo qui, autem, nulla asperiores consectetur esse architecto? Perspiciatis commodi, ullam rem iusto voluptatum modi hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae amet eaque, neque at dolor. Vero commodi officiis temporibus quo ut labore atque alias ab. Ad voluptas ipsam minima incidunt?",
  },
  {
    _id: "contactPage",
    _type: "contact",
    heroImagePath: "/contact.jpg",
    title: "Contact",
    email: "info@promenadequartet.com",
    intro: "For bookings and inquiries, please email us at",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send",
  },
  {
    _id: "eventsPage",
    _type: "eventsPage",
    heroImagePath: "/events.jpg",
    title: "Events",
    intro: "Stay tuned for upcoming events and performances!",
  },
  {
    _id: "musicPage",
    _type: "musicPage",
    heroImagePath: "/music.jpg",
    title: "Music",
    intro: "Listen to and explore our music releases below! More coming soon.",
  },
  {
    _id: "member-will-harris",
    _type: "member",
    name: "Will Harris",
    voice: "Tenor",
    bio: "No cap, Will's high notes hit different fr fr. Man's whole vibe is straight bussin when he starts belting. Lowkey the most sigma member",
    photoPath: "/willH.png",
    order: 1,
  },
  {
    _id: "member-will-lynch",
    _type: "member",
    name: "Will Lynch",
    voice: "Lead",
    bio: "Bro thinks he's the main character and honestly? He's not wrong. Will's voice is giving main character energy. Rizz level: unmatched. We stan a king.",
    photoPath: "/willL.png",
    website: "https://willlynchmusic.com",
    order: 2,
  },
  {
    _id: "member-kieran-king",
    _type: "member",
    name: "Kieran King",
    voice: "Bass",
    bio: "Kieran's bass notes are so deep they're basically in the backrooms. Mans really said 'I'll just vibrate the floor' and we respect that. Certified goofy ahh bass moment.",
    photoPath: "/kieran.png",
    order: 3,
  },
  {
    _id: "member-harry-burt",
    _type: "member",
    name: "Harry Burt",
    voice: "Baritone",
    bio: "Harry's mid-range is absolutely sending us. Bro's harmonies are chef's kiss, no thoughts just vibes. Periodt. That's the tea sis.",
    photoPath: "/harry.png",
    order: 4,
  },
  {
    _id: "event-harmony-in-the-park",
    _type: "event",
    date: "2026-04-15",
    title: "Harmony in the Park",
    location: "Hagley Park, Christchurch",
    description:
      "Join us for an afternoon of barbershop classics and new favorites in the heart of Christchurch!",
  },
  {
    _id: "event-winter-voices-festival",
    _type: "event",
    date: "2026-06-10",
    title: "Winter Voices Festival",
    location: "Isaac Theatre Royal, Christchurch",
    description:
      "A celebration of vocal harmony featuring Promenade and special guests.",
  },
  {
    _id: "track-harmony-road",
    _type: "track",
    title: 'Debut Single: "Harmony Road"',
    audioPath: "/audio/harmony-road.mp3",
    order: 1,
  },
  {
    _id: "track-live-chch-2025",
    _type: "track",
    title: "Live at Christchurch 2025",
    audioPath: "/audio/live-chch-2025.mp3",
    order: 2,
  },
];

for (const document of documents) {
  await client.createOrReplace(document);
}

console.log(
  `Seeded ${documents.length} documents into ${projectId}/${dataset}.`,
);
