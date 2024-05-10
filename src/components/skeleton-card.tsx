import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex max-h-fit w-full flex-col space-y-2 pb-1 md:space-y-3">
      <Skeleton className="aspect-[3/1] w-full rounded-xl object-cover" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
}
