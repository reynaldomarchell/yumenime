import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSlider() {
  return (
    <div>
      <div className="my-3 flex w-full gap-4 overflow-hidden py-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="aspect-[2/3] max-w-24 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        ))}
      </div>
      <div className="my-3 flex w-full gap-4 overflow-hidden py-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="aspect-[2/3] max-w-24 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
