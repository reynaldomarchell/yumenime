import { Suspense } from "react";
import { Banner } from "@/components/detail/banner";
import { AnimeDetail } from "@/components/detail/anime-detail";
import { SkeletonBanner } from "@/components/skeleton/skeleton-banner";
import { SkeletonSlider } from "@/components/skeleton/skeleton-slider";

export default function DetailPage({ params }: { params: { title: string } }) {
  const animeId = params.title;
  return (
    <div className="flex h-full w-full flex-col">
      <Suspense fallback={<SkeletonBanner />}>
        <Banner animeId={animeId} />
      </Suspense>
      <Suspense fallback={<SkeletonSlider />}>
        <AnimeDetail animeId={animeId} />
      </Suspense>
    </div>
  );
}
