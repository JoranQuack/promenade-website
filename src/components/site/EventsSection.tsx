import CinematicSection from "@/components/site/CinematicSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

type EventItem = {
  _id: string;
  date: string;
  title: string;
  location: string;
  description: string;
};

export default function EventsSection({
  eyebrow,
  title,
  intro,
  videoSrc,
  imageSrc,
  events,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  videoSrc?: string;
  imageSrc?: string;
  events: EventItem[];
}): React.ReactElement {
  return (
    <>
      <CinematicSection
        align="center"
        body={intro}
        eyebrow={eyebrow}
        heading={title}
        imageSrc={imageSrc}
        videoSrc={videoSrc}
      />

      <div className="bg-dark px-6 py-20 sm:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {events.map((event, index) => (
            <ScrollReveal delayMs={index * 80} key={event._id}>
              <div className="flex flex-col gap-4 rounded-2xl bg-bright/5 p-6 sm:flex-row sm:items-center">
                <div className="w-full text-center sm:w-32">
                  <span className="block text-lg font-bold text-pred">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                  <span className="block text-sm text-bright/70">
                    {event.location}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-lg font-semibold text-bright">
                    {event.title}
                  </span>
                  <p className="mt-1 text-base text-bright/80">
                    {event.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
