"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EpisodeInfoTypes, EpisodeListTypes } from "@/types";
import { getEpisodeInfo } from "@/lib/consumet";
import { SkeletonSlider } from "../skeleton/skeleton-slider";

export function Episodes({ idGogo }: { idGogo: string }) {
  const [animeEpisodes, setAnimeEpisodes] = useState<EpisodeInfoTypes>();
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEpisodeInfo(idGogo).then((data) => {
      setAnimeEpisodes(data);
      setLoading(false);
    });
  }, [idGogo]);

  if (loading) return <SkeletonSlider />;

  return (
    <ScrollArea className="max-h-fit w-full pb-4">
      <div className="flex w-max space-x-4 pb-2">
        {animeEpisodes?.episodes.map((episode: EpisodeListTypes) => (
          <figure
            key={episode.id}
            className="flex max-w-24 shrink-0 flex-col overflow-hidden rounded-lg md:w-fit md:max-w-48 "
          >
            <div className="relative overflow-hidden rounded-b-lg">
              <Link
                key={episode.id}
                href={`/watch/${episode.id}?id=${animeEpisodes.id}&ep=${episode.number}`}
              >
                <Image
                  src={
                    imageError ? `/placeholder.png` : `${animeEpisodes.image}`
                  }
                  alt={episode.id}
                  className="aspect-[2/3] object-cover transition-all duration-300 hover:scale-110"
                  width={200}
                  height={300}
                  onError={() => setImageError(true)}
                />
                <div
                  className={`absolute top-0 flex h-full w-full items-center justify-center object-cover px-1 text-center text-[10px] transition-all duration-300 hover:scale-110 md:px-2 md:text-xs ${imageError ? "" : " hidden"}`}
                >
                  <p>{animeEpisodes.title}</p>
                </div>
              </Link>
            </div>
            <figcaption className="py-2 text-muted-foreground">
              <h2 className="text-xs font-semibold text-foreground">
                Episode {episode.number}
              </h2>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="mb-2" />
    </ScrollArea>
  );
}
