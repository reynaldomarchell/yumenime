"use client";

import { RelationTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Relations({ relatedAnime }: { relatedAnime: RelationTypes[] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <ScrollArea className="max-h-fit w-full pb-4">
      <div className="flex w-max space-x-4 pb-2">
        {relatedAnime?.map((anime: RelationTypes) => (
          <figure
            key={anime.id}
            className="flex max-w-24 shrink-0 flex-col overflow-hidden rounded-lg md:w-fit md:max-w-48 "
          >
            <div className="relative overflow-hidden rounded-b-lg">
              <Link
                key={anime.id}
                href={
                  anime.type !== "ANIME"
                    ? `https://anilist.co/${anime.type}/${anime.id}`
                    : `/detail/${anime.id}`
                }
              >
                <Image
                  src={
                    imageError
                      ? `/placeholder.png`
                      : `${anime.coverImage.large}`
                  }
                  alt={anime.title.romaji}
                  className="aspect-[2/3] object-cover transition-all duration-300 hover:scale-110"
                  width={200}
                  height={300}
                  onError={() => setImageError(true)}
                />
                <div
                  className={`absolute top-0 flex h-full w-full items-center justify-center object-cover px-1 text-center text-[10px] transition-all duration-300 hover:scale-110 md:px-2 md:text-xs ${imageError ? "" : " hidden"}`}
                >
                  <p>{anime.title.romaji}</p>
                </div>
              </Link>
            </div>
            <figcaption className="py-2 text-muted-foreground">
              <h2 className="text-[8px] font-semibold text-foreground md:text-xs ">
                {anime.title.romaji}
              </h2>
              <p className="text-[8px] md:text-xs">
                {anime.type === "ANIME"
                  ? `${anime.type} | ${anime.episodes || "-"}`
                  : anime.type}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="mb-2" />
    </ScrollArea>
  );
}
