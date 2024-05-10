import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getPopularAnime } from "@/lib/amvstrm";
import { PopularTypes } from "@/types";

export async function Popular() {
  const popularAnime: PopularTypes[] = await getPopularAnime();

  // console.log(popularAnime);

  return (
    <div>
      <h1 className="py-2 text-xs font-semibold md:py-4 md:text-base">
        Popular Anime
      </h1>
      <ScrollArea className="max-h-fit w-full pb-4">
        <div className="flex w-max space-x-4 pb-2">
          {popularAnime.map((anime) => (
            <Link key={anime.id} href={`/detail/${anime.id}`}>
              <figure
                key={anime.id}
                className="flex max-w-24 shrink-0 flex-col overflow-hidden rounded-[5px] md:w-fit md:max-w-48"
              >
                <div className="overflow-hidden rounded-b-[5px]">
                  <Image
                    src={anime.coverImage.extraLarge}
                    alt={`${anime.id}`}
                    className="aspect-[2/3] object-cover transition-all duration-300 hover:scale-110"
                    priority
                    width={200}
                    height={300}
                  />
                </div>
                <figcaption className="z-10 bg-gray-950 py-2 text-muted-foreground">
                  <h2 className="hidden text-xs font-semibold text-foreground md:block">
                    {anime.title.romaji}
                  </h2>
                  <h2 className="text-[8px] font-semibold text-foreground md:hidden">
                    {anime.title.romaji}
                  </h2>
                  <p className="text-[8px] md:text-xs">{anime.status}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mb-2" />
      </ScrollArea>
    </div>
  );
}
