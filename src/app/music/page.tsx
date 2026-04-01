import ImageBlock from "@/components/ui/ImageBlock";

export default function MusicPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-3xl mt-24 px-2 sm:px-4 flex flex-col items-center">
        <ImageBlock alt="music" src="/music.jpg" />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">Music</h1>
        <p className="text-base sm:text-lg text-center max-w-md mb-6">
          Listen to and explore our music releases below! More coming soon.
        </p>
        <div className="w-full flex flex-col gap-6">
          {/* Example music embed or list - replace with real content as available */}
          <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center">
            <span className="font-semibold text-lg mb-2">
              Debut Single: "Harmony Road"
            </span>
            <audio controls className="w-full max-w-xs">
              <source src="/audio/harmony-road.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center">
            <span className="font-semibold text-lg mb-2">
              Live at Christchurch 2025
            </span>
            <audio controls className="w-full max-w-xs">
              <source src="/audio/live-chch-2025.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>
    </div>
  );
}
