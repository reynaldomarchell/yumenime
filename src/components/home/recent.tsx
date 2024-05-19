"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getRecentEpisode } from "@/lib/consumet";
import { RecentTypes } from "@/types";

export function Recent() {
  const [recentEpisodes, setRecentEpisodes] = useState<RecentTypes[]>([]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    getRecentEpisode().then((data) => {
      setRecentEpisodes(data);
    });
  }, []);

  // console.log(recentEpisodes);

  return (
    <div>
      <h1 className="py-2 text-xs font-semibold md:py-4 md:text-base">
        Recently Updated
      </h1>
      <ScrollArea className="max-h-fit w-full border-b pb-4">
        <div className="flex w-max space-x-4 pb-2">
          {recentEpisodes?.map((anime) => (
            <figure
              key={anime.episodeId}
              className="flex max-w-24 shrink-0 flex-col overflow-hidden rounded-lg md:w-fit md:max-w-48"
            >
              <div className="relative overflow-hidden rounded-b-lg">
                <Link
                  key={anime.episodeId}
                  href={`/watch/${anime.episodeId}?id=${anime.id}&ep=${anime.episodeNumber}`}
                >
                  <Image
                    src={imageError ? `/placeholder.png` : `${anime.image}`}
                    alt={anime.title}
                    className="aspect-[2/3] object-cover transition-all duration-300 hover:scale-110"
                    priority
                    width={200}
                    height={300}
                    onError={() => setImageError(true)}
                  />
                  <div
                    className={`absolute top-0 flex h-full w-full items-center justify-center object-cover px-1 text-center text-[10px] transition-all duration-300 hover:scale-110 md:px-2 md:text-xs ${imageError ? "" : " hidden"}`}
                  >
                    <p>{anime.title}</p>
                  </div>
                </Link>
              </div>
              <figcaption className="py-2 text-muted-foreground">
                <h2 className="text-[8px] font-semibold text-foreground md:text-xs ">
                  {anime.title}
                </h2>
                <p className="text-[8px] md:text-xs">
                  Episode {anime.episodeNumber}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mb-2" />
      </ScrollArea>
    </div>
  );
}
