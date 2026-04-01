export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen items-center -mt-28">
      <main className="h-full">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-6xl text-white font-bold mb-4 text-center">
            Welcome to Promenade Quartet
          </h1>
          <p className="text-xl text-white mb-8 text-center">
            A barbershop quartet based in Christchurch, New Zealand.
          </p>
        </div>
      </main>
    </div>
  );
}
