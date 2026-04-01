import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Promenade Quartet",
  description:
    "Promenade is a barbershop quartet based in Christchurch, New Zealand.",
};

export default function RootLayout(
  props: React.PropsWithChildren<object>,
): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-dark">{props.children}</body>
    </html>
  );
}
