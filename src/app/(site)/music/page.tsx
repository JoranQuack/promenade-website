import ImageBlock from "@/components/ui/ImageBlock";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const musicPageQuery = groq`*[_type == "musicPage"][0]{heroImage, title, intro}`;
const tracksQuery = groq`*[_type == "track"] | order(order asc){
  _id,
  title,
  "audioFileUrl": audioFile.asset->url
}`;

type TrackDoc = {
  _id: string;
  title: string;
  audioFileUrl?: string;
};

export default async function MusicPage() {
  const [musicPage, tracks] = await Promise.all([
    client.fetch<{
      heroImage?: unknown;
      title?: string;
      intro?: string;
    }>(musicPageQuery),
    client.fetch<TrackDoc[]>(tracksQuery),
  ]);

  const heroImageSrc = musicPage?.heroImage
    ? urlFor(musicPage.heroImage).width(2000).url()
    : undefined;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-7xl px-2 sm:px-4 flex flex-col items-center">
        {heroImageSrc && <ImageBlock alt="music" src={heroImageSrc} />}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">
          {musicPage?.title}
        </h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          {musicPage?.intro}
        </p>
        <div className="w-full flex flex-col gap-6">
          {tracks.map((track) => (
            <div
              className="bg-black/40 rounded-xl p-4 flex flex-col items-center"
              key={track._id}
            >
              <span className="font-semibold text-lg mb-2">{track.title}</span>
              {track.audioFileUrl && (
                <audio controls className="w-full max-w-xs">
                  <source src={track.audioFileUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
