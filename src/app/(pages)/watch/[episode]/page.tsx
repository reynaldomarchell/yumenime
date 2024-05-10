import Link from "next/link";

export default function EpisodePage({
  params,
}: {
  params: { episode: string };
}) {
  const episode = params.episode;
  return (
    <div>
      <h1>Watch: {episode}</h1>
    </div>
  );
}
