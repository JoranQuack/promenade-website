"use client";

import Image from "next/image";
import { useState } from "react";

type Member = {
  _id: string;
  name: string;
  voice: string;
  bio: string;
  photoSrc: string;
  website?: string;
};

export default function AboutMembers({ members }: { members: Member[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div className="flex flex-col sm:flex-row w-full gap-4 mb-4 h-auto sm:h-[80vh]">
      {members.map((member, idx) => {
        const isActive = isTouch ? activeIndex === idx : false;
        return (
          <div
            className={`flex-1 min-h-75 transition-all duration-500 ease-in-out hover:flex-5 group relative overflow-hidden rounded-2xl
              ${isActive ? "flex-5" : ""}
            `}
            key={member._id}
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
              src={member.photoSrc}
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

              <h4 className="text-bright font-medium mb-3">{member.voice}</h4>

              <p className="text-bright text-base sm:text-xl text-center">
                {member.bio}
              </p>

              {member.website && (
                <a
                  className="text-bright underline mt-2"
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website ↗
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
