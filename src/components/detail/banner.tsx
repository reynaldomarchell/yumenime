"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAnimeInfo } from "@/lib/amvstrm";
import { InfoTypes } from "@/types";

export function Banner({ animeId }: { animeId: string }) {
  const [animeInfo, setAnimeInfo] = useState<InfoTypes>({} as InfoTypes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimeInfo(animeId).then((data) => {
      setAnimeInfo(data);
      setLoading(false);
    });
  }, [animeId]);

  if (loading) return;

  return (
    <div className="relative">
      <div className="relative max-h-fit w-full py-2 md:py-4">
        <Image
          src={animeInfo.bannerImage || animeInfo.coverImage.large}
          alt={animeInfo.title.romaji}
          width={1000}
          height={500}
          priority
          className="aspect-[3/1] w-full object-cover"
        />
        <div className="absolute top-0 z-10 h-full w-full bg-transparent bg-gradient-to-t from-gray-950" />
      </div>
      <div className="h-14 pl-4 md:pl-8">
        <div className="absolute bottom-0 z-10 flex gap-4">
          <Image
            src={animeInfo.coverImage.large}
            alt={animeInfo.title.romaji}
            width={200}
            height={300}
            className="aspect-[2/3] w-20 rounded-md object-cover shadow-lg md:w-40"
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-xs font-semibold text-foreground md:text-base">
              {animeInfo.title.romaji}
            </h1>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {animeInfo.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-md bg-gray-800 px-1 py-1 text-[8px] font-medium text-muted-foreground md:px-2 md:text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
