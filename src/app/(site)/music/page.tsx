import ImageBlock from "@/components/ui/ImageBlock";
import { getMusicContent, getTracks } from "@/lib/content";

export default function MusicPage() {
  const content = getMusicContent();
  const tracks = getTracks();

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
          {tracks.map((track) => (
            <div
              className="bg-black/40 rounded-xl p-4 flex flex-col items-center"
              key={track.slug}
            >
              <span className="font-semibold text-lg mb-2">{track.title}</span>
              {track.description && (
                <p className="text-bright text-sm mb-3 text-center">
                  {track.description}
                </p>
              )}

              {track.audioFile ? (
                <audio controls className="w-full max-w-xs">
                  <source src={track.audioFile} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : null}

              {track.externalHref && (
                <a
                  className="text-pred underline mt-3"
                  href={track.externalHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {track.externalLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
