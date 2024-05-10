import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getRecentEpisode } from "@/lib/consumet";
import { RecentTypes } from "@/types";

export async function Recent() {
  const recentEpisodes: RecentTypes[] = await getRecentEpisode();

  // console.log(recentEpisodes);

  return (
    <div>
      <h1 className="py-2 text-xs font-semibold md:py-4 md:text-base">
        Recently Updated
      </h1>
      <ScrollArea className="max-h-fit w-full border-b pb-4">
        <div className="flex w-max space-x-4 pb-2">
          {recentEpisodes.map((episode) => (
            <Link key={episode.episodeId} href={`/watch/${episode.episodeId}`}>
              <figure
                key={episode.episodeId}
                className="flex max-w-24 shrink-0 flex-col overflow-hidden rounded-[5px] md:w-fit md:max-w-48"
              >
                <div className="overflow-hidden rounded-b-[5px]">
                  <Image
                    src={episode.image}
                    alt={episode.episodeId}
                    className="aspect-[2/3] object-cover transition-all duration-300 hover:scale-110"
                    priority
                    width={200}
                    height={300}
                  />
                </div>
                <figcaption className="z-10 bg-gray-950 py-2 text-muted-foreground">
                  <h2 className="hidden text-xs font-semibold text-foreground md:block">
                    {episode.title}
                  </h2>
                  <h2 className="text-[8px] font-semibold text-foreground md:hidden">
                    {episode.title}
                  </h2>
                  <p className="text-[8px] md:text-xs">
                    Episode {episode.episodeNumber}
                  </p>
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
