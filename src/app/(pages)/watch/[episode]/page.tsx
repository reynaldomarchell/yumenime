"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EpisodePage({
  params,
}: {
  params: { episode: string };
}) {
  const episodeId = params.episode;
  const searchParams = useSearchParams();
  const episodeNumber = searchParams.get("ep");

  return (
    <div>
      <h1>Watch: {episodeId}</h1>
      <h1>Episode: {episodeNumber}</h1>
    </div>
  );
}
