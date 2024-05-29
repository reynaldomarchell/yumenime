import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonBanner() {
  return (
    <div className="my-2 flex max-h-fit w-full">
      <Skeleton className="h-24 w-full rounded-xl object-cover md:h-40" />
    </div>
  );
}
