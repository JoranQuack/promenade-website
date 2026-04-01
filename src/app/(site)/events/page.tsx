import ImageBlock from "@/components/ui/ImageBlock";
import { getEvents, getEventsContent } from "@/lib/content";

export default function EventsPage() {
  const content = getEventsContent();
  const events = getEvents();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-3xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        <ImageBlock alt={content.bannerLabel} src={content.bannerImage} />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">
          {content.pageTitle}
        </h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          {content.pageSubtitle}
        </p>
        <div className="w-full flex flex-col gap-6">
          {events.map((event) => (
            <div
              key={event.slug}
              className="bg-black/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="sm:w-32 w-full text-center">
                <span className="block text-pred font-bold text-lg">
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : "TBD"}
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
