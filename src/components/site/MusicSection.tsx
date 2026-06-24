import CinematicSection from "@/components/site/CinematicSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Track = {
  _id: string;
  title: string;
  audioFileUrl?: string;
};

export default function MusicSection({
  eyebrow,
  title,
  intro,
  videoSrc,
  imageSrc,
  tracks,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  videoSrc?: string;
  imageSrc?: string;
  tracks: Track[];
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
          {tracks.map((track, index) => (
            <ScrollReveal delayMs={index * 80} key={track._id}>
              <div className="flex flex-col gap-4 rounded-2xl bg-bright/5 p-6 sm:flex-row sm:items-center sm:gap-8">
                <span className="text-3xl font-thin text-pred">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-xl font-semibold text-bright">
                  {track.title}
                </span>
                {track.audioFileUrl && (
                  <audio className="w-full sm:w-72" controls>
                    <source src={track.audioFileUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
