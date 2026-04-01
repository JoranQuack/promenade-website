import { getHomeContent } from "@/lib/content";

export default function Home(): React.ReactElement {
  const content = getHomeContent();

  return (
    <div className="flex flex-col min-h-screen items-center -mt-28">
      <main className="h-full">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-6xl text-white font-bold mb-4 text-center">
            {content.heroTitle}
          </h1>
          <p className="text-xl text-white mb-8 text-center">
            {content.heroSubtitle}
          </p>
        </div>
      </main>
    </div>
  );
}
