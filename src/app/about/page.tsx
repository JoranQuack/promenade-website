"use client";
import Image from "next/image";
import ImageBlock from "@/components/ui/ImageBlock";
import { useState } from "react";

const members = [
  {
    name: "Will Harris",
    src: "/willH.png",
    voice: "Tenor",
    bio: "No cap, Will's high notes hit different fr fr. Man's whole vibe is straight bussin when he starts belting. Lowkey the most sigma member",
  },
  {
    name: "Will Lynch",
    src: "/willL.png",
    voice: "Lead",
    bio: "Bro thinks he's the main character and honestly? He's not wrong. Will's voice is giving main character energy. Rizz level: unmatched. We stan a king.",
    website: "https://willlynchmusic.com",
  },
  {
    name: "Kieran King",
    src: "/kieran.png",
    voice: "Bass",
    bio: "Kieran's bass notes are so deep they're basically in the backrooms. Mans really said 'I'll just vibrate the floor' and we respect that. Certified goofy ahh bass moment.",
  },
  {
    name: "Harry Burt",
    src: "/harry.png",
    voice: "Baritone",
    bio: "Harry's mid-range is absolutely sending us. Bro's harmonies are chef's kiss, no thoughts just vibes. Periodt. That's the tea sis.",
  },
];

export default function About(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Detect touch device (simple check)
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="grow w-full max-w-7xl px-2 sm:px-4">
        <ImageBlock alt="about" src="/about.jpg" />

        <p className="text-2xl text-center mb-2">
          We are a barbershop quartet based in Christchurch, New Zealand,
          dedicated to bringing joy through music and harmony and friendship and
          community and music.
        </p>

        <p className="font-light mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          aspernatur aliquam eius quod unde, nemo qui, autem, nulla asperiores
          consectetur esse architecto? Perspiciatis commodi, ullam rem iusto
          voluptatum modi hic? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quae amet eaque, neque at dolor. Vero commodi
          officiis temporibus quo ut labore atque alias ab. Ad voluptas ipsam
          minima incidunt?
        </p>

        <div className="flex flex-col sm:flex-row w-full gap-4 mb-4 h-auto sm:h-[80vh]">
          {members.map((member, idx) => {
            // On mobile, use activeIndex for effect; on desktop, use hover
            const isActive = isTouch ? activeIndex === idx : false;
            return (
              <div
                className={`flex-1 min-h-[300px] transition-all duration-500 ease-in-out hover:flex-5 group relative overflow-hidden rounded-2xl
                  ${isActive ? "flex-5" : ""}
                `}
                key={member.name}
                onClick={() => {
                  if (isTouch) setActiveIndex(activeIndex === idx ? null : idx);
                }}
              >
                <Image
                  alt={member.name}
                  className={`object-cover w-full h-full transition-all duration-500
                    group-hover:blur-sm group-hover:brightness-50
                    ${isActive ? "blur-sm brightness-50" : ""}
                  `}
                  height={1000}
                  src={member.src}
                  width={1000}
                />

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:delay-300 p-4 sm:p-12
                    ${isActive ? "opacity-100 delay-300" : ""}
                  `}
                >
                  <h3 className="text-bright text-2xl sm:text-3xl font-bold mb-2">
                    {member.name}
                  </h3>

                  <h4 className="text-bright font-medium mb-3">
                    {member.voice}
                  </h4>

                  <p className="text-bright text-base sm:text-xl text-center">
                    {member.bio}
                  </p>

                  {member.website && (
                    <a
                      className="text-bright underline mt-2"
                      href={member.website}
                      target="_blank"
                    >
                      Visit Website ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
