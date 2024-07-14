"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getStreamingLinks, getEpisodeInfo } from "@/lib/consumet";
import { EpisodeInfoTypes, StreamingTypes } from "@/types";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  useStore,
} from "@vidstack/react";
import "@vidstack/react/player/styles/base.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export function Player({ episodeId }: { episodeId: string }) {
  const searchParams = useSearchParams();
  const animeId = searchParams.get("id");
  const [animeInfo, setAnimeInfo] = useState<EpisodeInfoTypes>();
  const [episodeData, setEpisodeData] = useState<StreamingTypes>();
  const [isClient, setIsClient] = useState(false);

  const [qualityOpen, setQualityOpen] = useState(false);
  const [quality, setQuality] = useState<string>("default");
  const [timestamp, setTimestamp] = useState<number>(0);
  // const player = useRef<MediaPlayerInstance>(null);
  const player = useRef<MediaPlayerInstance>(null),
    { currentTime } = useStore(MediaPlayerInstance, player);

  useEffect(() => {
    getStreamingLinks(episodeId).then((data) => setEpisodeData(data));
    getEpisodeInfo(animeId).then((data) => setAnimeInfo(data));
    setIsClient(true);
  }, [episodeId, animeId]);

  useEffect(() => {
    // if (player.current) {
    //   player.current.currentTime = timestamp;
    // }
    if (currentTime) {
      setTimestamp(currentTime);
    }
  }, [quality]);

  const handleQualityChange = (newQuality: string) => {
    setQuality(newQuality);
  };

  return (
    <div className="mb-4 flex h-max flex-col gap-2 md:w-[60%]">
      {isClient ? (
        <div className="aspect-video object-cover shadow-lg">
          <MediaPlayer
            ref={player}
            title={episodeId}
            className=" bg-slate-900"
            poster={animeInfo?.image}
            controls={true}
            autoPlay={true}
            currentTime={timestamp}
            playsInline
            src={
              episodeData?.sources.find((source) => source.quality === quality)
                ?.url
            }
            // onProgress={(e) => setTimestamp(player.current!.currentTime)}
          >
            <MediaProvider />
          </MediaPlayer>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
      <div className="flex w-full items-center gap-4">
        <h2 className="text-sm font-medium text-foreground md:text-base">
          Quality
        </h2>
        <div className="relative w-max ">
          <button
            onClick={() => setQualityOpen(!qualityOpen)}
            className="flex items-center gap-2  border px-4 py-2 text-sm text-foreground shadow-lg transition-all duration-300 ease-in-out md:text-base"
          >
            <p>{quality}</p>
            {qualityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {qualityOpen && (
            <div className="absolute top-10 z-20 flex w-full flex-col bg-slate-900 shadow-lg">
              {episodeData?.sources.map((source) => (
                <button
                  key={source.quality}
                  onClick={() => {
                    handleQualityChange(source.quality);
                    setQualityOpen(false);
                  }}
                  className={`${
                    quality === source.quality
                      ? "border-gray-800 bg-gray-800 text-white"
                      : "border-gray-300 bg-gray-200 text-black hover:bg-gray-400"
                  } border-y px-2 py-1 text-xs shadow-lg transition-all duration-300 ease-in-out md:text-sm`}
                >
                  {source.quality}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
