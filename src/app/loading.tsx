import { SkeletonBanner } from "@/components/skeleton/skeleton-banner";
import { SkeletonSlider } from "@/components/skeleton/skeleton-slider";

export default function Loading() {
  return (
    <div>
      <SkeletonBanner />
      <SkeletonSlider />
      <SkeletonSlider />
    </div>
  );
}
