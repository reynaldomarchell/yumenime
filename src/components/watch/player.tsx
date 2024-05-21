"use client";

import { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { getStreamingLinks } from "@/lib/consumet";
import { StreamingTypes } from "@/types";

export function Player({ episodeId }: { episodeId: string }) {
  const [isClient, setIsClient] = useState(false);
  const [episodeData, setEpisodeData] = useState<StreamingTypes>();
  const [quality, setQuality] = useState<string>("default");
  const playerRef = useRef<ReactPlayer | null>(null);
  const [timestamp, setTimestamp] = useState<number>(0);

  useEffect(() => {
    getStreamingLinks(episodeId).then((data) => setEpisodeData(data));
    setIsClient(true);
  }, [episodeId]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(timestamp);
    }
  }, [quality]);

  const handleQualityChange = (newQuality: string) => {
    if (playerRef.current) {
      setTimestamp(playerRef.current.getCurrentTime());
    }
    setQuality(newQuality);
  };

  return (
    <div className="mb-4 flex flex-col gap-2 md:w-[60%]">
      {isClient ? (
        <div className="aspect-video border  object-cover shadow-lg">
          <ReactPlayer
            ref={playerRef}
            url={
              episodeData?.sources.find((source) => source.quality === quality)
                ?.url
            }
            controls={true}
            width="100%"
            height="100%"
            light={true}
            onProgress={(progress) => {
              if (progress.playedSeconds > 0) {
                setTimestamp(progress.playedSeconds);
              }
            }}
          />
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
