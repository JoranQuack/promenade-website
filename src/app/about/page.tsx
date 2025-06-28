import ImageBlock from "@/components/ui/ImageBlock";

export default function About(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-grow w-3/4">
        <ImageBlock alt="about" src="/about.jpg" />

        <p className="text-lg mb-6 h-[2000px]">
          We are a barbershop quartet based in Christchurch, New Zealand,
          dedicated to bringing joy through music.
        </p>
      </main>
    </div>
  );
}
