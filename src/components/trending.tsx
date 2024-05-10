"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaPlay } from "react-icons/fa";

import { getTrendingAnime } from "@/lib/amvstrm";
import { TrendingTypes } from "@/types";

export function Trending() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [trendingAnime, setTrendingAnime] = useState<TrendingTypes[]>([]);

  useEffect(() => {
    getTrendingAnime().then((data) => setTrendingAnime(data));
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-h-fit w-full border-b py-2 md:py-4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {trendingAnime.map((anime: TrendingTypes) => (
          <CarouselItem key={anime.id}>
            <Image
              src={anime.bannerImage || anime.coverImage.extraLarge}
              alt={anime.title.romaji}
              width={1000}
              height={500}
              priority
              className="aspect-[3/1] w-full object-cover"
            />
            <div className="absolute top-0 z-10 h-full w-full scale-105 bg-transparent bg-gradient-to-r from-gray-950"></div>
            <div className="absolute top-0 z-20 flex h-full w-max flex-col justify-around px-2 py-1 md:px-4">
              <div className="flex max-w-lg flex-col gap-2">
                <h1 className="w-max text-xs font-semibold md:hidden">
                  {anime.title.romaji &&
                    (anime.title.romaji.length > 40
                      ? `${anime.title.romaji.slice(0, 41)}...`
                      : anime.title.romaji)}
                </h1>
                <h1 className="hidden text-base font-semibold md:block">
                  {anime.title.romaji}
                </h1>
                <p className="max-w-md text-[8px] sm:hidden">
                  {anime.description.length > 60
                    ? `${anime.description.slice(0, 61).replace(/(<([^>]+)>)/gi, "")}...`
                    : anime.description.replace(/(<([^>]+)>)/gi, "")}
                </p>
                <p className="hidden text-xs sm:block">
                  {anime.description.length > 200
                    ? `${anime.description.slice(0, 201).replace(/(<([^>]+)>)/gi, "")}...`
                    : anime.description.replace(/(<([^>]+)>)/gi, "")}
                </p>
                <div className="flex w-max gap-1">
                  {anime.genres.slice(0, 4).map((genre) => (
                    <p
                      key={genre}
                      className="rounded-[5px] bg-gray-800 p-1 text-[7px] shadow-lg sm:text-xs"
                    >
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
              <Link
                href={`/detail/${anime.id}`}
                className="flex w-max cursor-pointer items-center gap-1 rounded-[5px] bg-gray-100 px-2 py-1 text-[8px] font-semibold text-black shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-500 sm:text-base"
              >
                <FaPlay />
                <p>Watch Now</p>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
