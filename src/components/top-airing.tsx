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
import { getPopularAnime } from "@/lib/consumet";
import { Popular } from "@/types";

export function TopAiring() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [popularAnime, setPopularAnime] = useState<Popular[]>([]);

  useEffect(() => {
    getPopularAnime().then((data) => {
      setPopularAnime(data);
    });
  }, []);

  // console.log(popularAnime);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-h-fit w-full rounded-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {popularAnime.map((anime: Popular) => (
          <CarouselItem key={anime.id}>
            <Image
              src={anime.image}
              alt={anime.title}
              width={1000}
              height={500}
              className="aspect-[3/1] w-full object-cover"
            />
            <div className="absolute top-0 z-10 h-full w-full scale-110 bg-transparent bg-gradient-to-r from-gray-950"></div>
            <div className="absolute top-0 z-20 flex h-full w-max flex-col justify-around px-2 py-1">
              <div className="flex flex-col gap-2">
                <h1 className="w-max text-xs font-semibold md:hidden">
                  {anime.title.length > 35
                    ? `${anime.title.slice(0, 36)}...`
                    : anime.title}
                </h1>
                <h1 className="hidden max-w-2xl text-base font-semibold md:block">
                  {anime.title}
                </h1>
                <div className="flex w-max gap-1">
                  {anime.genres.slice(0, 4).map((genre) => (
                    <p
                      key={genre}
                      className="rounded-[5px] bg-gray-800 px-2 py-1 text-[8px] shadow-lg md:text-xs"
                    >
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
              <Link
                href={`/${anime.id}`}
                className="flex w-max cursor-pointer items-center gap-1 rounded-[5px] bg-gray-100 px-2 py-1 text-xs font-semibold text-black shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-500 md:text-base"
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
