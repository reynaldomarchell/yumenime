"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { EpisodeInfoTypes } from "@/types";
import { getEpisodeInfo } from "@/lib/consumet";
import { useEffect, useState } from "react";

export function EpisodeList() {
  const searchParams = useSearchParams();
  const animeId = searchParams.get("id");
  const episodeNumber = searchParams.get("ep");
  const [animeInfo, setAnimeInfo] = useState<EpisodeInfoTypes>();

  useEffect(() => {
    getEpisodeInfo(animeId).then((data) => setAnimeInfo(data));
  }, [animeId]);

  return (
    <div className="mb-4 h-72 md:h-dvh md:w-[40%]">
      <div className="flex h-full flex-col gap-2 divide-y border p-2 shadow-lg">
        <h1 className="font-bold text-foreground">
          {animeInfo?.title
            ? `${animeInfo.title} - Episode ${episodeNumber}`
            : "Loading..."}
        </h1>
        <div className="flex flex-col gap-2 overflow-auto px-5 py-2 text-center font-semibold">
          {animeInfo?.episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/watch/${episode.id}?id=${animeInfo.id}&ep=${episode.number}`}
            >
              <p
                className={`rounded-sm px-2 py-1 shadow-lg transition-all duration-300 ease-in-out ${
                  episode.number === Number(episodeNumber)
                    ? "border border-gray-500 bg-gray-800 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-400"
                }`}
              >
                Episode {episode.number}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
