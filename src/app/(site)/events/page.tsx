import ImageBlock from "@/components/ui/ImageBlock";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const eventsPageQuery = groq`*[_type == "eventsPage"][0]{heroImage, heroImagePath, title, intro}`;
const eventsQuery = groq`*[_type == "event"] | order(date asc){_id, date, title, location, description}`;

type EventDoc = {
  _id: string;
  date: string;
  title: string;
  location: string;
  description: string;
};

export default async function EventsPage() {
  const [eventsPage, events] = await Promise.all([
    client.fetch<{
      heroImage?: unknown;
      heroImagePath?: string;
      title?: string;
      intro?: string;
    }>(eventsPageQuery),
    client.fetch<EventDoc[]>(eventsQuery),
  ]);

  const heroImageSrc = eventsPage?.heroImage
    ? urlFor(eventsPage.heroImage).width(2000).url()
    : eventsPage?.heroImagePath;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-3xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        {heroImageSrc && <ImageBlock alt="events" src={heroImageSrc} />}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">
          {eventsPage?.title}
        </h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          {eventsPage?.intro}
        </p>
        <div className="w-full flex flex-col gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-black/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="sm:w-32 w-full text-center">
                <span className="block text-pred font-bold text-lg">
                  {new Date(event.date).toLocaleDateString()}
                </span>
                <span className="block text-bright text-sm">
                  {event.location}
                </span>
              </div>
              <div className="flex-1">
                <span className="font-semibold text-lg">{event.title}</span>
                <p className="text-bright text-base mt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
