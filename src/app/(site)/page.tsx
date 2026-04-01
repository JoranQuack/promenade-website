import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const homepageQuery = groq`*[_type == "homepage"][0]{heading, subheading}`;

export default async function Home(): Promise<React.ReactElement> {
  const homepage = await client.fetch<{
    heading?: string;
    subheading?: string;
  }>(homepageQuery);

  return (
    <div className="flex flex-col min-h-screen items-center -mt-28">
      <main className="h-full">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-6xl text-white font-bold mb-4 text-center">
            {homepage?.heading}
          </h1>
          <p className="text-xl text-white mb-8 text-center">
            {homepage?.subheading}
          </p>
        </div>
      </main>
    </div>
  );
}
