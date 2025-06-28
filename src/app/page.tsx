import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="h-[2000px]">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-6xl text-white font-bold mb-4">
            Welcome to Promenade Quartet
          </h1>

          <p className="text-xl text-white mb-8">
            A barbershop quartet based in Christchurch, New Zealand.
          </p>
        </div>
      </main>
    </div>
  );
}
