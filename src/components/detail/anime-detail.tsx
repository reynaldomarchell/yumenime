"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAnimeInfo } from "@/lib/amvstrm";
import { InfoTypes } from "@/types";
import { Episodes } from "./episodes";
import { Relations } from "./relations";
import { Recomendations } from "./recomendations";
import SkeletonDetail from "../skeleton/skeleton-detail";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import "@vidstack/react/player/styles/base.css";

function getDate(date: { year: number; month: number; day: number }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const newDate = new Date(date.year, date.month - 1, date.day);
  const formattedDate = `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
  return formattedDate;
}

export function AnimeDetail({ animeId }: { animeId: string }) {
  const [animeInfo, setAnimeInfo] = useState<InfoTypes>({} as InfoTypes);
  const [loading, setLoading] = useState(true);
  const [episodesidGogo, setEpisodesidGogo] = useState<string>("");
  const [isDub, setIsDub] = useState<boolean>(false);

  useEffect(() => {
    getAnimeInfo(animeId).then((data) => {
      setAnimeInfo(data);
      setEpisodesidGogo(data?.id_provider?.idGogo);
      setLoading(false);
    });
  }, [animeId]);

  if (loading) return <SkeletonDetail />;

  if (!animeInfo)
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-6">
        <Image
          src={"/not-found.gif"}
          alt={"Restricted"}
          width={500}
          height={500}
          priority
          className="h-72 rounded-md object-cover"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-lg font-bold text-red-500">Cannot find page!</h1>
          <p>
            This could be due to the server not responding or the page you are
            looking for being restricted. 🫣
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border-b py-4 md:flex-row md:divide-x">
        <div className="flex justify-between py-4 text-sm md:w-1/2 md:pr-4 md:text-base">
          <div className="flex w-max flex-col items-start  gap-1 text-gray-400">
            <p>Mean Score</p>
            <p>Status</p>
            <p>Total Episodes</p>
            <p>Average Duration</p>
            <p>Format</p>
            <p>Studio</p>
            <p>Season</p>
            <p>Start Date</p>
            <p>End Date</p>
          </div>
          <div className="flex w-max flex-col items-end  gap-1 font-medium text-gray-100">
            <p>
              <span className="text-pink-400">
                {animeInfo?.score.decimalScore || "-"}
              </span>{" "}
              / 10
            </p>
            <p>{animeInfo?.status || "-"}</p>
            <p>{animeInfo?.episodes || "-"}</p>
            <p>{animeInfo?.duration ? `${animeInfo?.duration} mins` : "-"}</p>
            <p>{animeInfo?.format || "-"}</p>
            <p>
              <span className="text-pink-400">
                {animeInfo?.studios.length > 0
                  ? animeInfo?.studios[0].name
                  : "-"}
              </span>
            </p>
            <p>
              {animeInfo?.season && animeInfo?.year
                ? `${animeInfo?.season} ${animeInfo?.year}`
                : "-"}
            </p>
            <p>
              {animeInfo?.startIn.day &&
              animeInfo?.startIn.month &&
              animeInfo?.startIn.year
                ? getDate(animeInfo?.startIn)
                : "-"}
            </p>
            <p>
              {animeInfo?.endIn.day &&
              animeInfo?.endIn.month &&
              animeInfo?.endIn.year
                ? getDate(animeInfo?.endIn)
                : "-"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:w-1/2 md:py-4 md:pl-4">
          <h1 className="font-semibold">Synopsis</h1>
          <p className="text-xs md:text-sm">
            {animeInfo?.description
              ? animeInfo?.description?.replace(/(<([^>]+)>)/gi, "")
              : "-"}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        {animeInfo?.trailer?.id && (
          <div>
            <h1 className="pb-2 font-semibold">Trailer</h1>
            <div className="flex w-full items-center justify-center">
              <div className="aspect-video w-full object-cover shadow-lg md:w-1/2">
                <MediaPlayer
                  className="bg-slate-900"
                  title={animeInfo?.title.romaji}
                  poster={animeInfo?.bannerImage || animeInfo?.coverImage.large}
                  controls={true}
                  playsInline
                  src={`youtube/${animeInfo?.trailer.id}`}
                >
                  <MediaProvider />
                </MediaPlayer>
              </div>
            </div>
          </div>
        )}
        {animeInfo?.id_provider?.idGogo && animeInfo?.id_provider?.idGogoDub ? (
          <div>
            <h1 className="pb-2 font-semibold">
              Episodes {isDub ? "(Dub)" : "(Sub)"}
            </h1>
            <div className="flex items-center gap-2 pb-4">
              <button
                onClick={() =>
                  setEpisodesidGogo(animeInfo?.id_provider?.idGogo || "")
                }
                className={`${
                  !isDub
                    ? "border border-gray-500 bg-gray-800 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-400"
                } rounded-md px-2 py-1 text-xs shadow-lg transition-all duration-300 ease-in-out md:text-sm`}
              >
                Sub
              </button>
              <button
                onClick={() =>
                  setEpisodesidGogo(animeInfo?.id_provider?.idGogoDub || "")
                }
                className={`${
                  isDub
                    ? "border border-gray-500 bg-gray-800 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-400"
                } rounded-md px-2 py-1 text-xs shadow-lg transition-all duration-300 ease-in-out md:text-sm`}
              >
                Dub
              </button>
            </div>
            <Episodes idGogo={episodesidGogo} setIsDub={setIsDub} />
          </div>
        ) : (
          animeInfo?.id_provider?.idGogo && (
            <div>
              <h1 className="pb-2 font-semibold">Episodes (Sub)</h1>
              <Episodes
                idGogo={animeInfo?.id_provider.idGogo}
                setIsDub={setIsDub}
              />
            </div>
          )
        )}
        {animeInfo?.relation.length > 0 && (
          <div>
            <h1 className="pb-2 font-semibold">Relations</h1>
            <Relations relatedAnime={animeInfo?.relation} />
          </div>
        )}
        <Recomendations animeId={animeId} />
      </div>
    </div>
  );
}
