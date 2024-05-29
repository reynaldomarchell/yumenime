import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSlider() {
  return (
    <div className="my-2 flex w-full gap-4 overflow-hidden py-2">
      {Array.from({ length: 30 }).map((_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <Skeleton className="h-40 max-w-28 rounded-xl md:h-24 md:max-w-16" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-28 md:w-16" />
            <Skeleton className="h-4 w-28 md:w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
