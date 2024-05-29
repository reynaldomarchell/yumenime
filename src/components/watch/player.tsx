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

export function Player({ episodeId }: { episodeId: string }) {
  const searchParams = useSearchParams();
  const animeId = searchParams.get("id");
  const [animeInfo, setAnimeInfo] = useState<EpisodeInfoTypes>();
  const [episodeData, setEpisodeData] = useState<StreamingTypes>();
  const [isClient, setIsClient] = useState(false);
  const [quality, setQuality] = useState<string>("default");
  const [timestamp, setTimestamp] = useState<number>(0);
  const ref = useRef<MediaPlayerInstance>(null),
    { currentTime } = useStore(MediaPlayerInstance, ref);

  useEffect(() => {
    getStreamingLinks(episodeId).then((data) => setEpisodeData(data));
    getEpisodeInfo(animeId).then((data) => setAnimeInfo(data));
    setIsClient(true);
  }, [episodeId, animeId]);

  useEffect(() => {
    if (currentTime) {
      setTimestamp(currentTime);
    }
  }, [quality]);

  const handleQualityChange = (newQuality: string) => {
    if (ref.current) {
      ref.current.currentTime = timestamp;
    }
    setQuality(newQuality);
  };

  // console.log({ episodeId, episodeData, animeInfo, quality, timestamp });

  return (
    <div className="mb-4 flex flex-col gap-2 md:w-[60%]">
      {isClient ? (
        <div className="aspect-video object-cover shadow-lg">
          <MediaPlayer
            className="ring-media-focus bg-slate-900 data-[focus]:ring-4"
            ref={ref}
            title={episodeId}
            src={
              episodeData?.sources.find((source) => source.quality === quality)
                ?.url
            }
            controls={true}
            playsInline
            poster={animeInfo?.image}
            currentTime={timestamp}
          >
            <MediaProvider />
          </MediaPlayer>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
      <h2 className="text-sm text-foreground md:text-base">Choose Quality :</h2>
      <div className="flex flex-wrap gap-2">
        {episodeData?.sources.map((source) => (
          <button
            key={source.quality}
            onClick={() => handleQualityChange(source.quality)}
            className={`${
              quality === source.quality
                ? "border border-gray-500 bg-gray-800 text-white"
                : "bg-gray-200 text-black hover:bg-gray-400"
            } rounded-md px-2 py-1 text-xs shadow-lg transition-all duration-300 ease-in-out md:text-sm`}
          >
            {source.quality}
          </button>
        ))}
      </div>
    </div>
  );
}
