import { Player } from "@/components/watch/player";
import { EpisodeList } from "@/components/watch/episode-list";

export default function EpisodePage({
  params,
}: {
  params: { episode: string };
}) {
  const episodeId = params.episode;

  return (
    <div className="flex h-full w-full flex-col gap-2 py-2 md:flex-row md:py-4">
      <Player episodeId={episodeId} />
      <EpisodeList />
    </div>
  );
}
