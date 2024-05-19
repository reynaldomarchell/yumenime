import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col gap-2 py-2 md:flex-row md:gap-8 md:py-4">
      <div className="flex max-h-fit w-full flex-col space-y-2 pb-1 md:space-y-3">
        <Skeleton className="aspect-[3/1] rounded-xl object-cover" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
      <Skeleton className="h-96 rounded-xl object-cover md:h-dvh md:w-1/4" />
    </div>
  );
}
