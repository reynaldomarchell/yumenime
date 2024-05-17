import { Suspense } from "react";
import { Recent } from "@/components/recent";
import { Trending } from "@/components/trending";
import { SkeletonTrending } from "@/components/skeleton-trending";
import { Popular } from "@/components/popular";
import { SkeletonSlider } from "@/components/skeleton-slider";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Suspense fallback={<SkeletonTrending />}>
        <Trending />
      </Suspense>
      <Suspense fallback={<SkeletonSlider />}>
        <Recent />
        <Popular />
      </Suspense>
    </div>
  );
}
