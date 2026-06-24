import localFont from "next/font/local";
import { groq } from "next-sanity";
import Header from "../../components/shared/Header";
import SmoothScroll from "../../components/shared/SmoothScroll";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "../globals.css";

const mundial = localFont({
  src: [
    {
      path: "../../assets/fonts/MundialThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialHair.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialHairItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialDemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialDemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/MundialBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../assets/fonts/MundialBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-mundial",
});

export default function SiteLayout(
  props: React.PropsWithChildren<object>,
): Promise<React.ReactElement> {
  return SiteLayoutContent(props);
}

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  logo,
  logoPath,
  navigation[]{title, href, openInNewTab}
}`;

async function SiteLayoutContent(
  props: React.PropsWithChildren<object>,
): Promise<React.ReactElement> {
  const settings = await client.fetch<{
    logo?: unknown;
    logoPath?: string;
    navigation?: Array<{
      title: string;
      href: string;
      openInNewTab?: boolean;
    }>;
  }>(siteSettingsQuery);

  const logoSrc = settings?.logo
    ? urlFor(settings.logo).width(600).url()
    : undefined;

  return (
    <div
      className={`${mundial.variable} ${mundial.className} antialiased bg-dark`}
    >
      <SmoothScroll />
      <Header logoPath={logoSrc} routes={settings?.navigation ?? []} />
      <div className="mt-28">{props.children}</div>
    </div>
  );
}
