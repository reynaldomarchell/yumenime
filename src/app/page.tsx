import { Suspense } from "react";
import { Recent } from "@/components/home/recent";
import { Trending } from "@/components/home/trending";
import { Popular } from "@/components/home/popular";
import { SkeletonBanner } from "@/components/skeleton/skeleton-banner";
import { SkeletonSlider } from "@/components/skeleton/skeleton-slider";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Suspense fallback={<SkeletonBanner />}>
        <Trending />
      </Suspense>
      <Suspense fallback={<SkeletonSlider />}>
        <Recent />
        <Popular />
      </Suspense>
    </div>
  );
}
