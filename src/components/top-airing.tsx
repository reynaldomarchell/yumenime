"use client";

import * as React from "react";
import Image from "next/image";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Popular = {
  episodeId: string;
  episodeNumber: number;
  id: string;
  image: string;
  title: string;
};

const url = "https://yumenime-api2.vercel.app/anime/gogoanime/top-airing";

async function getPopularAnime() {
  try {
    const { data } = await axios.get(url, { params: { page: 1 } });
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export function TopAiring() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [popularAnime, setPopularAnime] = React.useState<any | null>(null);
  React.useEffect(() => {
    getPopularAnime().then((data) => {
      setPopularAnime(data);
    });
  }, []);

  // console.log(popularAnime?.results);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-h-fit w-full rounded-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {popularAnime?.results.map((anime: Popular) => (
          <CarouselItem key={anime.id}>
            <Image
              src={anime.image}
              alt={anime.title}
              width={5000}
              height={300}
              className="aspect-[3/1] transform object-cover blur-sm "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
