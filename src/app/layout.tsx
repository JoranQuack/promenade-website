import type { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const siteMetadataQuery = groq`*[_type == "siteSettings"][0]{siteTitle, siteDescription}`;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<{
    siteTitle?: string;
    siteDescription?: string;
  }>(siteMetadataQuery);

  return {
    title: settings?.siteTitle,
    description: settings?.siteDescription,
  };
}

export default function RootLayout(
  props: React.PropsWithChildren<object>,
): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-dark">{props.children}</body>
    </html>
  );
}
