import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonWatch() {
  return (
    <div className="flex h-full w-full flex-col gap-2 px-8 py-2 md:flex-row md:gap-4 md:py-4">
      <div className="flex max-h-fit w-full flex-col gap-2 pb-1 md:gap-3">
        <Skeleton className="aspect-video object-cover" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
      <Skeleton className="h-72 md:h-96 md:w-[40%]" />
    </div>
  );
}
