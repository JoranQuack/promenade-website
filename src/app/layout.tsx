import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mundial = localFont({
  src: [
    {
      path: "../assets/fonts/MundialThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialHair.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialHairItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialDemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialDemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/MundialBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/MundialBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-mundial",
});

export const metadata: Metadata = {
  title: "Promenade Quartet",
  description:
    "Promenade is a barbershop quartet based in Christchurch, New Zealand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mundial.variable} antialiased`}>{children}</body>
    </html>
  );
}
