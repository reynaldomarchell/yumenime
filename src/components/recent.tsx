import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getRecentEpisode } from "@/lib/consumet";
import { RecentTypes } from "@/types";
import Link from "next/link";

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
                className="w-24 shrink-0 overflow-hidden rounded-[5px] transition-all duration-300 ease-in-out hover:bg-gray-800 md:w-fit"
              >
                <Image
                  src={episode.image}
                  alt={episode.episodeId}
                  className="aspect-[2/3] object-cover"
                  priority
                  width={200}
                  height={300}
                />

                <figcaption className="space-y-1 p-1 pt-2 text-xs text-muted-foreground">
                  <span className="hidden font-semibold text-foreground md:block">
                    {episode.title.length > 28
                      ? `${episode.title.slice(0, 29)}...`
                      : episode.title}
                  </span>
                  <span className="text-[10px] font-semibold text-foreground md:hidden">
                    {episode.title.length > 11
                      ? `${episode.title.slice(0, 12)}...`
                      : episode.title}
                  </span>
                  <p>Episode {episode.episodeNumber}</p>
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
