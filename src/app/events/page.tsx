import ImageBlock from "@/components/ui/ImageBlock";

const events = [
  {
    date: "2026-04-15",
    title: "Harmony in the Park",
    location: "Hagley Park, Christchurch",
    description:
      "Join us for an afternoon of barbershop classics and new favorites in the heart of Christchurch!",
  },
  {
    date: "2026-06-10",
    title: "Winter Voices Festival",
    location: "Isaac Theatre Royal, Christchurch",
    description:
      "A celebration of vocal harmony featuring Promenade and special guests.",
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-3xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        <ImageBlock alt="events" src="/events.jpg" />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">Events</h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          Stay tuned for upcoming events and performances!
        </p>
        <div className="w-full flex flex-col gap-6">
          {events.map((event) => (
            <div
              key={event.title}
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
