import { Banner } from "@/components/detail/banner";
import { AnimeDetail } from "@/components/detail/anime-detail";

export default function DetailPage({ params }: { params: { title: string } }) {
  const animeId = params.title;

  return (
    <div className="flex h-full w-full flex-col px-8">
      <Banner animeId={animeId} />
      <AnimeDetail animeId={animeId} />
    </div>
  );
}
